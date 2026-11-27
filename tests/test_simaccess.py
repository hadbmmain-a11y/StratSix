"""Checks for manual open/close of each Test Simulator test (teacher switch + what students see)."""
import os, re, json, asyncio, datetime
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
from playwright.async_api import async_playwright
src = open(os.path.join(HERE, "test_stu.py"), encoding="utf-8").read()
FAKE = re.search(r'FAKE = r"""(.*?)"""', src, re.S).group(1)
assert "  const rec=(k,v)=>" in FAKE
FAKE = FAKE.replace("  const rec=(k,v)=>", "  Object.assign(DB, JSON.parse(sessionStorage.getItem('__dbx')||'{}'));\n  const rec=(k,v)=>", 1)
# a server without the ai_feedback column answers with an error when it is selected
FAKE = FAKE.replace("return (...a)=>{ st.ops.push(m); if(m==='upsert') st.payload=a[0]; return b; };",
                    "return (...a)=>{ st.ops.push(m); if(m==='select') st.cols=String(a[0]||''); if(m==='upsert') st.payload=a[0]; return b; };", 1)
FAKE = FAKE.replace("res({data:DB[t]||[],error:null}); };",
                    "if(sessionStorage.getItem('__nofb') && st.cols && /ai_feedback/.test(st.cols)) return res({data:null,error:{message:'column submissions.ai_feedback does not exist'}}); res({data:(sessionStorage.getItem('__nofb')&&Array.isArray(DB[t]))? DB[t].map(r=>{const c=Object.assign({},r); delete c.ai_feedback; return c;}) : (DB[t]||[]),error:null}); };", 1)
assert "__nofb" in FAKE and "st.cols=" in FAKE

NOW = datetime.datetime.now(datetime.timezone.utc).replace(tzinfo=None)
def ago(d): return (NOW - datetime.timedelta(days=d)).strftime("%Y-%m-%dT%H:%M:%SZ")

async def open_page(br, role, dbx=None, saved=None, nofb=False):
    ctx = await br.new_context(); await ctx.route("**/*", lambda r: r.continue_() if r.request.url.startswith("file:") else r.abort())
    page = await ctx.new_page(); errs = []; page.on("pageerror", lambda e: errs.append(str(e)))
    await ctx.add_init_script(FAKE)
    await page.goto("file://" + ROOT + "/index.html"); await page.wait_for_timeout(300)
    uid = 't1' if role == 'teacher' else 'u1'
    sess = "sessionStorage.setItem('__sess',JSON.stringify({user:{id:'%s',email:'x@x.com',user_metadata:{full_name:'Test User'}}}));sessionStorage.setItem('__role','%s');" % (uid, role)
    if dbx: sess += "sessionStorage.setItem('__dbx',%s);" % json.dumps(json.dumps(dbx))
    if saved: sess += "sessionStorage.setItem('__saved',%s);" % json.dumps(json.dumps(saved))
    if nofb: sess += "sessionStorage.setItem('__nofb','1');"
    await page.evaluate(sess)
    for _ in range(3):
        await page.reload(); await page.wait_for_timeout(300)
        if await page.evaluate('!!window.__sess'): break
        await page.evaluate(sess)
    await page.wait_for_function('window.__BS_TEST && window.__BS_TEST.signedIn()', timeout=8000)
    await page.wait_for_timeout(900)
    return page, errs

PROF = [
  {"id":"t1","full_name":"Hans","email":"h@x.com","role":"teacher","created_at":ago(60)},
  {"id":"u1","full_name":"Ana Perez","email":"ana@x.com","role":"student","created_at":ago(30)},
  {"id":"u2","full_name":"Beto Rios","email":"beto@x.com","role":"student","created_at":ago(9)},
  {"id":"u3","full_name":"Carla Soto","email":"carla@x.com","role":"student","created_at":ago(20)},
  {"id":"u4","full_name":"Dario Vega","email":"dario@x.com","role":"student","created_at":ago(0)}]
