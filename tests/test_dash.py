import os
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
import asyncio, json
from playwright.async_api import async_playwright
exec(open(os.path.join(HERE,'test_stu.py')).read().split('async def open_page')[0].split('import asyncio, json')[1].replace('from playwright.async_api import async_playwright',''))
async def main():
    res=[]
    async with async_playwright() as p:
        br=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
        for role in ['student','teacher']:
            ctx=await br.new_context(); await ctx.route("**/*",lambda r: r.continue_() if r.request.url.startswith("file:") else r.abort())
            page=await ctx.new_page(); errs=[]; page.on("pageerror",lambda e: errs.append(str(e)))
            await ctx.add_init_script(FAKE)
            await page.goto("file://"+ROOT+"/index.html")
            await page.evaluate("sessionStorage.setItem('__sess',JSON.stringify({user:{id:'%s',email:'x@x.com',user_metadata:{full_name:'Test User'}}}));sessionStorage.setItem('__role','%s')" % ('t1' if role=='teacher' else 'u1', role))
            for _ in range(3):
                await page.reload(); await page.wait_for_timeout(1500)
                if await page.evaluate('window.__BS_TEST.signedIn()'): break
            nav=await page.inner_text("header.bar")
            res.append((role+": nav has no 'My progress'", "My progress" not in nav and "Dashboard" in nav))
            txt=await page.inner_text("body")
            res.append((role+": dashboard has results section", "How you are doing" in txt and "Accuracy by task type" in txt and "Speaking score reports" not in txt))
            res.append((role+": share/backup details present", await page.locator("details#share").count()==1))
            res.append((role+": saved-to-account text", "to your account" in txt))
            # open share via legacy go('progress') through button
            await page.click("text=Share a report or back up"); await page.wait_for_timeout(400)
            res.append((role+": button opens share panel", await page.evaluate("document.getElementById('share').open")))
            txt=(await page.inner_text("details#share")).lower()
            res.append((role+": report and backup in share panel, audio panel on dashboard", "progress report" in txt and "copy backup code" in txt and await page.locator(".audio-panel").count()==1))
            res.append((role+": no page errors", not errs))
            if errs: print(errs)
            if role=='student': await page.screenshot(path="/tmp/dash.png",full_page=True)
        await br.close()
    for k,v in res: print(("PASS " if v else "FAIL ")+k)
    print("ALL PASS" if all(v for _,v in res) else "SOME FAIL")
asyncio.run(main())
