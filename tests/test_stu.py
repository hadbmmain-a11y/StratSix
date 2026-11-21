import os
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
import asyncio, json
from playwright.async_api import async_playwright
FAKE = r"""
(()=>{
  window.__BS_ENABLE_TEST=true;
  window.__calls=[]; window.__sess=JSON.parse(sessionStorage.getItem('__sess')||'null'); window.__role=sessionStorage.getItem('__role')||'student'; window.__saved=JSON.parse(sessionStorage.getItem('__saved')||'null');
  const DB={
    profiles:[{id:'t1',full_name:'Hans',email:'h@x.com',role:'teacher',created_at:'2026-11-01T00:00:00Z'},{id:'u1',full_name:'Ana Perez',email:'ana@x.com',role:'student',created_at:'2026-11-10T00:00:00Z'},{id:'u2',full_name:'Beto Rios',email:'beto@x.com',role:'student',created_at:'2026-11-11T00:00:00Z'}],
    progress:[{user_id:'u1',updated_at:'2026-11-18T12:00:00Z',summary:{sections:{reading:{done:5,total:17,c:30,t:40,self:null},listening:{done:2,total:17,c:10,t:20,self:null},writing:{done:3,total:17,c:0,t:0,self:3.5},speaking:{done:0,total:17,c:0,t:0,self:null}},mocks:1}}],
    submissions:[{id:7,user_id:'u1',section:'Writing',day:3,task:'Email',app:'StratSix',prompt:'P',response_text:'Dear coordinator, hello.',words:3,audio_path:null,ai_result:'✓ 2026-11-19 · AI 3.5/5 · Band ≈ 4.5',teacher_score:null,teacher_note:null,created_at:'2026-11-19T10:00:00Z'},{id:8,user_id:'u1',section:'Speaking',day:1,task:'Interview Q1',app:'StratSix',prompt:'Q',response_text:'I think',words:2,audio_path:'u1/a.webm',ai_result:null,teacher_score:4,teacher_note:'good',created_at:'2026-11-17T10:00:00Z'}],
    progress_saved:null
  };
  const rec=(k,v)=>window.__calls.push([k,v]);
  function builder(t){ const st={t,ops:[],f:{}};
    const b=new Proxy({}, {get(_,m){
      if(m==='maybeSingle') return async()=>{ if(t==='profiles'){ return {data:{role:window.__role},error:null}; } if(t==='progress') return {data:window.__saved||null,error:null}; return {data:null,error:null}; };
      if(m==='then') return (res)=>{ if(st.ops[0]==='upsert'){ window.__saved={state:st.payload.state}; rec('upsert',st.payload); return res({data:null,error:null}); } res({data:DB[t]||[],error:null}); };
      return (...a)=>{ st.ops.push(m); if(m==='upsert') st.payload=a[0]; return b; };
    }}); return b; }
  window.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:window.__sess}}),signInWithOAuth:async()=>({}),signOut:async()=>({}),onAuthStateChange:()=>({data:{subscription:{}}})},from:builder,storage:{from:()=>({createSignedUrl:async p=>({data:{signedUrl:'https://signed/'+p},error:null})})}})};
})();
"""