def sec(done, c=0, t=0): return {"done":done,"total":17,"c":c,"t":t,"self":None}
PROG = [
  {"user_id":"u1","updated_at":ago(10),"summary":{"sections":{"reading":sec(5,30,40),"listening":sec(2),"writing":sec(0),"writing2":sec(0),"speaking":sec(0)},"mocks":0,"last":{"sec":"reading","day":6},"lastAct":ago(10),
     "types":{"R-CW":{"c":5,"t":20},"L-CR":{"c":18,"t":20}}}},
  {"user_id":"u3","updated_at":ago(1),"summary":{"sections":{"reading":sec(8),"listening":sec(8),"writing":sec(0),"writing2":sec(0),"speaking":sec(0)},"mocks":0,"last":{"sec":"listening","day":9},"lastAct":ago(1),
     "types":{"R-CW":{"c":4,"t":10}}}}]
SUBS = [
  {"id":2,"user_id":"u3","section":"Writing","day":4,"task":"Email","app":"StratSix","prompt":"[Writing I · Day 4] x","response_text":"hello again","words":2,"audio_path":None,"ai_result":None,"teacher_score":None,"teacher_note":None,"created_at":ago(1)},
  {"id":1,"user_id":"u3","section":"Writing","day":3,"task":"Email","app":"StratSix","prompt":"[Writing I · Day 3] x","response_text":"hello","words":1,"audio_path":None,"ai_result":None,"teacher_score":None,"teacher_note":None,"created_at":ago(5)}]

TEXT = "I am agree with the professor. Technology make life easier because we can learn fast."
FB = {"criteria":[{"id":"task","label":"Task completion","score":4,"note":"All points covered."},{"id":"language","label":"Language use","score":2.5,"note":"Verb forms limit clarity."}],
      "fixes":[{"criterion":"language","from":"I am agree","to":"I agree","why":"Agree is a verb, so it needs no am."},{"criterion":"language","from":"Technology make","to":"Technology makes","why":"Third person singular needs s."}],
      "next":"Add one concrete example to your second reason."}
def student_sub(i, day, score, tscore, fb=None, prompt=None, days_ago=0, section="Writing"):
    return {"id":i,"user_id":"u1","section":section,"day":day,"task":"Academic Discussion","app":"StratSix","prompt":prompt or "[Writing II · Day %d · Academic Discussion] q" % day,"response_text":TEXT,"words":14,"audio_path":None,
            "ai_result":"✓ 2026-11-19 · AI %s/5 · Band ≈ 4.5 · https://docs.google.com/d/x" % score,"teacher_score":tscore,"teacher_note":None,"created_at":ago(days_ago),"ai_feedback":fb}

