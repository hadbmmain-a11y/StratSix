# -*- coding: utf-8 -*-
import json
from w2_data import W2, W1X, W2CK_COMMON
CK16=["My position is clear in the first sentence of each post.","I referred to a classmate and added something new.","I used a concession or hedging where appropriate.","I checked grammar, articles and punctuation before time ran out.","I stayed within the time limit."]
def pack(d):
    return {"S":[{"q":q,"min":m} for q,m in d.get("S",[])],"M":[{"q":q,"min":m} for q,m in d.get("M",[])],"H":[{"q":q,"min":m} for q,m in d.get("H",[])],"C":d.get("C",[])}
data={"W2":{str(k):pack(v) for k,v in W2.items()},"W1":{str(k):pack(v) for k,v in W1X.items()},"CK16":CK16,"COMMON":W2CK_COMMON}
js = r'''/*W2DAYS_PATCH_START*/
(function(){
  const DATA = %s;
  function thinkStage(title, task, prompts, intro, mins){ return {kind:"check", title:title, mins:mins||7, blocks:[{t:"think", task:task, btn:"Submit my answers", intro:intro, prompts:prompts}]}; }
  const strat = "<b>Required before you continue.</b> Think about the strategy you just read. There is no single correct answer, but you must give reasons.";
  const model = "<b>Required before you write.</b> Look again at the model. Answer in your own words and give reasons.";
  function apply(sec, n, cfg, ckExtra){
    const d = BS.sections[sec].days.find(x=>x.n===n); if(!d) return;
    const ck = cfg.C.concat(ckExtra? [ckExtra]:[]);
    const out = [];
    let sDone = false, mDone = false;
    d.stages.forEach(s=>{
      if(s.kind==="habit"){ return; }
      if(ck.length && s.blocks.some(b=>b.t==="write")) s.blocks = s.blocks.map(b=> b.t==="write"? Object.assign({}, b, {noScore:true, checklist:ck}) : b);
      out.push(s);
      if(!sDone && s.kind==="learn" && cfg.S.length){ out.push(thinkStage("Strategy questions: think and write","Strategy questions",cfg.S,strat)); sDone = true; }
      if(!mDone && s.kind==="model" && cfg.M.length){ out.push(thinkStage("Model questions: think and write","Model questions",cfg.M,model)); mDone = true; }
    });
    if(cfg.H.length) out.push({kind:"habit", title:"Daily homework: think and write", mins:12, blocks:[{t:"think", prompts:cfg.H}]});
    d.stages = out; d.lock = true;
  }
  Object.keys(DATA.W2).forEach(k=>apply("writing2", +k, DATA.W2[k], DATA.COMMON));
  Object.keys(DATA.W1).forEach(k=>apply("writing", +k, DATA.W1[k], k==="17"? null : null));
  /* Writing II mock: checklist instead of self-score, locked */
  const d16 = BS.sections.writing2.days.find(x=>x.n===16);
  d16.stages.forEach(s=>{ s.blocks = s.blocks.map(b=> b.t==="write"? Object.assign({}, b, {noScore:true, checklist:DATA.CK16}) : b); });
  d16.lock = true;
})();
/*W2DAYS_PATCH_END*/
''' % json.dumps(data, ensure_ascii=False)
open('w2_patch.js','w',encoding='utf-8').write(js)
print(len(js))
