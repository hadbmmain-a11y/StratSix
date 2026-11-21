# -*- coding: utf-8 -*-
import json, re, sys
sys.path.insert(0,'/home/claude/gt')
import gtd_1,gtd_2,gtd_3,gtd_4,gtd_5,gtd_6,gtd_7
T=[]
for m in (gtd_1,gtd_2,gtd_3,gtd_4,gtd_5,gtd_6,gtd_7): T+=m.T
ids=[t['id'] for t in T]; assert len(ids)==len(set(ids))==24
def wc(s): return len(re.sub(r'<[^>]+>','',s).split())
tot=0
for t in T:
    says=[t['hook'],t['cmp'],t['verdict'],t['why']]+[r['say'] for r in t['rule']]+[t['trap']['say1'],t['trap']['say2'],t['trap']['say3']]+[m[5] for m in t['trap'].get('more',[])]+[t['quizsay'],t['fix']['say'],t['recapsay'],t['donesay']]
    w=sum(wc(s) for s in says); tot+=w
    secs=w/2.4
    bad=[s[:40] for s in says if wc(s)<18 or wc(s)>62]
    print(t['id'],len(says),'scenes',w,'words ~%d s'%secs, 'outliers:',bad)
    assert len(t['quiz'][1])==3 and t['quiz'][2] in (0,1,2)
    assert all(k in t for k in ('A','B','recap','check','fix','trap'))
    assert len(t['recap'])==3 and len(t['check']['w2'])==3
data=T
eng=open('/home/claude/gt/gt_engine.js',encoding='utf-8').read()
js = '/*GT_PATCH_START*/\n'+eng+'\n(function(){\n  const DATA = '+json.dumps(data,ensure_ascii=False)+';\n  DATA.forEach(d=>{ const t = __GT.build(d); __GT.place(d,t); });\n  __GT.strip("writing",[2,3,4,5,6,11]); __GT.strip("writing2",[1,2,3,4,5,6,7,8,9,11,12,13,15]);\n})();\n/*GT_PATCH_END*/\n'
open('/home/claude/gt/gt_patch.js','w',encoding='utf-8').write(js); print('total words',tot,len(js))
