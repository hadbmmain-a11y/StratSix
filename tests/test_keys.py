# Fails if any saved-work key from tests/key-snapshot.json disappears (new keys are fine).
# Run: python3 tests/test_keys.py   (needs Playwright + Chrome; see test_sync_account.py for the fake-server setup)
import asyncio, json, sys, os
from playwright.async_api import async_playwright
HERE=os.path.dirname(os.path.abspath(__file__))
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
        page=await br.new_page(); await page.route("**/*",lambda r: r.continue_() if r.request.url.startswith("file:") else r.abort())
        await page.goto("file://"+os.path.join(HERE,"..","index.html")); await page.wait_for_timeout(1500)
        cur=await page.evaluate("""()=>{const out={}; for(const sec of Object.keys(BS.sections)){ for(const d of BS.sections[sec].days){ const dk=sec+'-'+d.n; const ks=[]; d.stages.forEach((st,si)=>st.blocks.forEach((b,bi)=>ks.push(__BS_TEST.blkKey(d,dk,si,bi)))); out[dk]=ks; } } return out; }""")
        snap=json.load(open(os.path.join(HERE,"key-snapshot.json"))); lost=[]
        for dk,ks in snap.items():
            have=set(cur.get(dk,[])); lost+=[k for k in ks if k not in have]
        dups=[dk for dk,ks in cur.items() if len(set(ks))!=len(ks)]
        print("lost keys:",lost[:10],len(lost)); print("days with duplicate keys:",dups)
        await br.close(); sys.exit(1 if lost or dups else 0)
asyncio.run(main())
