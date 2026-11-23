"""Checks for the teacher group overview, actionable feedback and the student progress charts.
Reuses the fake Supabase from test_stu.py (read from that file) with per-test data overrides."""
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

async def main():
    res = []
    async with async_playwright() as p:
        br = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        # ---------- teacher overview ----------
        page, errs = await open_page(br, 'teacher', dbx={"profiles":PROF, "progress":PROG, "submissions":SUBS})
        await page.click("header.bar >> text=Students"); await page.wait_for_timeout(1000)
        txt = await page.inner_text("body")
        low = txt.lower()
        res.append(("overview has its blocks", all(x.lower() in low for x in ["Group overview","Needs attention","Waiting for your score","Where the group struggles","Module progress"])))
        res.append(("stalled student flagged with idle days and last place", "Ana Perez" in txt and "No activity for 10 days" in txt and "last on Reading Day 6" in txt))
        res.append(("never-started student flagged", "Has not started" in txt and "Beto Rios" in txt))
        res.append(("new student (joined today) is not flagged", await page.evaluate("[...document.querySelectorAll('.tq-item')].filter(b=>/Has not started|No activity/.test(b.innerText) && /Dario/.test(b.innerText)).length")==0))
        res.append(("active student is not flagged", await page.evaluate("[...document.querySelectorAll('.tq-item')].filter(b=>/Has not started|No activity/.test(b.innerText) && /Carla/.test(b.innerText)).length")==0))
        res.append(("waiting-for-score list shows Carla with 2 and the oldest age", "2 to score" in txt and "oldest 5 days ago" in txt))
        order = await page.evaluate("[...document.querySelectorAll('.bar-row')].map(r=>r.innerText.replace(/\\s+/g,' '))")
        res.append(("group accuracy aggregates and ranks weakest first", len(order)>=2 and "Complete the Words" in order[0] and "30%" in order[0] and "Listen and Choose a Response" in order[1] and "90%" in order[1]))
        res.append(("module table shows section progress", await page.evaluate("[...document.querySelectorAll('.ov-table tbody tr')].some(r=>/Ana Perez/.test(r.innerText) && /5\\/17/.test(r.innerText))")))
        await page.click(".ov-table >> text=Ana Perez"); await page.wait_for_timeout(500)
        res.append(("clicking a student opens the detail", "← All students" in await page.inner_text("body")))
        res.append(("no page errors (teacher)", not errs))
        # ---------- student feedback ----------
        subs = [student_sub(10, 5, "2.5", None, FB, days_ago=3), student_sub(11, 6, "3.5", "4", None, days_ago=2), student_sub(12, 7, "4", "4.5", None, days_ago=1),
                student_sub(13, 3, "3", None, None, prompt="[Writing I · Day 3] z", days_ago=0)]
        today = ago(0)
        saved = {"state":{"days":{"reading-1":{"done":True,"at":today}},"res":{"reading-1-a":{"c":2,"t":10,"tt":"R-CW","at":today},"reading-1-b":{"c":9,"t":10,"tt":"R-DL","at":today}},"work":{},"reflect":{},"habits":{},"tut":{},"settings":{},"last":None,"started":"x"}}
        page, errs = await open_page(br, 'student', dbx={"submissions":subs}, saved=saved)
        await page.wait_for_selector(".fb-card", timeout=8000)
        card = page.locator(".fb-card").filter(has_text="Task completion")
        res.append(("card with structured feedback renders criteria", await card.count()==1 and "Language use" in await card.inner_text() and "2.5/5" in await card.inner_text()))
        ct = await card.inner_text()
        res.append(("fixes show before and after with the reason", "I am agree" in ct and "I agree" in ct and "Third person singular needs s." in ct))
        res.append(("next-time action shown", "Add one concrete example to your second reason." in ct))
        res.append(("fragments are highlighted in the student's response", await card.locator("mark").count()==2))
        res.append(("AI and teacher scores stay separate", "AI estimate" in ct and "Teacher score" in ct))
        res.append(("cards without feedback still render", await page.locator(".fb-card").count()>=3))
        retry = card.locator("button:has-text('Try again')"); res.append(("Try again button present", await retry.count()==1))
        await retry.click(); await page.wait_for_timeout(500)
        res.append(("Try again opens the right module and day (Writing II day 5)", (await page.evaluate("location.hash"))=="#writing2/5"))
        await page.click("button.brand"); await page.wait_for_timeout(800)
        c3 = page.locator(".fb-card").filter(has_text="Day 3")
        await c3.locator("button:has-text('Try again')").click(); await page.wait_for_timeout(500)
        res.append(("Writing I prompt maps to the Writing I module", (await page.evaluate("location.hash"))=="#writing/3"))
        # ---------- progress over time ----------
        await page.click("button.brand"); await page.wait_for_timeout(1000)
        panel = page.locator(".panel").filter(has_text="Your progress").filter(has_text="Practice calendar")
        res.append(("progress panel shows an 8-week calendar", await panel.count()>=1 and await page.locator(".cal .cal-d").count()==56))
        pt = await page.inner_text("body")
        res.append(("calendar counts today's practice", "You practised on 1 of the last 56 days" in pt))
        res.append(("score trend chart is drawn from scored responses", await page.locator("svg[aria-label^='Your scores over time']").count()==1))
        res.append(("weak task type is suggested for review", "Review these first" in pt and "Complete the Words" in pt and "20%" in pt and "Read in Daily Life · 90%" not in pt))
        res.append(("trend carries no TOEFL band claim", "not TOEFL bands" in pt))
        res.append(("no page errors (student)", not errs))
        # ---------- server without the ai_feedback column ----------
        page, errs = await open_page(br, 'student', dbx={"submissions":subs}, saved=saved, nofb=True)
        await page.wait_for_selector(".fb-card", timeout=8000)
        res.append(("falls back when the server has no ai_feedback column", await page.locator(".fb-card").count()>=3 and await page.locator(".fb-card >> text=Fix these").count()==0))
        res.append(("no page errors (fallback)", not errs))
        # ---------- summary sent to the server ----------
        await page.evaluate("window.__BS_TEST.syncNow()"); await page.wait_for_timeout(400)
        ups = [c[1] for c in await page.evaluate("window.__calls") if c[0]=='upsert']
        sm = ups[-1]['summary'] if ups else {}
        res.append(("synced summary has task types, last activity and practice days", bool(sm) and sm.get('types',{}).get('R-CW')=={"c":2,"t":10} and bool(sm.get('lastAct')) and len(sm.get('act',[]))>=1))
        await br.close()
    for k, v in res: print(("PASS " if v else "FAIL ") + k)
    print("ALL PASS" if all(v for _, v in res) else "SOME FAIL")
asyncio.run(main())
