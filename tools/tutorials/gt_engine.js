/*GT_ENGINE_START*/
(function(){
  const V = BS.TV;
  const ROLE = {q:"q",aux:"aux",s:"s",v:"v",x:"x",n:"n",g:"x gone",ghost:"ghost"};
  const chips = spec => spec.split("|").map((p,i)=>{ const k = p.indexOf(":"); const r = p.slice(0,k), t = p.slice(k+1); return `<span class="gt-chip ${ROLE[r]||"n"}${i<5?" d"+(i+1):""}">${t}</span>`; }).join("");
  const row = spec => `<div class="gt-row">${chips(spec)}</div>`;
  const wrap = (...c) => `<div class="gt">${c.join("")}</div>`;
  const card = (cls,label,html) => `<div class="gt-card ${cls}"><small>${label}</small>${html}</div>`;
  const legend = items => `<div class="gt-legend">${items.map(i=>{ const k=i.indexOf(":"); return `<span class="gt-chip ${ROLE[i.slice(0,k)]||"n"}">${i.slice(k+1)}</span>`; }).join("")}</div>`;
  const quiz = (stem, opts, win) => wrap(`<div class="gt-head">${stem}</div>`, `<div class="gt-quiz">${opts.map((o,i)=>`<div class="gt-opt ${i===win?"win":"lose"}"><i>${"ABC"[i]}</i><span>${o}</span></div>`).join("")}</div>`);
  function mcq(q, correct, wrong, why, seed){ const pos = seed%4; const o = wrong.slice(); o.splice(pos,0,correct); return {q:q, o:o, a:pos, why:why||""}; }
  function build(d){
    const ruleSc = d.rule.map(r=>({v: wrap(...[r.legend?legend(r.legend):"", r.sub?`<div class="gt-sub">${r.sub}</div>`:"", ...(r.rows||[]).map(row), r.pair?`<div class="gt-two">${card("bad",r.pair[0],r.pair[1])}${card("good",r.pair[2],r.pair[3])}</div>`:"", r.big?`<div class="gt-head">${r.big}</div>`:"", r.note?`<div class="gt-sub">${r.note}</div>`:""]), say:r.say}));
    const tr = d.trap;
    const trapSc = [
      {v:wrap(`<span class="gt-flag">🇧🇴</span>`, card("good","Spanish",tr.es), `<div class="gt-sub">${tr.esnote}</div>`), say:tr.say1},
      {v:wrap(`<div class="gt-two"><div><span class="gt-flag">🇧🇴</span>${card("good","Spanish",tr.es2||tr.es)}</div><div><span class="gt-flag">🇬🇧</span>${card("bad","English ✗",tr.enbad)}</div></div>`, `<span class="gt-stamp">DON'T COPY!</span>`), say:tr.say2},
      {v:wrap(`<div class="gt-big">🛑</div>`, `<div class="gt-head">${tr.stop}</div>`, card("good","English ✓",tr.engood)), say:tr.say3}
    ].concat((tr.more||[]).map(m=>({v:wrap(card("bad",m[0],m[1]), `<div class="gt-scissors">${m[4]||"🔧"}</div>`, card("good",m[2],m[3])), say:m[5]})));
    const segs = [
      {name:"1 · "+d.ch1, segs:[
        {v:wrap(`<div class="gt-big">${d.emoji}</div>`, `<div class="gt-sub">${d.kicker}</div>`, `<div class="gt-head">${d.title}</div>`), say:d.hook},
        {v:wrap(card("glow","Version A",d.A), `<div class="gt-vs">VS</div>`, card("glow","Version B",d.B)), say:d.cmp},
        {v:wrap(`<div class="gt-two"><div class="gt-wrapc">${card("bad","Version A",d.A)}<span class="gt-stamp">${d.stampA||"WRONG"}</span></div><div class="gt-wrapc">${card("good","Version B",d.B)}<span class="gt-stamp ok">${d.stampB||"CORRECT"}</span></div></div>`), say:d.verdict},
        {v:wrap(`<div class="gt-big">${d.whyEmoji||"🎯"}</div>`, `<div class="gt-head">${d.whyHead}</div>`, `<div class="gt-sub">${d.whySub}</div>`), say:d.why}]},
      {name:"2 · The rule", segs:ruleSc},
      {name:"3 · The Spanish trap", segs:trapSc},
      {name:"4 · Your turn", segs:[
        {v:quiz(d.quiz[0], d.quiz[1], d.quiz[2]), say:d.quizsay},
        {v:wrap(`<div class="gt-sub">${d.fix.sub}</div>`, row(d.fix.row)), say:d.fix.say},
        {v:wrap(`<div class="gt-head" style="font-size:1.05em;margin-bottom:-2px">Remember</div><div class="gt-steps">${d.recap.map((s,i)=>`<div class="gt-step" style="animation-delay:${i*.4}s"><b>${i+1}</b><span>${s}</span></div>`).join("")}</div>`), say:d.recapsay},
        {v:wrap(`<div class="gt-big">🏆</div>`, `<div class="gt-head">${d.done}</div>`, `<div class="gt-meter"><i></i></div>`, `<div class="gt-confetti">🎉 ✨ 🎉</div>`, `<div class="gt-sub">Next: practice · choose · find the error · correct</div>`), say:d.donesay}]}
    ];
    return {id:d.id, sec:d.sec, day:d.day, task:d.task, mins:5, bar:(d.sec==="writing2"?"Writing II":"Writing I")+" · Grammar tutorial · "+d.task, clock:"", ch:segs};
  }
  function checks(d){
    const c = d.check; const win = d.quiz[2];
    return [ mcq("<b>Tutorial check.</b> "+d.quiz[0].replace(/<[^>]+>/g,""), d.quiz[1][win], d.quiz[1].filter((_,i)=>i!==win), c.why1, 1),
             mcq("<b>Tutorial check.</b> "+c.q2, c.a2, c.w2, c.why2, 2) ];
  }
  function place(d, t){
    const W = BS.sections[d.sec]; const day = W.days.find(x=>x.n===d.day); if(!day) return;
    BS.tutorials[t.id] = t;
    const stage = {kind:"tutorial", title:"Tutorial: "+d.task, mins:5, blocks:[{t:"tutorial", id:t.id},{t:"mcq", tt:"X-Q", qs:checks(d)}]};
    if(d.replace){ const i = day.stages.findIndex(s=>(s.title||"").indexOf(d.replace)>=0); if(i>=0){ day.stages.splice(i,1,stage); return; } }
    const i = day.stages.findIndex(s=>(s.title||"").indexOf(d.before)===0 || (s.title||"").indexOf(d.before)>=0);
    if(i>=0) day.stages.splice(i,0,stage); else day.stages.push(stage);
  }
  window.__GT = {build, place, strip:function(secId, days){
    days.forEach(n=>{ const day = BS.sections[secId].days.find(x=>x.n===n); if(!day) return; const l = day.stages.find(s=>s.kind==="learn"); if(!l) return;
      const before = l.blocks.length;
      l.blocks = l.blocks.filter(b=> !(b.t==="html" && /^<h4>(Notice|Spanish-speaker trap)/.test(b.html||"")));
      if(l.blocks.length<before) l.mins = Math.max(8,(l.mins||12)-2); });
  }};
})();
/*GT_ENGINE_END*/