FAKE = FAKE.replace("if(m===\x27select\x27) st.cols=String(a[0]||\x27\x27);", "if(m===\x27select\x27) st.cols=String(a[0]||\x27\x27);", 1)
async def main():
    res = []
    async with async_playwright() as p:
        br = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        # ---------- rules for students ----------
        page, errs = await open_page(br, 'student', dbx={"submissions":[]})
        r = await page.evaluate("""(()=>{ const T = window.__BS_TEST; const o = n => T.simOpen(T.simPlan(n)); const out = {};
          T.S().teacher = false;
          T.setAcc({}); out.closed = [o(1), o(2), o(13)];
          T.setAcc({sim:{"1":"open"}}); out.manualOpen = [o(1), o(2)];
          T.setAcc({reading:{mode:"open",s:"",e:""}}); out.moduleOpen = [o(1), o(2)];
          T.setAcc({reading:{mode:"open",s:"",e:""}, sim:{"1":"locked","2":"open"}}); out.mix = [o(1), o(2)];
          out.lockText = T.simLockText(T.simPlan(1));
          T.S().teacher = true; T.setAcc({sim:{"1":"locked"}}); out.teacherSees = o(1);
          return out; })()""")
        res.append(("default: tests stay closed while the module is closed", r["closed"]==[False,False,False]))
        res.append(("a test opened by hand opens even if the module is closed", r["manualOpen"]==[True,False]))
        res.append(("module open: Diagnostic opens, Mock 1 waits for Day 5", r["moduleOpen"]==[True,False]))
        res.append(("hand switch overrides: locked stays closed, open skips the day rule", r["mix"]==[False,True]))
        res.append(("closed-by-hand text says the teacher has not opened it", r["lockText"]=="Your teacher has not opened this test yet."))
        res.append(("teacher preview still sees every test", r["teacherSees"] is True))
        # ---------- what the student sees in the list ----------
        await page.evaluate("(()=>{ const T = window.__BS_TEST; T.S().teacher = false; T.setAcc({sim:{'1':'open','4':'locked'}}); T.go({name:'sim'}); })()"); await page.wait_for_timeout(500)
        cards = await page.evaluate("[...document.querySelectorAll('.sim-card')].map(c=>c.innerText.replace(/\\s+/g,' ').trim().toLowerCase())")
        t1 = [c for c in cards if c.startswith("t01")]; t4 = [c for c in cards if c.startswith("t04")]; t2 = [c for c in cards if c.startswith("t02")]
        res.append(("opened test shows Start test", len(t1)==1 and "start test" in t1[0]))
        res.append(("test closed by hand shows Locked with the teacher's message", len(t4)==1 and "locked" in t4[0] and "your teacher has not opened this test yet" in t4[0]))
        res.append(("other tests keep their usual lock text", len(t2)==1 and "locked" in t2[0]))
        res.append(("no page errors (student)", not errs))
        # ---------- teacher switches ----------
        page, errs = await open_page(br, 'teacher', dbx={"profiles":PROF, "progress":[], "submissions":[]})
        await page.evaluate("window.__BS_TEST.go({name:'teacher'})"); await page.wait_for_selector("#sim-switch", timeout=8000)
        res.append(("15 test buttons are listed", await page.locator("#sim-switch button[id^='sa-']:not([id='sa-open-all']):not([id='sa-close-all']):not([id='sa-reset'])").count()==15))
        b3 = page.locator("#sa-3")
        res.append(("starts on the usual rule", "✓" not in await b3.inner_text() and "🔒" not in await b3.inner_text()))
        await b3.click(); res.append(("one click opens the test for everyone", "✓" in await b3.inner_text()))
        await b3.click(); res.append(("second click closes it for everyone", "🔒" in await b3.inner_text()))
        await b3.click(); res.append(("third click goes back to the usual rule", "✓" not in await b3.inner_text() and "🔒" not in await b3.inner_text()))
        await page.locator("#sa-open-all").click()
        res.append(("Open all", await page.evaluate("[...document.querySelectorAll('#sim-switch button[id^=sa-]')].filter(b=>/^sa-\\d+$/.test(b.id)).every(b=>b.innerText.includes('✓'))")))
        await page.locator("#sa-close-all").click()
        res.append(("Close all", await page.evaluate("[...document.querySelectorAll('#sim-switch button[id^=sa-]')].filter(b=>/^sa-\\d+$/.test(b.id)).every(b=>b.innerText.includes('🔒'))")))
        await page.locator("#sa-reset").click()
        res.append(("Back to usual rule", await page.evaluate("[...document.querySelectorAll('#sim-switch button[id^=sa-]')].filter(b=>/^sa-\\d+$/.test(b.id)).every(b=>!b.innerText.includes('✓') && !b.innerText.includes('🔒'))")))
        await page.locator("#sa-2").click(); await page.locator("#sa-5").click(); await page.locator("#sa-5").click()
        await page.locator("button:has-text('Save and publish for all students')").click(); await page.wait_for_timeout(600)
        ups = [c[1] for c in await page.evaluate("window.__calls") if c[0]=='upsert' and isinstance(c[1], dict) and c[1].get("key")=="access"]
        res.append(("saving publishes the per-test switches", bool(ups) and ups[-1]["value"].get("sim")=={"2":"open","5":"locked"}))
        res.append(("saved settings keep the module switches", bool(ups) and all(k in ups[-1]["value"] for k in ["reading","listening","writing","writing2","speaking"])))
        res.append(("the panel explains the override", "unless you open or close a test below" in await page.inner_text("body")))
        res.append(("no page errors (teacher)", not errs))
        await br.close()
    for k, v in res: print(("PASS " if v else "FAIL ") + k)
    print("ALL PASS" if all(v for _, v in res) else "SOME FAIL")
asyncio.run(main())
