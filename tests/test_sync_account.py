import os
import asyncio, json
from playwright.async_api import async_playwright
FAKE = r"""
(()=>{
  window.__BS_ENABLE_TEST=true;
  window.__srv = JSON.parse(localStorage.getItem('__srv')||'{}');  // uid -> {state,updated_at}
  window.__fail = null; window.__failSel = false; window.__ups = 0;
  window.__sess = null;
  function builder(t){ const st={ops:[],f:{}};
    const b=new Proxy({}, {get(_,m){
      if(m==='maybeSingle') return async()=>{ if(t==='profiles') return {data:{role:'student'},error:null};
        if(t==='progress'){ if(window.__failSel) return {data:null,error:{message:'Failed to fetch'}}; const r=window.__srv[st.f.user_id]; return {data:r?JSON.parse(JSON.stringify(r)):null,error:null}; } return {data:null,error:null}; };
      if(m==='then') return (res)=>{ if(st.ops[0]==='upsert'){ window.__ups++; if(window.__fail) return res({data:null,error:{message:window.__fail}}); window.__srv[st.payload.user_id]={state:JSON.parse(JSON.stringify(st.payload.state)),updated_at:st.payload.updated_at}; return res({data:null,error:null}); } res({data:[],error:null}); };
      return (...a)=>{ st.ops.push(m); if(m==='upsert') st.payload=a[0]; if(m==='eq') st.f[a[0]]=a[1]; return b; };
    }}); return b; }
  window.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:window.__sess}}),signInWithOAuth:async()=>({}),signOut:async()=>{window.__sess=null;return {}},onAuthStateChange:()=>({data:{subscription:{}}})},from:builder,storage:{from:()=>({})}})};
})();
"""
SES=lambda u: {"user":{"id":u,"email":u+"@x.com","user_metadata":{"full_name":"User "+u}}}
fails=[]
def ok(c,m):
    print(("PASS " if c else "FAIL ")+m)
    if not c: fails.append(m)
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
        ctx=await br.new_context(); await ctx.route("**/*",lambda r: r.continue_() if r.request.url.startswith("file:") else r.abort())
        page=await ctx.new_page(); errs=[]; page.on("pageerror",lambda e: errs.append(str(e)))
        await ctx.add_init_script(FAKE)
        await page.goto("file://"+os.path.join(os.path.dirname(os.path.abspath(__file__)),"..","index.html")); await page.wait_for_timeout(500)
        async def signin(u):
            await page.evaluate("(s)=>{window.__sess=s}",SES(u))
            await page.evaluate("(s)=>__BS_TEST.adoptSession(s)",SES(u)); await page.wait_for_timeout(700)
        async def flush():
            await page.evaluate("()=>{__BS_TEST.timers.clear(); return __BS_TEST.syncNow()}"); await page.wait_for_timeout(300)
        # 1 isolation
        await signin('u1')
        await page.evaluate("()=>{__BS_TEST.S().work['writing-d2-x']={t:'SECRET-ANA'}; __BS_TEST.S().days['writing-2']={done:true}; __BS_TEST.save();}"); await flush()
        ok(await page.evaluate("()=>window.__srv.u1.state.work['writing-d2-x'].t")=='SECRET-ANA',"u1 draft synced to server")
        await page.evaluate("()=>__BS_TEST.signOutGoogle()"); await page.wait_for_timeout(500)
        ok(await page.evaluate("()=>Object.keys(__BS_TEST.S().work).length+Object.keys(__BS_TEST.S().days).length")==0,"state cleared after sign-out")
        ok('SECRET-ANA' not in await page.evaluate("()=>localStorage.getItem('stratsix.v1')"),"localStorage has no u1 data after sign-out")
        await signin('u2'); await flush()
        ok(await page.evaluate("()=>JSON.stringify(__BS_TEST.S()).includes('SECRET-ANA')")==False,"u2 does not see u1 work")
        ok(await page.evaluate("()=>!window.__srv.u2 || !JSON.stringify(window.__srv.u2).includes('SECRET-ANA')")==True,"u2 server copy has no u1 work")
        # switch without sign-out (u2 -> u1 directly)
        await page.evaluate("()=>{__BS_TEST.S().work['u2-only']={t:'BETO'}; __BS_TEST.save();}"); await flush()
        await signin('u1')
        ok(await page.evaluate("()=>JSON.stringify(__BS_TEST.S()).includes('BETO')")==False,"direct switch u2->u1 drops u2 data")
        ok(await page.evaluate("()=>__BS_TEST.S().work['writing-d2-x'].t")=='SECRET-ANA',"u1 progress restored from server after switch")
        # 2 stash when offline
        await page.evaluate("()=>{window.__fail='Failed to fetch'; __BS_TEST.S().work['offline-note']={t:'UNSAVED'}; __BS_TEST.save();}"); await flush()
        lab=await page.evaluate("()=>__BS_TEST.syncLabel()"); ok('Not saved' in lab or 'Offline' in lab, "label shows failure: "+lab)
        ok(await page.evaluate("()=>(__BS_TEST.S()._pushed||0)<__BS_TEST.S()._mod"),"failed save leaves data dirty")
        await page.evaluate("()=>__BS_TEST.signOutGoogle()"); await page.wait_for_timeout(500)
        await page.evaluate("()=>{window.__fail=null}")
        await signin('u1'); await flush()
        ok(await page.evaluate("()=>!!__BS_TEST.S().work['offline-note']"),"unsaved work comes back for the same user (stash)")
        ok(await page.evaluate("()=>window.__srv.u1.state.work['offline-note'].t")=='UNSAVED',"and then reaches the server")
        lab=await page.evaluate("()=>__BS_TEST.syncLabel()"); ok(lab=='Saved to your account',"label: "+lab)
        # 3 stale device must not overwrite newer server data
        await page.evaluate("()=>{ const n=JSON.parse(JSON.stringify(window.__srv.u1)); n.state.days['reading-9']={done:true}; n.updated_at='2099-01-01T00:00:00.000Z'; window.__srv.u1=n; }")
        await page.evaluate("()=>{__BS_TEST.SYNC.restored=false; return __BS_TEST.restoreProgress()}"); await page.wait_for_timeout(800); await flush()
        ok(await page.evaluate("()=>!!__BS_TEST.S().days['reading-9']"),"newer server data adopted (clean device)")
        ok(await page.evaluate("()=>!!window.__srv.u1.state.days['reading-9']"),"server still has newer data")
        # dirty local + newer server => merge, both kept
        await page.evaluate("()=>{ __BS_TEST.S().days['local-new']={done:true}; __BS_TEST.save(); __BS_TEST.timers.clear(); const n=JSON.parse(JSON.stringify(window.__srv.u1)); n.state.days['remote-new']={done:true}; n.updated_at='2099-02-02T00:00:00.000Z'; window.__srv.u1=n; __BS_TEST.SYNC.restored=false; return __BS_TEST.restoreProgress(); }"); await page.wait_for_timeout(900); await flush()
        both=await page.evaluate("()=>[!!window.__srv.u1.state.days['local-new'],!!window.__srv.u1.state.days['remote-new'],!!window.__srv.u1.state.days['reading-9']]")
        ok(both==[True,True,True],"merge keeps local-new, remote-new and older items: "+str(both))
        # 4 no write before restore (select fails)
        up0=await page.evaluate("()=>window.__ups")
        await page.evaluate("()=>{window.__failSel=true; __BS_TEST.SYNC.restored=false; __BS_TEST.S().days['blocked']={done:true}; __BS_TEST.save(); return __BS_TEST.syncNow();}"); await page.wait_for_timeout(600)
        ok(await page.evaluate("()=>window.__ups")==up0,"no upsert while the account copy could not be read")
        await page.evaluate("()=>{window.__failSel=false; __BS_TEST.timers.clear(); return __BS_TEST.restoreProgress();}"); await page.wait_for_timeout(900); await flush()
        ok(await page.evaluate("()=>!!window.__srv.u1.state.days['blocked']"),"after reconnect the change is saved")
        # 5 server error is surfaced and retried
        await page.evaluate("()=>{window.__fail='new row violates row-level security policy'; __BS_TEST.S().days['e']={done:true}; __BS_TEST.save(); __BS_TEST.timers.clear(); return __BS_TEST.syncNow();}"); await page.wait_for_timeout(500)
        ok(await page.evaluate("()=>__BS_TEST.SYNC.state")=='error',"server error sets state=error")
        await page.evaluate("()=>{window.__fail=null; __BS_TEST.timers.clear(); return __BS_TEST.syncNow();}"); await page.wait_for_timeout(500)
        ok(await page.evaluate("()=>__BS_TEST.SYNC.state")=='saved',"retry succeeds -> saved")
        print('page errors',errs); ok(not errs,"no page errors")
        await br.close()
    print('\nFAILED:',fails if fails else 'none')
asyncio.run(main())
