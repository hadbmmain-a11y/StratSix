import os
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
import asyncio, json, sys
from playwright.async_api import async_playwright
exec(open(os.path.join(HERE,'test_stu.py')).read().split('async def open_page')[0].split('import asyncio, json')[1].replace('from playwright.async_api import async_playwright',''))
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
        ctx=await br.new_context(viewport={'width':1300,'height':900}); await ctx.route("**/*",lambda r: r.continue_() if r.request.url.startswith("file:") else r.abort())
        page=await ctx.new_page(); errs=[]; page.on("pageerror",lambda e: errs.append(str(e)))
        await ctx.add_init_script(FAKE)
        await page.goto("file://"+ROOT+"/index.html")
        await page.evaluate("sessionStorage.setItem('__sess',JSON.stringify({user:{id:'t1',email:'h@x.com',user_metadata:{full_name:'Hans'}}}));sessionStorage.setItem('__role','teacher');localStorage.setItem('stratsix.v1',JSON.stringify({teacher:true,days:{},res:{},work:{},reflect:{},habits:{},tut:{},settings:{},last:null,started:new Date().toISOString()}))")
        for _ in range(3):
            await page.reload(); await page.wait_for_timeout(1500)
            if await page.evaluate('window.__BS_TEST.signedIn()'): break
        r=await page.evaluate("""()=>{const o={};for(const k of Object.keys(BS.sections)){const days=BS.sections[k].days;const c={email:0,discussion:0,bas:0};days.forEach(d=>d.stages.forEach(s=>s.blocks.forEach(b=>{if(b.t==='write')c[b.kind]++; if(b.t==='bas')c.bas+=b.items.length;})));o[k]={title:BS.sections[k].title,n:days.length,tut:days.flatMap(d=>d.stages.filter(s=>s.kind==='tutorial').map(s=>d.n+':'+s.blocks[0].id)),c};}return o;}""")
        print(json.dumps(r,indent=0)[:1800])
        for sec in ('writing','writing2'):
            await page.evaluate("(s)=>window.__BS_TEST.go({name:'sec',sec:s})",sec); await page.wait_for_timeout(700)
            t=await page.evaluate("document.querySelector('main').innerText.slice(0,260)")
            print(sec,'>>',t.replace('\n',' | '))
        await page.evaluate("window.__BS_TEST.go({name:'home'})"); await page.wait_for_timeout(700)
        print('nav:',await page.evaluate("[...document.querySelectorAll('nav a, nav button, header a, header button')].map(x=>x.innerText.trim()).filter(Boolean).join(' / ')"))
        print('errors',errs)
        await page.screenshot(path='/tmp/w2_home.png')
        await br.close()
asyncio.run(main())
