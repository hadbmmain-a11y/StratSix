"""Checks for the score report: why this score, scale, word check, teacher comparison and the results table.
Reuses the fake Supabase and helpers from test_track.py (header copied)."""
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

FAKE = FAKE.replace("if(m==='select') st.cols=String(a[0]||'');", "if(m==='select') st.cols=String(a[0]||''); if(m==='update') rec('update',a[0]);", 1)
assert "rec('update'" in FAKE

SENT = "The library will close early on Friday because of the holiday"
EMAIL_TXT = "Dear Professor, I was sick on Monday and missed the quiz. I am agree to send it Friday."
FB2 = {"level":3,
  "why":{"summary":"You fully reached level 3 and part of level 4. You have detail for two points, but not yet for the third.",
         "earned":{"text":"A clear purpose and a specific reason.","quote":"I was sick on Monday and missed the quiz"},
         "held_back":{"text":"Your third point is one short sentence.","quote":"this words is not in the text"}},
  "criteria":[{"id":"task","label":"Task completion","score":4,"note":"ok"},{"id":"register","label":"Organization and tone","score":3.5,"note":"ok"},{"id":"language","label":"Language use","score":3,"note":"ok"}],
  "fixes":[{"criterion":"language","from":"I am agree","to":"I agree","why":"Agree is a verb."}],
  "next":"To reach 4: add one reason and one time to your third point."}
def sub(i, uid, sec_, task, day, ai, ts, text, prompt, fb=None, days_ago=0):
    r = ("✓ 2026-11-19 · AI %s/5 · Band ≈ 4.5 · https://docs.google.com/d/x" % ai) if ai is not None else None
    return {"id":i,"user_id":uid,"section":sec_,"day":day,"task":task,"app":"StratSix","prompt":prompt,"response_text":text,"words":len(text.split()),"audio_path":None,
            "ai_result":r,"teacher_score":ts,"teacher_note":None,"created_at":ago(days_ago),"ai_feedback":fb}
EM = "[Writing I · Day 6 · Write an Email] write"
SUBS2 = [
  sub(1,"u1","Writing","Write an Email",6,"3.5",2,EMAIL_TXT,EM,FB2,days_ago=0),
  sub(2,"u1","Writing","Write an Email",4,"2.5",None,"hello",EM,None,days_ago=5),
  sub(3,"u1","Writing","Write an Email",5,"3",None,"hello again",EM,None,days_ago=3),
  sub(4,"u1","Speaking","Listen and Repeat 3",5,"4",3.5,"the library will close on friday because of holiday",SENT,None,days_ago=1),
  sub(5,"u3","Writing","Write an Email",6,"3",None,"hello there my friend",EM,None,days_ago=1),
  sub(6,"u3","Writing","Academic Discussion",7,"4.5",None,"I think so.","[Writing II · Day 7 · Academic Discussion] q",None,days_ago=0),
  sub(7,"u2","Writing","Write an Email",6,None,None,"hi",EM,None,days_ago=0)]
PROG2 = [
  {"user_id":"u1","updated_at":ago(0),"summary":{"sections":{"reading":sec(5),"listening":sec(2),"writing":sec(0),"writing2":sec(0),"speaking":sec(0)},"mocks":0,
     "ex":[{"s":"reading","d":4,"tt":"R-CW","c":4,"t":10,"at":ago(2)},{"s":"listening","d":3,"tt":"L-CR","c":9,"t":10,"at":ago(3)}],"types":{"R-CW":{"c":4,"t":10},"L-CR":{"c":9,"t":10}},"lastAct":ago(0)}},
  {"user_id":"u3","updated_at":ago(0),"summary":{"sections":{"reading":sec(3),"listening":sec(0),"writing":sec(0),"writing2":sec(0),"speaking":sec(0)},"mocks":0,"types":{"R-DL":{"c":3,"t":3}},"lastAct":ago(0)}}]

