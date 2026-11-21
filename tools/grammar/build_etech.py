# -*- coding: utf-8 -*-
import json, re
from etech_data import T, REV13, REV15
from etech_days import D
REV={"REV13":REV13,"REV15":REV15}
CK16=["Purpose in sentence 1: my first sentence states why I am writing (Technique 1).","Every bullet has its own sentence, in order (Technique 2).","Reason before request, when I ask for something (Technique 3).","I ended with a clear next step (Technique 4).","I softened my requests (Technique 5).","Neutral facts instead of blame, when I complain (Technique 6).","My greeting, closing and vocabulary match the reader (Technique 7).","I showed a benefit for the reader, when I persuaded (Technique 8).","I answered the likely objection, when I proposed something (Technique 9).","I offered an alternative or compromise (Technique 10).","I gave specific details: dates, numbers, names (Technique 11).","I linked my sentences with connectors (Technique 12)."]
data={"T":{str(k):{"n":v["n"],"name":v["name"],"def":v["d"],"how":v["how"],"weak":v["weak"],"strong":v["strong"],"sample":v["sample"],"drills":v["drills"],"fte":v["fte"]} for k,v in T.items()},
      "D":{str(k):v for k,v in D.items()},"REV":REV,"CK16":CK16}
js = r'''/*EMAILTECH2_PATCH_START*/
(function(){
  const FTE = window.__FTE, TECH = window.__TECH; const DATA = %s;
  function mc(items, tag, seed){ return items.map((it,i)=>{ const pos = (i*3+seed)%%4; const o = it[2].slice(); o.splice(pos,0,it[1]); return {q:"<b>"+tag+".</b> "+it[0], o:o, a:pos, why:it[3]}; }); }
  function thinkStage(title, task, prompts, intro, mins){ return {kind:"check", title:title, mins:mins||7, blocks:[{t:"think", task:task, btn:"Submit my answers", intro:intro, prompts:prompts}]}; }
  function techStage(t){
    const tt = {n:t.n,name:t.name,def:t.def,how:t.how,weak:t.weak,strong:t.strong,sample:t.sample};
    return {kind:"learn", title:"Technique "+t.n+" · "+t.name, mins:11, blocks:TECH(tt).concat([{t:"mcq", tt:"X-Q", qs:mc(t.drills,"Technique "+t.n, t.n%%4)},{t:"mcq", tt:"X-Q", qs:t.fte.map(f=>FTE(f[0],f[1],f[2]))}])};
  }
  function reviewStage(title, key, mins){ return {kind:"learn", title:title, mins:mins||8, blocks:[{t:"mcq", tt:"X-Q", qs:mc(DATA.REV[key], "Review", 1)}]}; }
  [8,9,10,12,13,15].forEach(n=>{
    const cfg = DATA.D[String(n)]; const d = BS.sections.writing.days.find(x=>x.n===n);
    const learn = d.stages[0], model = d.stages[1], turn = d.stages[2], ext = d.stages[3];
    const wr = b=>Object.assign({}, b, {noScore:true, checklist:cfg.ck});
    const stages = [learn, thinkStage("Strategy questions: think and write","Strategy questions",cfg.strat,"<b>Required before you continue.</b> Think about the strategy you just read. There is no single correct answer, but you must give reasons. Your teacher will read your answers.")];
    cfg.techs.forEach(k=>stages.push(techStage(DATA.T[String(k)])));
    if(cfg.review) stages.push(reviewStage(cfg.reviewTitle, cfg.review));
    if(cfg.review2) stages.push(reviewStage(cfg.review2Title, cfg.review2));
    stages.push(model);
    stages.push(thinkStage("Model questions: think and write","Model questions",cfg.model,"<b>Required before you write.</b> Look again at the model. Answer in your own words and give reasons."));
    stages.push({kind:"apply", title:"Your turn: use the techniques", mins:20, blocks:turn.blocks.map(wr)});
    stages.push({kind:"apply", title:"Extended practice: two more emails", mins:40, blocks:ext.blocks.map(wr)});
    stages.push({kind:"habit", title:"Daily homework: think and write", mins:12, blocks:[{t:"think", prompts:cfg.hw}]});
    d.lock = true; d.stages = stages;
  });
  /* Day 16 mock: all twelve techniques as a checklist, no self-score */
  const d16 = BS.sections.writing.days.find(x=>x.n===16);
  d16.stages.forEach(s=>{ s.blocks = s.blocks.map(b=> b.t==="write"? Object.assign({}, b, {noScore:true, checklist:DATA.CK16}) : b); });
  d16.lock = true;
})();
/*EMAILTECH2_PATCH_END*/
''' % json.dumps(data, ensure_ascii=False)
open('email_patch2.js','w',encoding='utf-8').write(js)
print(len(js))
