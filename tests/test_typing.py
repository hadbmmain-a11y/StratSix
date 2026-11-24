"""Typing Check (Writing I and II): placement in all 34 days, copy and free-writing phases, scoring, paste lock,
legacy credit, requirement, sync summary, teacher panel and student chart. Uses a fake countdown so nothing waits."""
import os, re, json, asyncio
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
exec(open(os.path.join(HERE, "test_track.py"), encoding="utf-8").read().split("async def main")[0])

FAKE_CD = """window.__cd=null; window.__BS_COUNTDOWN=function(el,secs,done,low){ el.textContent=secs; const h={secs, _left:secs, done, stop(){return secs-h._left}, left(){return h._left}}; window.__cd=h; return h; }; 0;"""
def day_text(g): return None

async def go(page, sec, n):
    await page.evaluate("([s,n])=>{ window.__BS_TEST.S().teacher = true; window.__BS_TEST.go({name:'sec',sec:s,day:n}); }", [sec, n]); await page.wait_for_timeout(900)

async def type_into(page, sel, text):
    await page.evaluate("([s,t])=>{const e=document.querySelector(s); e.value=t; e.dispatchEvent(new Event('input',{bubbles:true}));}", [sel, text])

async def finish(page, left=0):
    await page.evaluate("(l)=>{const c=window.__cd; c._left=l; c.done();}", left); await page.wait_for_timeout(250)

