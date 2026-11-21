import os
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
import asyncio, json, sys
from playwright.async_api import async_playwright
exec(open(os.path.join(HERE,'test_stu.py')).read().split('async def open_page')[0].split('import asyncio, json')[1].replace('from playwright.async_api import async_playwright',''))
DAYS=list(range(1,18))
SEC=sys.argv[1]
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
        ctx=await br.new_context(); await ctx.route("**/*",lambda r: r.continue_() if r.request.url.startswith("file:") else r.abort())
        page=await ctx.new_page(); errs=[]; page.on("pageerror",lambda e: errs.append(str(e)))
        await ctx.add_init_script(FAKE)
        await page.goto("file://"+ROOT+"/index.html")
        await page.evaluate("sessionStorage.setItem('__sess',JSON.stringify({user:{id:'t1',email:'h@x.com',user_metadata:{full_name:'Hans'}}}));sessionStorage.setItem('__role','teacher');localStorage.setItem('stratsix.v1',JSON.stringify({teacher:true,days:{},res:{},work:{},reflect:{},habits:{},tut:{},settings:{},last:null,started:new Date().toISOString()}))")
        for _ in range(3):
            await page.reload(); await page.wait_for_timeout(1500)
            if await page.evaluate('window.__BS_TEST.signedIn()'): break
        for d in DAYS:
            await page.evaluate("([d,s])=>window.__BS_TEST.go({name:'sec',sec:s,day:d})", [d,SEC]); await page.wait_for_timeout(500)
            info=await page.evaluate("""()=>{ const m=document.querySelector('main'); return {len:m.innerText.length, btn:m.querySelectorAll('button').length, opts:m.querySelectorAll('.opt').length}; }""")
            print('day',d,json.dumps(info))
        print('errors',errs)
        await br.close()
asyncio.run(main())
