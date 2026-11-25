/*SCOREREPORT_START*/
/* ---------------- StratSix: score report (why this score, scale, word check, teacher comparison) ---------------- */
const fs1 = v => String(Math.round(Number(v)*2)/2);
function rubricFor(task){ const t = String(task||""); return /e-?mail/i.test(t)? "email" : /discussion/i.test(t)? "discussion" : /interview/i.test(t)? "interview" : /repeat/i.test(t)? "repeat" : null; }
function numScore(v){ if(v===""||v==null) return null; const n = Number(v); return isNaN(n)? null : n; }
function aiNum(it){ const a = aiParse(it && (it.ai!=null? it.ai : it.ai_result)); return a && !a.err && a.score!=null && !isNaN(Number(a.score))? Number(a.score) : null; }
function gapInfo(ai, y){ if(ai==null || y==null) return null; const d = Math.round((ai-y)*10)/10; return {d, warn: Math.abs(d)>1}; }
function normWord(w){ return String(w||"").toLowerCase().replace(/’/g,"'").replace(/[^a-z0-9'-]/g,"").replace(/^['-]+|['-]+$/g,""); }
function wordsOf(t){ return String(t||"").split(/\s+/).map(normWord).filter(Boolean); }
function alignWords(target, said){
  const n = target.length, m = said.length; const dp = []; for(let i=0;i<=n;i++) dp.push(new Array(m+1).fill(0));
  for(let i=n-1;i>=0;i--) for(let j=m-1;j>=0;j--) dp[i][j] = target[i]===said[j]? dp[i+1][j+1]+1 : Math.max(dp[i+1][j], dp[i][j+1]);
  const hit = new Array(n).fill(false); let i = 0, j = 0;
  while(i<n && j<m){ if(target[i]===said[j]){ hit[i] = true; i++; j++; } else if(dp[i+1][j]>=dp[i][j+1]) i++; else j++; }
  return hit;
}
function scoreScale(v){
  const p = Math.max(0, Math.min(5, Number(v)))*20;
  return h("div",{class:"sc-scale",role:"img","aria-label":"Score "+fs1(v)+" on a scale from 0 to 5"},
    h("div",{class:"sc-track"}, h("i",{style:"width:"+p+"%"}), h("b",{style:"left:"+p+"%"})),
    h("div",{class:"sc-ticks"}, ...[0,1,2,3,4,5].map(n=>h("span",null,String(n)))));
}
function levelCrit(it){
  const rid = rubricFor(it && it.task), rb = rid && BS.rubrics[rid], fb = it && it.fb;
  if(!rb || !fb || typeof fb!=="object" || !Array.isArray(fb.criteria)) return null;
  let best = null;
  fb.criteria.forEach(c=>{ const s = numScore(c && c.score); if(s==null || s<0 || s>5) return;
    const def = rb.criteria.find(x=>String(x.id).toLowerCase()===String((c&&c.id)||"").toLowerCase() || String(x.name).toLowerCase()===String((c&&c.label)||"").toLowerCase());
    if(def && (!best || s<best.s)) best = {s, def}; });
  return best;
}
function levelBoxes(it){
  const lc = levelCrit(it); if(!lc) return null;
  const f = Math.floor(lc.s), lv = lc.def.levels || {}, cur = lv[f], nxt = f<5? lv[f+1] : null; if(!cur) return null;
  return h("div",{class:"sc-levels"},
    h("div",{class:"sc-lv"}, h("div",{class:"small muted"}, lc.def.name+" · level "+f+(lc.s%1? " reached, part of "+(f+1) : " reached")), h("div",{class:"small"}, cur)),
    nxt? h("div",{class:"sc-lv next"}, h("div",{class:"small muted"}, "Level "+(f+1)+" · next"), h("div",{class:"small"}, nxt)) : null);
}
function quoteOk(it, q){ q = String(q||"").trim(); if(!q) return false; const t = String((it&&(it.transcript||it.response_text))||""); return !t || t.toLowerCase().indexOf(q.toLowerCase())>=0; }
function whyLine(mark, cls, label, o, it){
  if(!o || !o.text) return null;
  return h("div",{class:"sc-line "+cls}, h("span",{class:"sc-mark","aria-hidden":"true"}, mark), h("div",null, h("b",null, label+" "), String(o.text), quoteOk(it,o.quote)? h("span",null," ", h("mark",null, "“"+String(o.quote).trim()+"”")) : null));
}
function whyBlock(it){
  const s = aiNum(it); if(s==null) return null;
  const fb = (it.fb && typeof it.fb==="object")? it.fb : null, why = fb && fb.why && typeof fb.why==="object"? fb.why : null;
  const lv = Math.floor(s), half = (s-lv)>=0.5;
  const summary = (why && why.summary)? String(why.summary) : (half? "You fully reached level "+lv+" and part of level "+(lv+1)+"." : lv>=5? "You reached the top level." : "You reached level "+lv+".");
  const nextTxt = fb && fb.next? String(fb.next) : "";
  return h("div",{class:"sc-why stack",style:"gap:10px"},
    h("div",{class:"row",style:"justify-content:space-between;align-items:baseline"}, h("b",null,"Why "+fs1(s)+(half? " and not "+lv+" or "+(lv+1) : "")), h("span",{class:"small muted"},"Practice estimate")),
    scoreScale(s),
    h("div",{class:"small"}, summary),
    levelBoxes(it),
    whyLine("✓","earned","What earned it.", why&&why.earned, it),
    whyLine("!","held","What held it back.", why&&why.held_back, it),
    nextTxt? h("div",{class:"sc-line next"}, h("span",{class:"sc-mark","aria-hidden":"true"},"→"), h("div",null, nextTxt)) : null,
    (!fb)? h("div",{class:"small muted"},"A detailed report is not available for this score.") : null);
}
function repeatReport(it){
  const raw = String((it && it.prompt) || "").trim().split(/\s+/).map(w=>({w, n:normWord(w)})).filter(x=>x.n);
  const sd = wordsOf(it && (it.transcript || it.response_text));
  if(!raw.length || !sd.length) return null;
  const tg = raw.map(x=>x.n), hit = alignWords(tg, sd), got = hit.filter(Boolean).length, extra = Math.max(0, sd.length-got), p = Math.round(100*got/tg.length);
  const missed = []; raw.forEach((x,i)=>{ if(!hit[i] && missed.indexOf(x.n)<0) missed.push(x.n); });
  const perfect = got===tg.length && extra===0;
  const text = perfect? "You repeated every word." : "You repeated "+got+" of "+tg.length+" words."+(missed.length? " Missed: "+missed.slice(0,6).join(", ")+"." : "")+(extra? " You also added or changed "+extra+" word"+(extra===1?"":"s")+"." : "");
  return h("div",{class:"sc-why rep stack",style:"gap:10px"},
    h("div",{class:"row",style:"justify-content:space-between;align-items:baseline"}, h("b",null,"Word check"), h("span",{class:"small"}, got+" of "+tg.length+" words ("+p+"%)")),
    h("div",{class:"sc-chips"}, ...raw.map((x,i)=>h("span",{class:"sc-chip "+(hit[i]? "ok" : "miss")}, x.w))),
    h("div",{class:"small"}, text),
    perfect? null : h("div",{class:"sc-line next"}, h("span",{class:"sc-mark","aria-hidden":"true"},"→"), h("div",null,"To reach 5, repeat every word, including small words such as “the” and “a”.")),
    h("div",{class:"small muted"},"Calculated by StratSix from what the app heard. The AI score also looks at meaning."));
}
function reportFor(it){ return rubricFor(it && it.task)==="repeat"? (repeatReport(it) || whyBlock(it)) : whyBlock(it); }
function gapFlag(el, ai, y){
  const g = gapInfo(ai, y); el.hidden = !g; if(!g) return g;
  el.className = "gapflag small "+(g.warn? "warn" : "ok"); const a = Math.abs(g.d);
  el.textContent = g.warn? "Differs from the AI by "+a.toFixed(1)+" points. Review the AI reasoning before you publish." : "Within "+a.toFixed(1)+" points of the AI. No review needed.";
  return g;
}
function baseTask(t){ return String(t||"").replace(/^Test \d+\s*/i,"").replace(/\s*Q?\d+$/i,"").trim().toLowerCase(); }
function ctxLine(it, list){
  const others = (list||[]).filter(x=>x && x.row!==it.row && x.section===it.section);
  const same = others.filter(x=>baseTask(x.task)===baseTask(it.task) && String(x.day||"")===String(it.day||"")).map(aiNum).filter(v=>v!=null);
  const mine = others.filter(x=>it.email && x.email===it.email && aiNum(x)!=null && String(x.time)<String(it.time)).sort((a,b)=>String(b.time).localeCompare(String(a.time))).slice(0,3).map(aiNum).reverse();
  const first = String(it.name||"Student").split(/\s+/)[0], out = [];
  if(same.length) out.push("Class average for this task: "+(same.reduce((a,v)=>a+v,0)/same.length).toFixed(1)+" ("+same.length+" response"+(same.length===1?"":"s")+")");
  if(mine.length) out.push(first+"’s last "+mine.length+": "+mine.map(fs1).join(", "));
  return out.join(" · ");
}
const CTXQ = {t:0, items:null, p:null};
function ctxItems(){
  if(CTXQ.items && Date.now()-CTXQ.t<60000) return Promise.resolve(CTXQ.items);
  if(CTXQ.p) return CTXQ.p;
  CTXQ.p = ssGet({action:"queue", all:"1"}).then(j=>{ CTXQ.items = j.items||[]; CTXQ.t = Date.now(); CTXQ.p = null; return CTXQ.items; }).catch(()=>{ CTXQ.p = null; return []; });
  return CTXQ.p;
}

/* ---------------- Teacher: all results table (accuracy, AI score, your score, gap) ---------------- */
const secName = s => s==="writing"? "Writing I" : s==="writing2"? "Writing II" : cap(String(s||""));
const ttSec = k => ({R:"reading",L:"listening",W:"writing",S:"speaking",X:"strategy"})[String(k||"")[0]] || "";
function resultRows(){
  const out = [];
  (STU.rows||[]).filter(r=>r.p.role!=="teacher").forEach(r=>{
    const name = r.p.full_name || r.p.email;
    r.subs.forEach(x=>{
      const ai = aiParse(x.ai_result), aiv = ai && !ai.err && ai.score!=null && !isNaN(Number(ai.score))? Number(ai.score) : null;
      let c = null, n = null;
      if(rubricFor(x.task)==="repeat" && x.prompt && x.response_text){ const tg = wordsOf(x.prompt); if(tg.length){ c = alignWords(tg, wordsOf(x.response_text)).filter(Boolean).length; n = tg.length; } }
      out.push({r, name, kind:"scored", label:x.section+" · "+x.task+(x.day? " · D"+x.day : ""), at:x.created_at, c, n, ai:aiv, aiErr:!!(ai&&ai.err), y:x.teacher_score==null? null : Number(x.teacher_score)});
    });
    const sm = (r.prog && r.prog.summary) || {}, ex = Array.isArray(sm.ex)? sm.ex : null;
    if(ex) ex.forEach(e=>{ if(e && e.t) out.push({r, name, kind:"auto", label:secName(e.s)+" · "+(TT[e.tt]||e.tt)+(e.d? " · D"+e.d : ""), at:e.at||null, c:e.c, n:e.t, ai:null, y:null}); });
    else { const ty = sm.types || {}; Object.keys(ty).forEach(k=>{ const v = ty[k]; if(v && v.t) out.push({r, name, kind:"auto", label:secName(ttSec(k))+" · "+(TT[k]||k), at:null, c:v.c, n:v.t, ai:null, y:null}); }); }
  });
  return out;
}
function rowStatus(x){
  if(x.kind==="auto") return (x.n>=5 && x.c/x.n<0.6)? "low" : "auto";
  const g = gapInfo(x.ai, x.y);
  if(g && g.warn) return "review";
  if(x.ai!=null && x.y==null) return "pending";
  if(x.ai==null && x.aiErr && x.y==null) return "ainot";
  if(x.ai==null && x.y==null) return "airun";
  return "ok";
}
function resultStats(rows){
  const auto = rows.filter(x=>x.kind==="auto"), both = rows.filter(x=>gapInfo(x.ai,x.y));
  const ct = auto.reduce((a,x)=>a+x.c,0), nt = auto.reduce((a,x)=>a+x.n,0);
  return {acc: nt? Math.round(100*ct/nt) : null,
    near: both.length? Math.round(100*both.filter(x=>Math.abs(x.ai-x.y)<=0.5+1e-9).length/both.length) : null,
    bias: both.length? both.reduce((a,x)=>a+(x.ai-x.y),0)/both.length : null,
    attention: rows.filter(x=>{ const k = rowStatus(x); return k==="review" || k==="low"; }).length};
}
const RESV = {f:"all", mode:0, all:false};
const RES_STATUS = {ok:["ok","Reviewed"], auto:["ok","Auto-scored"], review:["warn","Review the gap"], pending:["plain","Waiting for you"], low:["warn","Low accuracy"], ainot:["plain","Not scored by AI"], airun:["plain","AI pending"]};
function resultsPanel(){
  const rows = resultRows(), st = resultStats(rows);
  const tile = (n,label)=>h("div",{class:"ov-tile"}, h("b",null,String(n)), h("span",{class:"small muted"},label));
  const tiles = h("div",{class:"ov-tiles"}, tile(st.acc==null? "–" : st.acc+"%","group accuracy (auto-scored)"), tile(st.near==null? "–" : st.near+"%","AI within 0.5 of your score"), tile(st.bias==null? "–" : (st.bias>=0?"+":"")+st.bias.toFixed(1),"average AI minus you"), tile(st.attention,"need attention"));
  const body = h("tbody",null), more = h("button",{class:"btn ghost sm",type:"button",hidden:true});
  const fbtn = {}, bar = h("div",{class:"row",style:"gap:8px;flex-wrap:wrap;align-items:center"});
  [["all","All"],["review","Needs review"],["pending","Pending your score"],["low","Low accuracy"]].forEach(([k,l])=>{ const b = h("button",{class:"btn sm",type:"button","aria-pressed":RESV.f===k?"true":"false"}, l); fbtn[k] = b; b.addEventListener("click",()=>{ RESV.f = k; draw(); }); bar.append(b); });
  const sortB = h("button",{class:"btn sm",type:"button",style:"margin-left:auto"}); sortB.addEventListener("click",()=>{ RESV.mode = (RESV.mode+1)%2; draw(); }); bar.append(sortB);
  function draw(){
    Object.keys(fbtn).forEach(k=>fbtn[k].setAttribute("aria-pressed", RESV.f===k?"true":"false"));
    sortB.textContent = RESV.mode===0? "Sort: largest AI gap" : "Sort: lowest accuracy";
    let list = rows.filter(x=>RESV.f==="all" || rowStatus(x)===RESV.f);
    list.sort((a,b)=>{ const ga = gapInfo(a.ai,a.y), gb = gapInfo(b.ai,b.y);
      const k = RESV.mode===0? (gb? Math.abs(gb.d) : -1)-(ga? Math.abs(ga.d) : -1) : (a.n? a.c/a.n : 9)-(b.n? b.c/b.n : 9);
      return k || String(b.at||"").localeCompare(String(a.at||"")); });
    const shown = RESV.all? list : list.slice(0,40);
    body.innerHTML = "";
    shown.forEach(x=>{
      const k = rowStatus(x), g = gapInfo(x.ai,x.y), p = x.n? Math.round(100*x.c/x.n) : null;
      const pc = p==null? h("span",{class:"small muted"},"–") : h("div",null, h("div",{class:"row",style:"gap:6px;align-items:center"}, h("span",{class:"small",style:"min-width:34px"}, p+"%"), h("div",{class:"meter "+(p>=80?"":p>=60?"mid":"low"),style:"width:44px"}, h("i",{style:"width:"+p+"%"}))), h("div",{class:"small muted"}, x.c+" of "+x.n+(x.n<5? " · few data" : "")));
      const tr = h("tr",{class:"res-row",tabindex:"0"}, h("td",null,x.name), h("td",{class:"small muted"},x.label), h("td",null,pc), h("td",{class:"mono",style:"text-align:center"}, x.ai==null? "–" : fs1(x.ai)), h("td",{class:"mono",style:"text-align:center"}, x.y==null? "–" : fs1(x.y)), h("td",{class:"mono"+(g&&g.warn?" gap-warn":""),style:"text-align:center"}, g? (g.d>0?"+":"")+g.d.toFixed(1) : "–"), h("td",null, h("span",{class:"pill "+RES_STATUS[k][0]}, RES_STATUS[k][1])));
      const open = ()=>{ STU.sel = x.r; render(); window.scrollTo(0,0); };
      tr.addEventListener("click", open); tr.addEventListener("keydown",e=>{ if(e.key==="Enter") open(); });
      body.append(tr);
    });
    if(!shown.length) body.append(h("tr",null, h("td",{colspan:"7",class:"small muted"}, rows.length? "Nothing matches this filter." : "No results yet. They appear after students submit work or check answers.")));
    more.hidden = list.length<=40; more.textContent = RESV.all? "Show fewer" : "Show all "+list.length;
  }
  more.addEventListener("click",()=>{ RESV.all = !RESV.all; draw(); });
  draw();
  return h("div",{class:"panel stack",id:"results-table"}, h("div",{class:"eyebrow"},"All results"), h("h2",null,"Every exercise: accuracy, AI score, your score"), tiles, bar,
    h("div",{class:"tbl-wrap"}, h("table",{class:"format-table res-table"}, h("thead",null, h("tr",null, ...["Student","Exercise","% correct","AI","You","AI − you","Status"].map((t,i)=>h("th",{style:i>=3&&i<=5?"text-align:center":""},t)))), body)), more,
    h("div",{class:"small muted"},"Positive difference: the AI scored higher than you. Reading and Listening are scored by correct answers. Writing and Speaking are scored 0 to 5. Fewer than 5 answers is marked “few data”. Click a row to open the student."));
}
/*SCOREREPORT_END*/
