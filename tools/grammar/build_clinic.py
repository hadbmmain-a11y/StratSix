# -*- coding: utf-8 -*-
import json
from gram_a import G as GA
from gram_b import G5, G6, G11
G = dict(GA); G[5]=G5; G[6]=G6; G[11]=G11
for n,g in G.items():
    for k in ("A_choose","A_fte","A_corr","A_trans","B_choose","B_fte","B_corr","cum"):
        assert k in g,(n,k)
    for k in ("A_fte","B_fte"):
        for it in g[k]:
            assert it[0].count("[[")==4,(n,it[0])
            assert 0<=it[1]<4
    for k in ("A_choose","A_corr","A_trans","B_choose","B_corr","cum"):
        for it in g[k]: assert len(it[2])==3,(n,k,it[0])
data={str(n):g for n,g in G.items()}
js = r'''/*CLINIC_PATCH_START*/
(function(){
  const FTE = window.__FTE; const DATA = %s;
  function mc(items, tag, seed){ return items.map((it,i)=>{ const pos = (i*3+seed)%%4; const o = it[2].slice(); o.splice(pos,0,it[1]); return {q:(tag?"<b>"+tag+".</b> ":"")+it[0], o:o, a:pos, why:it[3]}; }); }
  const W = BS.sections.writing;
  [2,3,5,6,11].forEach(n=>{
    const g = DATA[String(n)]; const d = W.days.find(x=>x.n===n);
    const st = d.stages;
    const tut = st.find(s=>s.kind==="tutorial");
    const learn = st.find(s=>s.kind==="learn");
    const prod = st.filter(s=> s!==tut && s!==learn && !(s.kind==="tool" && /Grammar check/.test(s.title||"")) && s.kind!=="habit" && !/^Extended practice/.test(s.title||"") );
    const clinic = (title,mins,qs)=>({kind:"practice", title:title, mins:mins, blocks:[{t:"mcq", tt:"X-Q", qs:qs}]});
    learn.mins = Math.max(learn.mins||10, 12);
    learn.blocks = learn.blocks.concat([{t:"html",html:g.A_notice},{t:"html",html:g.A_trap}]);
    const out = [];
    if(tut) out.push(tut);
    out.push(learn);
    out.push(clinic("Clinic 1 · "+g.A_name+": choose the correct one",5,mc(g.A_choose,"",n%%4)));
    out.push(clinic("Clinic 1 · "+g.A_name+": find the error",7,g.A_fte.map(f=>FTE(f[0],f[1],f[2]))));
    out.push(clinic("Clinic 1 · "+g.A_name+": error correction",5,mc(g.A_corr,"",(n+1)%%4)));
    out.push(clinic("Clinic 1 · "+g.A_name+": transform",4,mc(g.A_trans,"",(n+2)%%4)));
    out.push({kind:"learn", title:"Clinic 2 · "+g.B_name+": notice and rule", mins:6, blocks:[{t:"html",html:g.B_notice},{t:"html",html:g.B_trap}]});
    out.push(clinic("Clinic 2 · "+g.B_name+": practice",10,mc(g.B_choose,"Choose",(n+3)%%4).concat(g.B_fte.map(f=>FTE(f[0],f[1],f[2]))).concat(mc(g.B_corr,"Correct the sentence",n%%4))));
    prod.forEach(s=>out.push(s));
    out.push({kind:"check", title:"Cumulative check: today and earlier days", mins:8, blocks:[{t:"mcq", tt:"X-Q", qs:mc(g.cum,"",(n+1)%%4)}]});
    out.push({kind:"habit", title:"Daily homework: think and write", mins:12, blocks:[{t:"think", prompts:g.hw.map(p=>({q:p[0],min:p[1]})), checks:[{label:"Structures from today in your answers", min:1, re:g.chk_re}]}]});
    d.lock = true; d.stages = out;
  });
})();
/*CLINIC_PATCH_END*/
''' % json.dumps(data, ensure_ascii=False)
open('clinic_patch.js','w',encoding='utf-8').write(js)
print(len(js))