async def main():
    res = []
    async with async_playwright() as p:
        br = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        page, errs = await open_page(br, 'teacher')
        # ---------- structure ----------
        st = await page.evaluate("""()=>{const out=[];for(const sec of ['writing','writing2']){BS.sections[sec].days.forEach(d=>{const i=d.stages.findIndex(s=>s.sid==='typing_check'); const n=d.stages.filter(s=>s.sid==='typing_check').length;
          const nxt=d.stages[i+1]; const hw=d.stages.findIndex(s=>s.kind==='habit'); const b=d.stages[i].blocks[0];
          out.push({sec,n:d.n,count:n,block:b.t,g:b.g,comp:b.compMin,copy:b.copySecs,goal:b.goal,before:nxt?nxt.kind:'end',hw,i,legacy:d.stages.some(s=>(s.blocks||[]).some(x=>x.t==='typing'))})})}return out}""")
        res.append(("every one of the 34 days has exactly one Typing Check", len(st)==34 and all(x['count']==1 and x['block']=='typecheck' for x in st)))
        res.append(("it sits right before the homework (or the reflection that precedes it) on normal days", all(x['before'] in ('habit','reflect') for x in st if x['n']!=16)))
        res.append(("mock days keep it between the mock parts", all(x['before']=='apply' for x in st if x['n']==16)))
        res.append(("no older typing test is left", not any(x['legacy'] for x in st)))
        comps = [x['comp'] for x in sorted(st, key=lambda x:x['g'])]
        res.append(("writing time grows from 1 to 10 minutes and never goes down", comps[0]==1 and max(comps)==10 and all(b>=a for a,b in zip(comps,comps[1:]))))
        res.append(("goal is 60 words per minute", all(x['goal']==60 for x in st)))
        # ---------- day 1 block ----------
        await go(page, 'writing', 1)
        blk = page.locator(".tc").first
        txt = await blk.inner_text()
        res.append(("explains goal 60+ with no upper limit and that finishing is what is required", "60+ words per minute" in txt and "no upper limit" in txt and "reaching the goal is not required" in txt))
        res.append(("Part 2 starts disabled until Part 1 is done", await page.locator(".tc-write-start").is_disabled()))
        await page.evaluate(FAKE_CD)
        # paste lock
        await page.click(".tc-copy-start"); await page.wait_for_timeout(200)
        prevented = await page.evaluate("""()=>{const t=document.querySelector('.tc-copy'); const ev=new Event('paste',{bubbles:true,cancelable:true}); t.dispatchEvent(ev); return ev.defaultPrevented}""")
        res.append(("pasting is blocked", prevented))
        text1 = await page.evaluate("BS.sections.writing.days[0].stages.find(s=>s.sid==='typing_check').blocks[0].text")
        # exact 100 chars, full 60 s -> 20 wpm
        await type_into(page, ".tc-copy", text1[:100]); await finish(page, 0)
        o = await page.inner_text(".tc-copy-out")
        res.append(("100 correct characters in 60 s = 20 words per minute, 100% accurate", "20 words/min" in o and "100% accurate" in o))
        res.append(("tells the student how far from 60", "Goal: 60+" in o and "40 away" in o))
        res.append(("Part 2 unlocks after Part 1", not await page.locator(".tc-write-start").is_disabled()))
        # omitting a word does not ruin the rest
        await page.click(".tc-copy-start"); await page.wait_for_timeout(150)
        seg = text1[:120]; i = seg.index(" ", 40); omitted = seg[:i] + seg[seg.index(" ", i+1):]
        await type_into(page, ".tc-copy", omitted); await finish(page, 0)
        o = await page.inner_text(".tc-copy-out"); m = re.search(r"(\d+) words/min", o); acc = re.search(r"(\d+)% accurate", o)
        expect = round((len(omitted) - (len(seg)-len(omitted)))/5)
        res.append(("a skipped word only costs that word (edit-distance scoring)", m and abs(int(m.group(1))-expect)<=1 and acc and int(acc.group(1))>=90))
        # finishing the whole text early
        await page.click(".tc-copy-start"); await page.wait_for_timeout(150)
        await page.evaluate("window.__cd._left=30")
        await type_into(page, ".tc-copy", text1); await page.wait_for_timeout(300)
        o = await page.inner_text(".tc-copy-out"); m = re.search(r"(\d+) words/min", o)
        expect = round(len(text1)/5/(30/60))
        res.append(("finishing the text early uses the real elapsed time", m and abs(int(m.group(1))-expect)<=1))
        res.append(("reaching 60 shows the goal message without a cap", "reached the goal" in o and "no upper limit" in o.lower()) if int(m.group(1))>=60 else ("reaching 60 shows the goal message without a cap", True))
        # free writing
        await page.click(".tc-write-start"); await page.wait_for_timeout(150)
        await type_into(page, ".tc-write", " ".join(["word"]*30)); await finish(page, 0)
        o = await page.inner_text(".tc-write-out")
        res.append(("free writing counts words and words per minute (1 min = 30 words)", "30 words" in o and "30 words per minute" in o))
        res.append(("Typing Check complete appears when both parts are done", "Typing Check complete" in await page.inner_text(".tc")))
        reqs = await page.evaluate("window.__BS_TEST.dayReqs('writing', BS.sections.writing.days[0]).filter(r=>/Typing Check/.test(r.label)).map(r=>r.ok)")
        res.append(("day requirement is met after both parts", reqs==[True]))
        # ---------- summary to the server ----------
        await page.evaluate("window.__BS_TEST.syncNow()"); await page.wait_for_timeout(400)
        ups = [c[1] for c in await page.evaluate("window.__calls") if c[0]=='upsert']
        sm = ups[-1]['summary'] if ups else {}
        ty = sm.get('typing', [])
        res.append(("synced summary carries the typing results", len(ty)>=1 and ty[-1].get('w')==30 and ty[-1].get('v')=='kbd' and 'c' in ty[-1]))
        res.append(("no page errors (day 1)", not errs))
        # ---------- requirement before Part 2 ----------
        page2, errs2 = await open_page(br, 'teacher')
        await go(page2, 'writing', 2)
        reqs = await page2.evaluate("window.__BS_TEST.dayReqs('writing', BS.sections.writing.days[1]).filter(r=>/Typing Check/.test(r.label)).map(r=>r.ok)")
        res.append(("day stays incomplete until the Typing Check is done", reqs==[False]))
        # ---------- legacy credit ----------
        legacy = {"state":{"days":{},"res":{},"work":{"writing-1-tool_typing_speed_check-1":{"wpm":41,"acc":90,"kind":"W-TYPE","title":"Typing speed","at":ago(1)}},"reflect":{},"habits":{},"tut":{},"settings":{},"last":None,"started":"x"}}
        page3, errs3 = await open_page(br, 'student', saved=legacy)
        await go(page3, 'writing', 1)
        o = await page3.inner_text(".tc-copy-out")
        res.append(("an earlier Day 1 typing result counts as Part 1", "41 words/min" in o and not await page3.locator(".tc-write-start").is_disabled()))
        n_series = await page3.evaluate("window.__BS_TEST.typingSeries().length")
        res.append(("the earlier result is not counted twice", n_series==1))
        res.append(("no page errors (legacy)", not errs3))
        # ---------- student chart ----------
        two = {"state":{"days":{},"res":{},"work":{
            "writing-1-typing_check-0":{"kind":"W-TYPECHECK","copy":{"wpm":28,"gross":30,"acc":95,"secs":60},"comp":{"words":20,"wpm":20,"mins":1,"secs":60},"dev":"kbd","at":ago(3)},
            "writing-2-typing_check-0":{"kind":"W-TYPECHECK","copy":{"wpm":36,"gross":38,"acc":96,"secs":60},"comp":{"words":28,"wpm":28,"mins":1,"secs":60},"dev":"kbd","at":ago(2)}},"reflect":{},"habits":{},"tut":{},"settings":{},"last":None,"started":"x"}}
        page4, errs4 = await open_page(br, 'student', saved=two)
        body = await page4.inner_text("body")
        res.append(("dashboard shows the typing chart with the goal", await page4.locator("svg[aria-label^='Typing speed over 2 checks']").count()==1 and "goal of 60+" in body and "no upper limit" in body))
        res.append(("no page errors (chart)", not errs4))
        # ---------- teacher panel ----------
        prof = [{"id":"t1","full_name":"Hans","email":"h@x.com","role":"teacher","created_at":ago(60)},
                {"id":"u1","full_name":"Ana Perez","email":"ana@x.com","role":"student","created_at":ago(30)},
                {"id":"u2","full_name":"Beto Rios","email":"beto@x.com","role":"student","created_at":ago(30)}]
        def pr(uid, series): return {"user_id":uid,"updated_at":ago(0),"summary":{"sections":{"reading":sec(3),"listening":sec(0),"writing":sec(3),"writing2":sec(0),"speaking":sec(0)},"mocks":0,"last":{"sec":"writing","day":3},"lastAct":ago(0),"types":{},"typing":series}}
        slow = [{"d":"2026-11-20","c":19,"w":10,"a":93,"v":"kbd"},{"d":"2026-11-21","c":21,"w":11,"a":94,"v":"kbd"},{"d":"2026-11-22","c":18,"w":12,"a":92,"v":"touch"}]
        fast = [{"d":"2026-11-20","c":52,"w":22,"a":97,"v":"kbd"},{"d":"2026-11-21","c":58,"w":25,"a":98,"v":"kbd"},{"d":"2026-11-22","c":64,"w":27,"a":98,"v":"kbd"}]
        page5, errs5 = await open_page(br, 'teacher', dbx={"profiles":prof,"progress":[pr("u1",slow), pr("u2",fast)],"submissions":[]})
        await page5.click("header.bar >> text=Students"); await page5.wait_for_timeout(1000)
        t5 = await page5.inner_text("body")
        res.append(("teacher table has the typing column with the latest copy and write speed", "typing (copy · write)" in t5.lower() and await page5.evaluate("[...document.querySelectorAll('.ov-table tbody tr')].some(r=>/Ana Perez/.test(r.innerText) && /18 · 12/.test(r.innerText) && /3 checks/.test(r.innerText) && /phone/.test(r.innerText))")))
        res.append(("slow typist after 3 checks is listed in needs attention", "Typing: 18 words/min copying after 3 checks (goal 60+)" in t5))
        res.append(("fast typist is not flagged", await page5.evaluate("[...document.querySelectorAll('.tq-item')].filter(b=>/Beto/.test(b.innerText) && /Typing:/.test(b.innerText)).length")==0))
        res.append(("no page errors (teacher)", not errs5))
        await br.close()
    for k, v in res: print(("PASS " if v else "FAIL ") + k)
    print("ALL PASS" if all(v for _, v in res) else "SOME FAIL")
asyncio.run(main())