async def open_page(br, role, saved=None, clear=False):
    ctx=await br.new_context(); await ctx.route("**/*",lambda r: r.continue_() if r.request.url.startswith("file:") else r.abort())
    page=await ctx.new_page(); errs=[]; page.on("pageerror",lambda e: errs.append(str(e)))
    await ctx.add_init_script(FAKE)
    await page.goto("file://"+ROOT+"/index.html"); await page.wait_for_timeout(400)
    uid='t1' if role=='teacher' else 'u1'
    await page.evaluate("sessionStorage.setItem('__sess',JSON.stringify({user:{id:'%s',email:'x@x.com',user_metadata:{full_name:'Test User'}}}));sessionStorage.setItem('__role','%s')" % (uid, role))
    if saved: await page.evaluate("sessionStorage.setItem('__saved',%s)" % json.dumps(json.dumps(saved)))
    for _ in range(3):
        await page.reload(); await page.wait_for_timeout(300)
        if await page.evaluate('!!window.__sess'): break
        await page.evaluate("sessionStorage.setItem('__sess',JSON.stringify({user:{id:'%s',email:'x@x.com',user_metadata:{full_name:'Test User'}}}))" % uid)
    try: await page.wait_for_function('window.__BS_TEST && window.__BS_TEST.signedIn()', timeout=8000)
    except Exception as e: print('NOT SIGNED IN', role, errs, await page.evaluate('JSON.stringify([window.__sess, window.__role, localStorage.getItem("stratsix.v1")&&JSON.parse(localStorage.getItem("stratsix.v1")).account, typeof window.supabase])'))
    await page.wait_for_timeout(800)
    return page, errs

async def main():
    res=[]
    async with async_playwright() as p:
        br=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
        page,errs=await open_page(br,'student')
        nav=await page.inner_text("header.bar")
        res.append(("student nav has no Students tab","Students" not in nav))
        await page.evaluate("window.__BS_TEST.syncNow()"); await page.wait_for_timeout(300)
        calls=await page.evaluate("window.__calls"); ups=[c[1] for c in calls if c[0]=='upsert']
        res.append(("syncNow upserts progress (user_id, summary, no account)", bool(ups) and ups[-1]['user_id']=='u1' and 'sections' in ups[-1]['summary'] and 'account' not in ups[-1]['state']))
        res.append(("no page errors (student)", not errs))
        # restore: fresh local + server state
        page2,errs2=await open_page(br,'student',saved={"state":{"days":{"reading-1":{"done":True}},"res":{},"work":{},"reflect":{},"habits":{},"tut":{},"settings":{},"last":None,"started":"x"}})
        ls=await page2.evaluate("localStorage.getItem('stratsix.v1')")
        res.append(("progress restored from server on empty device", ls is not None and 'reading-1' in ls))
        # teacher
        page,errs=await open_page(br,'teacher')
        nav=await page.inner_text("header.bar")
        res.append(("teacher nav has Students tab","Students" in nav))
        await page.click("header.bar >> text=Students"); await page.wait_for_timeout(900)
        txt=await page.inner_text("body")
        res.append(("list shows both students", "Ana Perez" in txt and "Beto Rios" in txt))
        res.append(("list shows counts", "10/68 days" in txt and "2 submitted" in txt and "1 to score" in txt))
        res.append(("student without progress flagged","no progress yet" in txt))
        await page.screenshot(path="/tmp/stu_list.png")
        await page.click("text=Ana Perez"); await page.wait_for_timeout(500)
        txt=await page.inner_text("body")
        res.append(("detail shows section progress", "5/17 days" in txt and "accuracy 75%" in txt and "self-score 3.5/5" in txt))
        res.append(("detail shows submissions & scores", "Dear coordinator, hello." in txt and "AI 3.5/5" in txt and "band ≈ 4.5" in txt.lower() and "teacher 4/5" in txt.lower() and "teacher: not scored" in txt.lower()))
        await page.click("text=Load recording"); await page.wait_for_timeout(400)
        res.append(("recording loads via signed URL", await page.locator("audio[src='https://signed/u1/a.webm']").count()==1))
        await page.screenshot(path="/tmp/stu_detail.png",full_page=True)
        await page.click("text=← All students"); await page.wait_for_timeout(300)
        res.append(("back to list", "Beto Rios" in await page.inner_text("body")))
        res.append(("no page errors (teacher)", not errs))
        if errs: print(errs)
        await br.close()
    for k,v in res: print(("PASS " if v else "FAIL ")+k)
    print("ALL PASS" if all(v for _,v in res) else "SOME FAIL")
asyncio.run(main())
