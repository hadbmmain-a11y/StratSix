import os
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
import asyncio, json
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
            print('errs',errs)
            if await page.evaluate('!!window.__BS_TEST && window.__BS_TEST.signedIn()'): break
        r=await page.evaluate("""()=>{const d=BS.sections.writing.days[3];return {stages:d.stages.map(s=>s.title+' ('+s.mins+')'),total:d.stages.reduce((a,s)=>a+s.mins,0),fte:BS.sections.writing.days[3].stages[2].blocks[0].qs.every(q=>(q.q.match(/<u>/g)||[]).length===4 && q.o.length===4)}}""")
        print(json.dumps(r,indent=1))
        await page.evaluate("window.__BS_TEST.go({name:'sec',sec:'writing',day:4})"); await page.wait_for_timeout(700)
        txt=await page.inner_text('.req-list'); print('REQ:', [l for l in txt.split('\n') if 'homework' in l.lower()])
        print('FTE html sample:', (await page.inner_html('.stage:nth-of-type(3) .blk'))[:500] if False else '')
        u=await page.evaluate("document.querySelectorAll('#blk-writing-4-2-0 u').length"); print('underlines in find-the-error block:',u)
        tas=await page.query_selector_all('textarea')
        hw=[t for t in tas if await t.get_attribute('placeholder')=='Write your answer here…']
        print('homework boxes',len(hw))
        btn=page.locator('button:has-text("Submit homework")'); print('btn disabled before:', await btn.is_disabled())
        await hw[0].fill('I wonder whether polite questions really waste time. I do not know why people think direct questions are always honest, because tone matters in every culture and context. A student who asks, Could you tell me where the room is, sounds respectful and gets help faster than someone who sounds rude. So I disagree with my classmate, and I would ask him whether he has ever felt ignored.')
        await hw[1].fill('The most important question is whether notes are allowed, because it changes how I prepare. If I ask too directly, the professor may think I am lazy or demanding and answer slowly. I would write Could you tell me whether notes are allowed, and also where the exam is, which shows respect and still gets a clear answer from the professor.')
        await page.wait_for_timeout(300); print('btn disabled after fill:', await btn.is_disabled())
        await btn.click(); await page.wait_for_timeout(900)
        txt=await page.inner_text('.req-list'); print('REQ after ok-class:', await page.evaluate("[...document.querySelectorAll('.req-list li')].filter(l=>/homework/i.test(l.textContent)).map(l=>l.className)"))
        print('state', await page.evaluate("JSON.stringify((JSON.parse(localStorage.getItem('stratsix.v1')).work||{})['writing-4-9-0']||{}).slice(0,120)"))
        print('msg:', (await page.inner_text('.stage:last-of-type')).split('\n')[-1][:160])
        print('errors',errs)
        await br.close()
asyncio.run(main())
