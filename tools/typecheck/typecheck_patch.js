/*TYPECHECK_PATCH_START*/
/* Daily Typing Check for Writing I and II (34 days): copy phase + free-writing phase that grows from 1 to 10 minutes.
   Placed before the daily homework. Goal line: 60+ words per minute, no upper limit. Completing it is required, reaching 60 is not.
   Replaces the older one-off typing tests so no day has two. Source copy: tools/typecheck/typecheck_patch.js */
const TC_GOAL = 60;
const TC_TEXTS = [
"Dear Professor Martinez, I am writing to ask for a short extension on the research paper that is due on Friday. Last week I was ill and could not attend two classes or work in the library. I have already finished the outline and about half of the first draft. If possible, I would like to submit the final version on Tuesday instead. I understand that deadlines are important, and I will make sure that the paper is complete and carefully edited. Thank you very much for considering my request. I would be happy to meet with you during your office hours to discuss my progress. Sincerely, Daniela Rojas",
"The university library will extend its opening hours during the final exam period. Starting next Monday, students will be able to study there until midnight on weekdays and until ten in the evening on weekends. Quiet rooms can be reserved online for up to two hours at a time, and a limited number of laptops will be available at the front desk. Library staff encourage students to arrive early, because the most popular study areas fill up quickly. Anyone who needs help finding sources for a paper can book a short appointment with a librarian. These changes are meant to give everyone a calm and productive place to prepare.",
"Many people believe that online courses will soon replace traditional classrooms. However, research suggests that the situation is more complicated. Online lessons give students flexibility, since they can study at any time and repeat difficult explanations as often as they need. On the other hand, face-to-face classes offer immediate feedback and encourage students to take part in discussions. For this reason, a growing number of universities combine both methods. Students watch short lectures at home and then use class time to solve problems with their classmates and their teacher. In my opinion, this approach takes the best features of each format and helps students stay motivated.",
"Group projects are common in university courses, and they can be both rewarding and frustrating. When team members share the work fairly, a group can produce a better result than any single student. Different people bring different ideas, and discussing them often leads to stronger solutions. Problems appear when one person does most of the work or when nobody takes responsibility for the schedule. To avoid this, teams should divide tasks clearly, set deadlines for each part and meet regularly to check their progress. Professors can also help by asking each student to describe their contribution. With good communication and a little patience, a group project becomes valuable practice for working life.",
"Dear Ms. Alvarez, I live in apartment 4B, and I am writing about a problem with the heating in my room. For the past week the radiator has made a loud noise at night, and the room is still cold in the morning. I reported the problem at the front desk on Monday, but nobody has come to repair it. Could someone from maintenance visit this week? I am usually at home after five o'clock, and I can also leave the key at the office if that is more convenient. I would be very grateful for your help. Best regards, Marco Salazar",
"Sleep plays an important role in how well students learn. When people sleep enough, their brains organize new information and store it in long-term memory. By contrast, students who stay awake all night before an exam often find it harder to concentrate and remember details. Studies have shown that even one night of poor sleep can reduce attention and slow down reaction time. Experts therefore recommend a regular schedule, with the same bedtime on most days, and advise students to avoid screens for an hour before sleeping. Small habits like these may seem unimportant, but over a whole semester they can make a noticeable difference in grades and in general well-being.",
"Many students take part-time jobs while they study, and the effects can be positive or negative. A job teaches responsibility, time management and communication skills that are difficult to learn in a classroom. It can also reduce financial pressure, which allows students to focus on their courses. However, working too many hours leaves less time for homework and rest, and grades may suffer as a result. Most advisers suggest that students work no more than about fifteen hours a week during the semester. It is also wise to look for jobs on campus, because employers there usually understand academic schedules and are willing to adjust working hours around exams.",
"Dear Dr. Nguyen, I hope you are well. I am a second-year student in your department, and I would like to ask your advice about changing one of my courses. I am currently enrolled in Statistics 201, but the class meets at the same time as a required laboratory session. Would it be possible to move to the evening section instead? I have already spoken to the registrar, who said that I need your approval. I can come to your office tomorrow at any time between ten and noon. Thank you for your time and support. Yours sincerely, Camila Torres",
"Technology has changed the way teachers and students use class time. Tablets and laptops make it easy to look up information, share documents and take notes quickly. Some teachers also use educational games to keep students interested in difficult topics. Nevertheless, devices can be distracting, because notifications and social media compete for attention. Several schools have therefore introduced simple rules, such as closing all unrelated programs during lessons. In my view, technology is a useful tool only when it has a clear purpose. If students know why they are using a device, they are more likely to stay focused and to learn something new.",
"The city council has announced a new plan to improve public transportation near the university. Two additional bus lines will connect the main campus with the student residences, and buses will run every ten minutes during the morning and evening rush hours. Students will receive a discounted monthly pass, which can be bought online or at the campus bookstore. Officials hope that the plan will reduce traffic and make it easier for people without cars to reach their classes on time. A public meeting will be held next Thursday, where residents can ask questions and suggest further changes to the proposed routes.",
"An internship gives students the chance to apply what they have learned in a real workplace. Interns often discover which parts of their field they enjoy most, and they build contacts that may help them find a job after graduation. Employers also benefit, since they can observe talented students before offering them permanent positions. To get the most from the experience, interns should ask questions, accept feedback calmly and keep a record of the tasks they complete. Even a short summer internship can improve a resume significantly. For these reasons, many universities encourage students to look for placements as early as their second year of study.",
"Dear Professor Kim, I am applying to a master's program in environmental science, and I am writing to ask whether you would be willing to write a letter of recommendation for me. I enjoyed your course on climate policy last spring, and I believe you know my work well. The application deadline is December first, and the online form takes only a few minutes to complete. I can send you my resume, my statement of purpose and a list of the programs I am applying to. Please let me know if you need anything else. I truly appreciate your consideration. Kind regards, Lucas Herrera",
"Reading for pleasure is becoming less common among young people, and many teachers are worried about this trend. Books expand vocabulary, improve concentration and introduce readers to ideas and cultures that they might never meet otherwise. Fortunately, there are simple ways to build the habit. Readers can start with short stories or magazines about topics they already enjoy, and they can set aside twenty minutes each evening for reading. Joining a book club also helps, because friends encourage each other to finish what they begin. Over time, regular reading makes difficult texts easier to understand, which is especially useful for students who prepare for academic exams.",
"Choosing where to study is a difficult decision, and both large cities and small towns have advantages. In a big city, students find more libraries, museums and internship opportunities, as well as a wide variety of people and cultures. However, living costs are usually higher, and the noise and traffic can make it hard to concentrate. Small towns, on the other hand, tend to be quieter and cheaper, and students often feel part of a close community. The disadvantage is that there may be fewer jobs and entertainment options. Ultimately, the best choice depends on a student's budget, goals and personality.",
"Volunteering is an excellent way for students to contribute to their communities while developing useful skills. Helping at a food bank or teaching children to read requires patience, teamwork and creativity, and these qualities are valued by employers. Volunteers also meet people from many different backgrounds, which broadens their understanding of society. Some universities even offer academic credit for community service, although most students volunteer simply because they want to help. It is not necessary to spend many hours every week. Even two hours on a Saturday morning can have a real effect on the people who need support and on the volunteers themselves.",
"Hello everyone, I am the president of the International Film Club, and I would like to invite you to our first meeting of the semester. We will gather in Room 210 of the student center on Wednesday at six o'clock. We plan to watch a short documentary and then talk about it over snacks and tea. New members are very welcome, and no experience is required. If you would like to suggest a film for future evenings, please reply to this message before Tuesday. We hope to see many of you there. Best wishes, Elena Vargas",
"Making mistakes is a natural and necessary part of learning. When students avoid errors at all costs, they often stop trying new things and miss valuable opportunities to improve. By contrast, learners who treat mistakes as information usually make faster progress. After a test, for example, it is useful to review each wrong answer and ask why it happened. Was it a lack of knowledge, a careless reading or a lack of time? Writing down the reason helps the student choose a better strategy next time. Teachers can support this attitude by praising effort and by giving clear, specific feedback instead of only a final grade."
];
const TC_EMAIL = [
"Write an email to your teacher. Tell him you will miss tomorrow's class and ask what you should study.",
"Write an email to a classmate. Invite her to study together this weekend and suggest a place and a time.",
"Write an email to the library. Ask about the opening hours and whether you can reserve a quiet room.",
"Write an email to your landlord. Explain a problem in your apartment and ask when it can be fixed.",
"Write an email to your professor. Ask for an extra day to finish an assignment and give a reason.",
"Write an email to a language school. Ask about the price, the schedule and the start date of an evening course.",
"Write an email to your academic adviser. Ask whether you can change one of your classes.",
"Write an email to a company. You received the wrong product. Explain what happened and say what you want.",
"Write an email to a professor you do not know. Ask if you may join his research group as a volunteer.",
"Write an email to your neighbor. Politely ask her to keep the noise down at night.",
"Write an email to the university office. Ask how to get an official copy of your transcript.",
"Write an email to a friend abroad. Tell her about your plans for the summer and invite her to visit.",
"Write an email to the manager of a gym. Ask about membership options and student discounts.",
"Write an email to your professor. Ask for feedback on a draft essay and suggest a time to meet.",
"Write an email to a club organizer. Say you want to join and ask what the first meeting will be about.",
"Write an email to a hotel. Ask whether a room is available for two nights and ask about breakfast.",
"Write an email to your teacher. Thank him for the course and ask for advice on how to keep improving."
];
const TC_OPINION = [
"Universities should require every student to take a course in public speaking.",
"Students learn more from group projects than from working alone.",
"Cities should ban cars from their centers.",
"Homework should be reduced in secondary schools.",
"Online classes are as effective as classes on campus.",
"Students should be paid for doing well in school.",
"Learning a second language is more useful today than learning to write computer code.",
"Social media does more harm than good for young people.",
"Every student should do an internship before graduating.",
"Libraries are no longer necessary in the age of the internet.",
"Schools should start later in the morning.",
"Art and music classes are as important as math and science.",
"Governments should spend more money on public transportation than on roads.",
"Studying abroad is the best way to learn a language.",
"Students should be allowed to use artificial intelligence tools for homework.",
"Competition motivates students more than cooperation.",
"People learn more from failure than from success."
];
/* Ramp over the 34 writing days: free writing 1,1,2,2,3,3 ... 9 minutes in Writing I, 10 minutes from day 3 of Writing II. Copy: 60 s, then 90 s, then 120 s. */
function typingPlan(sec, n){
  const g = (sec==="writing2" ? 17 : 0) + n;
  const compMin = Math.min(10, 1 + Math.floor((g-1)/2));
  const copySecs = g<=8 ? 60 : g<=20 ? 90 : 120;
  const text = TC_TEXTS[(g-1 + (sec==="writing2" ? 8 : 0)) % TC_TEXTS.length];
  const prompt = sec==="writing2" ? "Write a post for the class discussion. Give your opinion, one reason and one example: \"" + TC_OPINION[n-1] + "\"" : TC_EMAIL[n-1];
  return {g, compMin, copySecs, text, prompt, goal:TC_GOAL};
}
function prefixErr(typed, target){
  const n = typed.length, m = target.length; let prev = new Array(m+1); for(let j=0;j<=m;j++) prev[j] = j;
  for(let i=1;i<=n;i++){ const cur = new Array(m+1); cur[0] = i; const ch = typed.charCodeAt(i-1);
    for(let j=1;j<=m;j++){ cur[j] = Math.min(prev[j]+1, cur[j-1]+1, prev[j-1] + (ch===target.charCodeAt(j-1) ? 0 : 1)); }
    prev = cur; }
  let best = Infinity; for(let j=0;j<=m;j++) if(prev[j]<best) best = prev[j]; return best;
}
function typingSeries(exclude){
  const out = []; for(const k in S.work){ const w = S.work[k]; if(!w || k===exclude) continue;
    if(w.kind==="W-TYPECHECK" && w.copy) out.push({at:w.at, c:w.copy.wpm, w:w.comp? w.comp.wpm : null, a:w.copy.acc, dev:w.dev||null});
    else if(w.kind==="W-TYPE" && w.wpm!=null && !w.migrated) out.push({at:w.at, c:w.wpm, w:null, a:w.acc, dev:null}); }   /* results of the older one-off typing test still count */
  return out.sort((a,b)=>String(a.at).localeCompare(String(b.at)));
}
R.typecheck = (b, ctx) => {
  const key = ctx.key;
  if(b.g===1 && !(S.work[key] && S.work[key].copy)){   /* credit the older Day 1 typing test as Part 1 so nobody repeats it */
    const lk = "writing-1-tool_typing_speed_check-1", lg = S.work[lk];
    if(lg && lg.wpm!=null){ S.work[key] = Object.assign({}, S.work[key], {kind:"W-TYPECHECK", copy:{wpm:lg.wpm, gross:lg.wpm, acc:lg.acc||0, secs:60, from:"earlier test"}, dev:null, at:lg.at||new Date().toISOString()}); S.work[lk] = Object.assign({}, lg, {migrated:true}); save(); }
  }
  const sv = S.work[key] || {};
  const coarse = !!(window.matchMedia && matchMedia("(pointer:coarse)").matches);
  const lock = ta=>{
    ["paste","drop"].forEach(ev=>ta.addEventListener(ev, e=>{ e.preventDefault(); toast("Pasting is off in this exercise."); }));
    ta.addEventListener("beforeinput", e=>{ if(/^insertFrom(Paste|Drop)/.test(e.inputType||"")) e.preventDefault(); });
    ["autocorrect","autocapitalize","autocomplete"].forEach(a=>ta.setAttribute(a,"off")); ta.setAttribute("spellcheck","false"); ta.setAttribute("data-gramm","false");
  };
  const norm = s=>String(s).replace(/\s+/g," ").trim();
  const done = h("div",{class:"result",role:"status"});
  const refreshDone = ()=>{ const w = S.work[key]||{}; done.innerHTML = ""; if(w.copy && w.comp) done.append(h("span",{class:"score-chip"},"Typing Check complete")); };
  /* phase 1: copy */
  const cTarget = h("div",{class:"doc",style:"max-width:72ch;user-select:none","aria-label":"Text to copy"}, b.text);
  const cTa = h("textarea",{class:"textarea tc-copy",style:"min-height:130px",placeholder:"Press Start, then type the text above exactly as it is written.",disabled:true,"aria-label":"Type the text here"}); lock(cTa);
  const cTimer = h("span",{class:"timer"}, fmt(b.copySecs)); const cOut = h("div",{class:"result tc-copy-out",role:"status"});
  const cStart = h("button",{class:"btn red tc-copy-start",type:"button"}, sv.copy? "Try again" : "Start copying");
  let cCd = null, cRun = false, wStart = null;
  const showCopy = (r, prev)=>{
    const gap = b.goal - r.wpm; const parts = ['<span class="score-chip">'+r.wpm+' words/min</span> <span>'+r.acc+'% accurate. </span>'];
    parts.push('<span>'+(r.wpm>=b.goal ? 'You reached the goal of '+b.goal+'+ words per minute. There is no upper limit, so keep pushing.' : 'Goal: '+b.goal+'+ words per minute. You are '+gap+' away.')+'</span>');
    if(prev) parts.push(' <span class="muted">Your last check: '+prev.c+' words/min'+(r.wpm>prev.c? ' (+'+(r.wpm-prev.c)+')' : r.wpm<prev.c? ' ('+(r.wpm-prev.c)+')' : ' (same)')+'.</span>');
    if(r.acc<90) parts.push(' <span>Accuracy is under 90%. Slow down a little: corrections cost more time than they save.</span>');
    cOut.innerHTML = parts.join("");
  };
  const finishCopy = ()=>{
    if(!cRun) return; cRun = false; const left = cCd.left(); cCd.stop(); cTa.disabled = true; cStart.disabled = false; cStart.textContent = "Try again";
    const elapsed = Math.max(10, b.copySecs - left); const typed = norm(cTa.value); const err = prefixErr(typed, b.text); const good = Math.max(0, typed.length - err);
    const r = {wpm:Math.round(good/5/(elapsed/60)), gross:Math.round(typed.length/5/(elapsed/60)), acc: typed.length? Math.round(100*good/typed.length) : 0, secs:Math.round(elapsed)};
    const prev = typingSeries(key).slice(-1)[0] || null;
    S.work[key] = Object.assign({}, S.work[key], {kind:"W-TYPECHECK", copy:r, dev: coarse? "touch":"kbd", at:new Date().toISOString()}); save();
    showCopy(r, prev); wStart.disabled = false; refreshDone();
  };
  cStart.addEventListener("click", ()=>{ cTa.disabled = false; cTa.value = ""; cOut.innerHTML = ""; cTa.focus(); cStart.disabled = true; cRun = true; cCd = countdown(cTimer, b.copySecs, finishCopy, 10); });
  cTa.addEventListener("input", ()=>{ if(cRun && norm(cTa.value).length >= norm(b.text).length) finishCopy(); });
  /* phase 2: free writing */
  const wPrompt = h("div",{class:"doc",style:"max-width:72ch"}, b.prompt);
  const wTa = h("textarea",{class:"textarea tc-write",style:"min-height:200px",placeholder:"Press Start, then keep writing until the time is over. Do not stop to fix small mistakes.",disabled:true,"aria-label":"Write your own text here"}); lock(wTa);
  const wTimer = h("span",{class:"timer"}, fmt(b.compMin*60)); const wOut = h("div",{class:"result tc-write-out",role:"status"});
  wStart = h("button",{class:"btn red tc-write-start",type:"button"}, sv.comp? "Try again" : "Start writing ("+b.compMin+" min)"); wStart.disabled = !sv.copy;
  let wCd = null, wRun = false;
  const showComp = r=>{ wOut.innerHTML = '<span class="score-chip">'+r.words+' words</span> <span>'+r.wpm+' words per minute while composing. Keep the flow steady; you can fix details later in your homework.</span>'; };
  const finishComp = ()=>{
    if(!wRun) return; wRun = false; const left = wCd.left(); wCd.stop(); wTa.disabled = true; wStart.disabled = false; wStart.textContent = "Try again";
    const elapsed = Math.max(10, b.compMin*60 - left); const nw = words(wTa.value); const r = {words:nw, wpm:Math.round(nw/(elapsed/60)), mins:b.compMin, secs:Math.round(elapsed), text:wTa.value.slice(0,4000)};
    S.work[key] = Object.assign({}, S.work[key], {kind:"W-TYPECHECK", comp:r, at:new Date().toISOString()}); save(); showComp(r); refreshDone();
  };
  wStart.addEventListener("click", ()=>{ wTa.disabled = false; wTa.value = ""; wOut.innerHTML = ""; wTa.focus(); wStart.disabled = true; wRun = true; wCd = countdown(wTimer, b.compMin*60, finishComp, 30); });
  if(sv.copy) showCopy(sv.copy, null); if(sv.comp) showComp(sv.comp); refreshDone();
  return h("div",{class:"stack tc"},
    h("p",null,"Every Writing day starts with a short typing check. Part 1 measures your copying speed. Part 2 trains you to keep writing your own ideas for "+b.compMin+" minute"+(b.compMin===1?"":"s")+", and the time grows as the course goes on. The goal is "+b.goal+"+ words per minute when you copy. There is no upper limit, so go as far as you can. You must finish both parts to complete the day; reaching the goal is not required."),
    b.g===1? h("p",{class:"small muted"},"This first check sets your starting point. Nobody expects a high number today.") : null,
    coarse? h("p",{class:"small muted"},"You seem to be on a phone or tablet. The real test uses a computer keyboard, so your results will be more useful on a computer.") : null,
    h("div",{class:"stack"}, h("b",null,"Part 1 · Copy the text ("+fmt(b.copySecs)+")"), cTarget, h("div",{class:"row"}, cStart, cTimer), cTa, cOut),
    h("div",{class:"stack"}, h("b",null,"Part 2 · Write your own text ("+b.compMin+" min)"), wPrompt, h("div",{class:"row"}, wStart, wTimer), wTa, wOut),
    done);
};
REQ_LABEL.typecheck = "finish both parts of the Typing Check";
["writing","writing2"].forEach(sec=>{
  BS.sections[sec].days.forEach(d=>{
    let legacyAt = -1; const kept = [];
    d.stages.forEach((st,i)=>{
      const bl = st.blocks || [];
      if(bl.some(b=>b.t==="typing")){
        if(bl.every(b=>b.t==="typing")){ if(legacyAt<0) legacyAt = kept.length; return; }
        st.sid = st.sid || ((st.kind||"x")+"."+(st.title||"")); st.title = "Timed post"; st.blocks = bl.filter(b=>b.t!=="typing");
      }
      kept.push(st);
    });
    d.stages = kept;
    let at = kept.findIndex(s=>s.kind==="habit");
    if(at>0 && kept[at-1].kind==="reflect") at--;
    if(at<0) at = legacyAt>=0 ? legacyAt : kept.length;
    const p = typingPlan(sec, d.n);
    d.stages.splice(at, 0, {kind:"tool", title:"Typing Check", sid:"typing_check", mins:Math.ceil(p.copySecs/60)+p.compMin+1, blocks:[Object.assign({t:"typecheck"}, p)]});
  });
});
/*TYPECHECK_PATCH_END*/