async def main():
    res = []
    async with async_playwright() as p:
        br = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        # ---------- pure helpers ----------
        page, errs = await open_page(br, 'student', dbx={"submissions":[]})
        r = await page.evaluate("""(()=>{ const T = window.__BS_TEST; const tg = T.wordsOf('The library will close early on Friday because of the holiday'); const hit = T.alignWords(tg, T.wordsOf('the library will close on friday because of holiday'));
          return {n:tg.length, got:hit.filter(Boolean).length, miss:tg.filter((w,i)=>!hit[i]), g1:T.gapInfo(3.5,2), g2:T.gapInfo(3.5,2.5), g3:T.gapInfo(null,2), f1:T.fs1(3.25), f2:T.fs1(3.7),
                  r1:T.rubricFor('Write an Email'), r2:T.rubricFor('Academic Discussion'), r3:T.rubricFor('Interview Q2'), r4:T.rubricFor('Listen and Repeat 3'), r5:T.rubricFor('Build a Sentence'),
                  skipOne:(()=>{ const t=T.wordsOf('a b c d e f'); return T.alignWords(t, T.wordsOf('a b d e f')).filter(Boolean).length; })() }; })()""")
        res.append(("word check counts matched and missing words", r["n"]==11 and r["got"]==9 and r["miss"]==["early","the"]))
        res.append(("one skipped word does not ruin the rest", r["skipOne"]==5))
        res.append(("gap rule: more than 1 point warns, exactly 1 does not", r["g1"]=={"d":1.5,"warn":True} and r["g2"]=={"d":1.0,"warn":False} and r["g3"] is None))
        res.append(("scores round to halves for display", r["f1"]=="3.5" and r["f2"]=="3.5"))
        res.append(("tasks map to their rubric", (r["r1"],r["r2"],r["r3"],r["r4"],r["r5"])==("email","discussion","interview","repeat",None)))
        # ---------- student cards ----------
        subs_student = [dict(x, user_id="u1") for x in SUBS2 if x["user_id"]=="u1"]
        page, errs = await open_page(br, 'student', dbx={"submissions":subs_student})
        await page.wait_for_selector(".fb-card", timeout=8000)
        card = page.locator(".fb-card").filter(has_text="Why 3.5")
        res.append(("score report card is shown for a scored response", await card.count()==1))
        ct = await card.inner_text()
        res.append(("half point is explained", "Why 3.5 and not 3 or 4" in ct and "You fully reached level 3 and part of level 4." in ct))
        res.append(("scale is drawn", await card.locator(".sc-scale").count()==1 and await card.locator(".sc-ticks span").count()==6))
        res.append(("level descriptors come from the rubric", "Language use · level 3 reached" in ct and "Level 4 · next" in ct))
        res.append(("what earned it and what held it back are shown", "What earned it." in ct and "What held it back." in ct and "A clear purpose and a specific reason." in ct))
        res.append(("exact quote is shown", "“I was sick on Monday and missed the quiz”" in ct))
        res.append(("an invented quote is not shown", "this words is not in the text" not in ct and "Your third point is one short sentence." in ct))
        res.append(("reach-next action is shown once", ct.count("To reach 4: add one reason and one time to your third point.")==1 and "Next time:" not in ct))
        res.append(("criteria and fixes still render", "Task completion" in ct and "I am agree" in ct))
        old = page.locator(".fb-card").filter(has_text="hello again")
        ot = await old.inner_text()
        res.append(("old note without a report shows the scale and says so", await old.locator(".sc-scale").count()==1 and "A detailed report is not available for this score." in ot))
        lr = page.locator(".fb-card").filter(has_text="Listen and Repeat 3")
        lt = await lr.inner_text()
        res.append(("Listen and Repeat shows the word check", "Word check" in lt and "9 of 11 words (82%)" in lt and "Missed: early, the." in lt))
        res.append(("missed words are marked", await lr.locator(".sc-chip.miss").count()==2 and await lr.locator(".sc-chip.ok").count()==9))
        res.append(("no page errors (student)", not errs))
        # ---------- teacher: results table ----------
        page, errs = await open_page(br, 'teacher', dbx={"profiles":PROF, "progress":PROG2, "submissions":SUBS2})
        await page.click("header.bar >> text=Students"); await page.wait_for_selector("#results-table", timeout=8000)
        pan = page.locator("#results-table"); pt = await pan.inner_text()
        res.append(("results table has the columns", all(x.lower() in pt.lower() for x in ["Student","Exercise","% correct","AI","You","Status"])))
        tiles = await page.evaluate("[...document.querySelectorAll('#results-table .ov-tile')].map(t=>t.innerText.replace(/\\s+/g,' ').trim())")
        res.append(("tiles: accuracy, agreement, bias, attention", len(tiles)==4 and tiles[0].startswith("70%") and tiles[1].startswith("50%") and tiles[2].startswith("+1.0") and tiles[3].startswith("2")))
        rows = await page.evaluate("[...document.querySelectorAll('#results-table tbody tr')].map(r=>r.innerText.replace(/\\s+/g,' ').trim().toLowerCase())")
        res.append(("one row per scored response and per auto-scored exercise", len(rows)==7+3))
        ana_em = [x for x in rows if "ana perez" in x and "write an email · d6" in x]
        res.append(("gap row shows AI 3.5, you 2, gap +1.5 and the review status", len(ana_em)==1 and "3.5" in ana_em[0] and "2" in ana_em[0] and "+1.5" in ana_em[0] and "review the gap" in ana_em[0]))
        res.append(("Listen and Repeat row has accuracy and both scores", any("listen and repeat 3" in x and "82%" in x and "9 of 11" in x and "+0.5" in x for x in rows)))
        res.append(("reading row shows percent with answers and low status", any("reading · complete the words · d4" in x and "40%" in x and "4 of 10" in x and "low accuracy" in x for x in rows)))
        res.append(("few answers are marked few data", any("reading · read in daily life" in x and "few data" in x and "auto-scored" in x for x in rows)))
        res.append(("waiting and AI-pending statuses", any("academic discussion" in x and "waiting for you" in x for x in rows) and any("beto rios" in x and "ai pending" in x for x in rows)))
        await pan.locator("button:has-text('Needs review')").click(); await page.wait_for_timeout(200)
        r1 = await page.evaluate("[...document.querySelectorAll('#results-table tbody tr')].map(r=>r.innerText.replace(/\\s+/g,' ').trim())")
        res.append(("Needs review filter keeps only the gap rows", len(r1)==1 and "Ana Perez" in r1[0]))
        await pan.locator("button:has-text('Low accuracy')").click(); await page.wait_for_timeout(200)
        r2 = await page.evaluate("[...document.querySelectorAll('#results-table tbody tr')].map(r=>r.innerText.replace(/\\s+/g,' ').trim())")
        res.append(("Low accuracy filter keeps only weak exercises", len(r2)==1 and "40%" in r2[0]))
        await pan.locator("button:has-text('Pending your score')").click(); await page.wait_for_timeout(200)
        r3 = await page.evaluate("[...document.querySelectorAll('#results-table tbody tr')].length")
        res.append(("Pending filter shows responses waiting for a teacher score", r3==4))
        await pan.locator("button:has-text('All')").first.click(); await page.wait_for_timeout(200)
        first_sorted = await page.evaluate("document.querySelector('#results-table tbody tr').innerText")
        res.append(("default sort puts the largest AI gap first", "Write an Email · D6" in first_sorted and "+1.5" in first_sorted))
        await pan.locator("button:has-text('Sort:')").click(); await page.wait_for_timeout(200)
        first_acc = await page.evaluate("document.querySelector('#results-table tbody tr').innerText")
        res.append(("accuracy sort puts the weakest exercise first", "40%" in first_acc))
        await page.evaluate("document.querySelector('#results-table tbody tr').click()"); await page.wait_for_timeout(500)
        res.append(("clicking a row opens the student", "← All students" in await page.inner_text("body")))
        sc = page.locator(".panel").filter(has_text="Write an Email").filter(has_text="Why this score").first
        res.append(("student detail has the score report", await page.locator("summary:has-text('Why this score')").count()>=1))
        res.append(("no page errors (results table)", not errs))
        # ---------- teacher: review queue with half-point score, gap alert, context ----------
        page, errs = await open_page(br, 'teacher', dbx={"profiles":PROF, "progress":PROG2, "submissions":SUBS2})
        await page.evaluate("window.__BS_TEST.go({name:'teacher'})"); await page.wait_for_selector(".tq-item", timeout=8000)
        item = page.locator(".tq-item").filter(has_text="Ana Perez").filter(has_text="Write an Email").first
        await item.click(); await page.wait_for_selector("#tq-score", timeout=4000)
        det = page.locator(".tq-grid"); dt = await det.inner_text()
        res.append(("teacher sees the same report", "Why 3.5" in dt and "What earned it." in dt and await det.locator(".sc-scale").count()==1))
        res.append(("teacher score is a half-step field", await page.evaluate("(()=>{ const i=document.getElementById('tq-score'); return i.type==='number' && i.step==='0.5' && i.min==='0' && i.max==='5'; })()")))
        res.append(("gap alert shows when the scores differ by more than 1", "Differs from the AI by 1.5 points" in dt))
        await page.fill("#tq-score", "3"); await page.wait_for_timeout(150)
        dt2 = await det.inner_text()
        res.append(("alert clears when the gap is small", "Within 0.5 points of the AI" in dt2 and "Differs from the AI" not in dt2))
        await page.locator("button:has-text('Agree with AI')").click()
        res.append(("Agree with AI copies the exact AI score", await page.input_value("#tq-score")=="3.5"))
        try:
            await page.wait_for_function("document.querySelector('.tq-grid').innerText.includes('Class average for this task: 3.0 (1 response)')", timeout=3000); ok_ctx = True
        except Exception: ok_ctx = False
        res.append(("context line: class average for the same task and day", ok_ctx))
        ct2 = await det.inner_text()
        res.append(("context line lists the student's last scores", "Ana’s last 2: 2.5, 3" in ct2))
        await page.fill("#tq-score", "3.5"); await page.locator("button:has-text('Publish to student')").click(); await page.wait_for_timeout(500)
        ups = [c[1] for c in await page.evaluate("window.__calls") if c[0]=='update']
        res.append(("publishing sends the half-point score", any(isinstance(u, dict) and u.get("teacher_score")==3.5 for u in ups)))
        res.append(("no page errors (review queue)", not errs))
        await br.close()
    for k, v in res: print(("PASS " if v else "FAIL ") + k)
    print("ALL PASS" if all(v for _, v in res) else "SOME FAIL")
asyncio.run(main())
