# -*- coding: utf-8 -*-
import json
from w2c_a import C as A
from w2c_b import C as B
from w2c_c import C as Cc
C={}; C.update(A); C.update(B); C.update(Cc)
assert sorted(C)==[1,2,3,4,5,6,7,8,9,11,12,13,15], sorted(C)
data={str(k):v for k,v in C.items()}
js = r'''/*W2CLINIC_PATCH_START*/
(function(){
  const FTE = window.__FTE; const DATA = %s;
  function mc(items, tag, seed){ return items.map((it,i)=>{ const pos = (i*3+seed)%%4; const o = it[2].slice(); o.splice(pos,0,it[1]); return {q:(tag?"<b>"+tag+".</b> ":"")+it[0], o:o, a:pos, why:it[3]}; }); }
  const W = BS.sections.writing2;
  Object.keys(DATA).forEach(k=>{
    const n = +k, g = DATA[k]; const d = W.days.find(x=>x.n===n); if(!d) return;
    const ti = d.stages.findIndex(s=>s.kind==="tool");
    const learn = d.stages.find(s=>s.kind==="learn");
    learn.mins = (learn.mins||12) + 3;
    learn.blocks = learn.blocks.concat([{t:"html",html:g.notice},{t:"html",html:g.trap}]);
    const cl = (title,mins,qs)=>({kind:"practice", title:"Clinic · "+g.name+": "+title, mins:mins, blocks:[{t:"mcq", tt:"X-Q", qs:qs}]});
    const stages = [
      cl("choose the correct one",4,mc(g.choose,"",n%%4)),
      cl("find the error",6,g.fte.map(f=>FTE(f[0],f[1],f[2]))),
      cl("correct and transform",6,mc(g.corr,"Correct the sentence",(n+1)%%4).concat(mc(g.trans,"Transform",(n+2)%%4)))
    ];
    if(ti>=0) d.stages.splice(ti,1,...stages); else d.stages.splice(d.stages.length-1,0,...stages);
  });
})();
/*W2CLINIC_PATCH_END*/
''' % json.dumps(data, ensure_ascii=False)
open('w2clinic_patch.js','w',encoding='utf-8').write(js); print(len(js))
