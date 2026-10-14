/* BandSix Test Simulator · Test 8 · Writing module Mock 1. Original content. */
(window.BS_TESTS = window.BS_TESTS || {})[8] = {
n:8, title:"Writing module · Mock test 1",

reading:{
m1:[
 {t:"cw", text:"The narwhal is a small whale that lives in the icy waters of the Arctic. Males have a long spiral tusk that can grow to nearly three meters. For centuries, traders sold these tusks in distant markets as the horns of unicorns, and they were worth more than their weight in gold. Scientists now know that the tusk is actually a tooth, and it contains millions of nerve endings that may help the whale sense changes in the water."},
 {t:"dl", doc:{kind:"notice", title:"Scheduled Power Outage", body:"<p>Electricity in <b>Buildings A and B</b> will be turned off on <b>Saturday from 8:00 a.m. to 2:00 p.m.</b> while electricians install new equipment.</p><p>Residents should unplug computers and televisions before 8:00. Elevators will not work during this time.</p>"}, qs:[
  {q:"Why will the electricity be turned off?", o:["New equipment is being installed.","The building is saving energy.","There was a storm.","The elevators are being replaced."], why:"It will be off “while electricians install new equipment.”"},
  {q:"What are residents asked to do?", o:["Disconnect some electronic devices","Leave the building before 8:00","Use the stairs to reach the roof","Call the electricians"], why:"“Residents should unplug computers and televisions before 8:00.”"}
 ]},
 {t:"dl", doc:{kind:"email", from:"City Transit Office", to:"Renata Vaca", subject:"Your student bus card", body:"<p>Dear Renata,</p><p>Your student bus card will expire on <b>March 31</b>. To renew it, please upload a photo of your current enrollment certificate through our website before March 25. Your new card will be ready to collect at the downtown office about five working days later.</p><p>If you do not renew in time, you will pay the full adult fare until your new card is issued.</p><p>City Transit Office</p>"}, qs:[
  {q:"What is the main purpose of the email?", o:["To remind a student to renew her bus card","To inform a student that her card was stolen","To announce a change in bus routes","To ask a student to pay a fine"], why:"The card “will expire,” and the email explains how to renew it."},
  {q:"What does Renata need to provide?", o:["Proof that she is currently a student","A new photo of herself","A letter from her parents","Her old bus card"], why:"She must upload “a photo of your current enrollment certificate.”"},
  {q:"What will happen if Renata renews her card late?", o:["She will pay a higher fare for a while.","She will not be able to renew it.","She will have to take a test.","She will receive her card by mail."], why:"She “will pay the full adult fare until your new card is issued.”"}
 ]},
 {t:"ap", doc:{kind:"passage", title:"Forests in the Clouds", body:"<p>On the slopes of tropical mountains, usually between 1,500 and 3,000 meters above sea level, there is a special kind of forest that is covered in mist for much of the year. These cloud forests, found in places such as the Bolivian Yungas, Costa Rica and parts of Southeast Asia, are among the most biologically rich environments on Earth.</p><p>Cloud forests receive water in an unusual way. In addition to rain, they capture moisture directly from the clouds. As fog moves through the trees, tiny droplets collect on leaves, mosses and other plants that grow on branches, then drip to the ground. In some cloud forests, this “fog drip” provides as much water as rainfall itself. Because of this, these forests act like giant sponges, releasing water slowly into rivers that supply towns and farms far below.</p><p>Cloud forests are also fragile. Many of their species live only within a narrow range of altitude and temperature. As the climate warms, the level at which clouds form is expected to rise, and in some regions it already has. If the clouds move higher, the forests below them may become drier, and species that cannot move uphill may disappear. Protecting cloud forests therefore matters not only for wildlife but also for the water supply of the people who live downstream.</p>"}, qs:[
  {q:"What is the passage mainly about?", o:["The features of cloud forests and the threats they face","How mountains are formed in the tropics","Why rain falls more often at high altitude","How farmers use river water"], why:"The passage describes cloud forests, how they collect water and why they are vulnerable."},
  {q:"According to the passage, how do cloud forests get water besides rain?", o:["They collect moisture from fog on plants.","They take water from underground rivers.","They store snow from winter.","They receive water from nearby lakes."], why:"“As fog moves through the trees, tiny droplets collect on leaves … then drip to the ground.”"},
  {q:"Why does the author compare cloud forests to “giant sponges”?", o:["They absorb water and release it slowly.","They are soft to walk on.","They grow very quickly.","They are full of small holes."], why:"They release “water slowly into rivers that supply towns and farms.”"},
  {q:"The word “fragile” in the passage is closest in meaning to", o:["easily damaged","very old","widely spread","well protected"], why:"The forests can be easily damaged by small changes in climate."},
  {q:"What can be inferred about people living below cloud forests?", o:["Their water supply could be affected if the forests dry out.","They are moving uphill as the climate warms.","They depend on fog for drinking water.","They have caused the clouds to rise."], why:"Protecting the forests matters “for the water supply of the people who live downstream.”"}
 ]}
],
up:[
 {t:"cw", text:"Seagrasses are often confused with seaweed, but they are actually flowering plants that returned to the sea millions of years ago. They form vast underwater meadows in shallow coastal waters around the world. These meadows provide shelter for young fish and food for turtles and manatees. They also store enormous amounts of carbon in the mud beneath them, sometimes faster than tropical rainforests, which makes their loss particularly worrying for scientists studying climate change."},
 {t:"dl", doc:{kind:"schedule", title:"Vertical Climbing Gym · Classes", body:"<table><thead><tr><th>Class</th><th>Days</th><th>Time</th><th>Requirements</th></tr></thead><tbody><tr><td>Intro to climbing</td><td>Tue &amp; Thu</td><td>6:00–7:30 p.m.</td><td>None · shoes provided</td></tr><tr><td>Rope skills</td><td>Saturday</td><td>10:00 a.m.–1:00 p.m.</td><td>Intro course completed</td></tr><tr><td>Kids’ club (8–12)</td><td>Saturday</td><td>3:00–4:30 p.m.</td><td>Parent signs form on first visit</td></tr></tbody></table><p>Free trial: one Intro class per person. Equipment rental for open climbing: Bs 25.</p>"}, qs:[
  {q:"Who can join the rope skills class?", o:["People who have already taken the intro course","Children between 8 and 12","Anyone who rents equipment","Only people with their own shoes"], why:"Rope skills requires the “Intro course completed.”"},
  {q:"What must happen before a ten-year-old joins the kids’ club?", o:["A parent must sign a form.","The child must complete the intro course.","The child must buy climbing shoes.","The parent must take a free trial class."], why:"“Parent signs form on first visit.”"}
 ]},
 {t:"dl", doc:{kind:"post", author:"Sabores del Valle", meta:"Event · Posted Thursday", body:"<p>Join us next Saturday for an olive oil tasting with producers from the Tarija valleys! You’ll compare four oils and learn how harvest time changes their flavor: early harvests are greener and more peppery, while late harvests taste softer and fruitier.</p><p>Tickets include bread, local cheese and a small bottle to take home. Because the event is held in our garden, it will move to the following Saturday if it rains.</p>"}, qs:[
  {q:"What will participants learn at the event?", o:["How the timing of the harvest affects taste","How to grow olive trees in dry valleys","How to cook traditional dishes with olive oil","How olive oil is pressed and bottled"], why:"They will “learn how harvest time changes their flavor.”"},
  {q:"According to the post, what is true of oil from an early harvest?", o:["It has a stronger, spicier taste.","It is softer and fruitier.","It is cheaper than other oils.","It is only sold in Tarija."], why:"“Early harvests are greener and more peppery.”"},
  {q:"What will happen if it rains on the day of the event?", o:["It will take place a week later.","It will be canceled.","It will move indoors.","Tickets will be refunded."], why:"It “will move to the following Saturday if it rains.”"}
 ]},
 {t:"ap", doc:{kind:"passage", title:"The Silent Flight of Owls", body:"<p>Most birds make a noticeable sound when they fly. Pigeons clap their wings, and even small songbirds produce a soft whoosh. Owls, by contrast, can fly almost silently, which allows them to approach prey without being heard and to listen for the movements of mice under leaves or snow while they are still in the air.</p><p>Researchers have identified three features of owl feathers that reduce noise. First, the leading edge of the main flight feathers has a row of stiff, comb-like structures that break up the air flowing over the wing into smaller currents. Second, the rear edge of the feathers ends in a soft fringe, which allows air to mix gradually instead of creating sudden turbulence. Finally, the upper surface of the feathers is covered with a velvety layer that absorbs sound produced when feathers rub against each other.</p><p>These discoveries have attracted the interest of engineers. Wind turbines, computer fans and aircraft all produce noise as air moves across their blades or wings. Experiments with fan blades that imitate the comb-like edge of owl feathers have reduced noise significantly without lowering efficiency. Engineers caution, however, that owls fly slowly, and designs that work well at low speeds may not succeed in fast-moving machines such as passenger jets.</p>"}, qs:[
  {q:"What is the main purpose of the passage?", o:["To explain how owls fly quietly and how this inspires engineers","To compare owls with other birds of prey","To describe how owls find mice under snow","To argue that wind turbines should be replaced"], why:"The passage explains three feather features and their use in engineering."},
  {q:"Why does the author mention pigeons and songbirds?", o:["To contrast their noisy flight with the flight of owls","To show what owls usually eat","To explain how feathers developed","To describe birds that also fly silently"], why:"They make noise when they fly; “owls, by contrast, can fly almost silently.”"},
  {q:"According to the passage, what is the function of the soft fringe on the rear edge of the feathers?", o:["It lets air mix smoothly and avoids sudden turbulence.","It helps the owl fly faster.","It keeps the feathers dry in snow.","It makes the feathers stronger."], why:"It “allows air to mix gradually instead of creating sudden turbulence.”"},
  {q:"The word “imitate” in the passage is closest in meaning to", o:["copy","replace","improve","measure"], why:"The fan blades copy the comb-like edge of owl feathers."},
  {q:"What can be inferred about the engineers’ caution?", o:["Owl-inspired designs may not be useful for every machine.","The fan experiments were unsuccessful.","Owls fly faster than passenger jets.","Engineers do not believe the research on owls."], why:"Designs that work “at low speeds may not succeed in fast-moving machines.”"}
 ]}
],
down:[
 {t:"cw", text:"The baobab is a large tree that grows in dry parts of Africa and Madagascar. Its trunk is very wide and can store thousands of liters of water. This helps the tree survive the long dry season. Some baobabs are more than one thousand years old. People use almost every part of the tree: the fruit is food, the leaves are medicine, and the bark can be made into rope."},
 {t:"dl", doc:{kind:"notice", title:"Can Collection Drive", body:"<p>Our class is collecting <b>empty metal cans</b> until Friday. Please wash them and bring them to Room 12.</p><p>We will sell the cans to a recycling company and use the money to buy books for the school library.</p>"}, qs:[
  {q:"What should students bring?", o:["Clean metal cans","Old books","Plastic bottles","Money"], why:"They should bring “empty metal cans” and wash them."},
  {q:"What will the class do with the money?", o:["Buy books for the library","Have a class party","Buy new desks","Give it to a company"], why:"They will “use the money to buy books for the school library.”"}
 ]},
 {t:"dl", doc:{kind:"email", from:"Ms. Céspedes", to:"Parents of Class 5B", subject:"End-of-year party", body:"<p>Dear parents,</p><p>Our end-of-year party will be on <b>Friday, December 6</b>, not December 13 as planned, because the school hall is being used for exams that week.</p><p>The party starts at 3:00 p.m. Each child can bring one snack to share. Please do not send drinks; the school will provide them.</p><p>Best wishes,<br>Ms. Céspedes</p>"}, qs:[
  {q:"Why has the date of the party changed?", o:["The hall is needed for exams.","The teacher is on vacation.","The weather will be bad.","Parents asked for a new date."], why:"The hall “is being used for exams that week.”"},
  {q:"What should children bring?", o:["A snack to share","A drink","A gift","Money for food"], why:"“Each child can bring one snack to share.”"},
  {q:"What does the school provide?", o:["Drinks","Snacks","Music","Decorations"], why:"“The school will provide” the drinks."}
 ]},
 {t:"ap", doc:{kind:"passage", title:"An Idea from a Walk", body:"<p>In 1941, a Swiss engineer named George de Mestral went for a walk in the mountains with his dog. When they came home, both of them were covered with small seeds called burrs that stuck to his pants and to the dog’s fur.</p><p>De Mestral was curious. He looked at the burrs under a microscope and saw hundreds of tiny hooks. These hooks caught on anything with loops, like cloth or hair. He decided to make a fastener that worked the same way: one side with hooks and the other side with loops.</p><p>It took him about ten years to find the right materials. He finally used nylon. He called his invention Velcro. Today, it is used on shoes, bags and even space suits.</p>"}, qs:[
  {q:"What is the passage mainly about?", o:["How an invention was inspired by nature","How dogs help people in the mountains","Why seeds stick to clothes","The history of space suits"], why:"The passage describes how burrs gave de Mestral the idea for Velcro."},
  {q:"What did de Mestral see under the microscope?", o:["Many tiny hooks","Small loops","Dog hair","Nylon threads"], why:"He “saw hundreds of tiny hooks.”"},
  {q:"The word “curious” in the passage is closest in meaning to", o:["wanting to know more","angry","tired","afraid"], why:"He wanted to know why the burrs stuck, so he looked at them."},
  {q:"Why did it take ten years to make Velcro?", o:["He needed to find the right materials.","He had no money.","The microscope was broken.","He was working in the mountains."], why:"“It took him about ten years to find the right materials.”"},
  {q:"According to the passage, where is Velcro used today?", o:["On shoes, bags and space suits","Only on clothes","Only on dog collars","In mountain tools"], why:"“It is used on shoes, bags and even space suits.”"}
 ]}
]
},

listening:{
m1:[
 {t:"cr", line:"W: Do you know what time the gym closes tonight?", o:["At ten, I think.","I go there every day.","It’s next to the pool.","Tonight is Friday."], why:"An indirect question about time needs a time."},
 {t:"cr", line:"M: Why don’t you ask the professor for an extension?", o:["I already did, but she said no.","Because the deadline is Monday.","The professor is very tall.","I extended my vacation."], why:"He suggests an action. Saying you already tried it responds directly."},
 {t:"cr", line:"W: Who’s organizing the trip to the salt flats?", o:["Professor Vargas and two students.","Next month, I think.","It costs a lot.","By bus."], why:"“Who” asks for people."},
 {t:"cr", line:"M: My laptop battery died in the middle of the exam.", o:["Did the professor give you extra time?","The exam was easy.","I bought a new battery.","My laptop is old."], why:"He describes a problem. Asking about its consequence shows understanding."},
 {t:"cr", line:"W: Haven’t you started packing for your trip yet?", o:["Not yet. I’ll do it tonight.","Yes, I haven’t.","The trip is long.","I packed my lunch."], why:"She is surprised. Saying when you will do it answers her."},
 {t:"cr", line:"M: Could you lend me your calculator for the quiz?", o:["Sure, but I need it back after class.","I calculated it twice.","The quiz is on Thursday.","I lent it to her."], why:"A request. Agreeing with a condition fits."},
 {t:"cr", line:"W: How did you like the new Thai restaurant?", o:["Great food, but noisy.","I went there by taxi.","It opened last week.","On Saturday night."], why:"“How did you like…?” asks for an opinion."},
 {t:"cr", line:"M: I think I left my umbrella on the bus.", o:["You could call the bus company.","It’s raining hard.","I left early too.","The bus was full."], why:"He has lost something. Suggesting who to contact helps."},
 {t:"conv", setting:"Listen to a conversation between a student and a soccer coach.", lines:[
  "M: Coach, I wanted to tell you that I’ll miss training on Tuesdays for the next month. I’ve been given a lab class at the same time.",
  "W: I see. Is there any way to change the lab section?",
  "M: I tried, but all the other sections are full.",
  "W: OK. Classes come first. But if you miss four Tuesdays, it’ll be hard to keep your place in the starting team.",
  "M: I understand. Could I train with the second team on Thursday evenings instead?",
  "W: That works. Just make sure you tell their coach, and I’ll see how you’re doing before the tournament."], qs:[
  {q:"Why will the man miss training?", o:["He has a lab class at the same time.","He is injured.","He is changing teams.","He has to work on Tuesdays."], why:"“I’ve been given a lab class at the same time.”"},
  {q:"What does the coach agree to?", o:["Letting the man train with another team on Thursdays","Moving training to a different day","Keeping the man in the starting team","Talking to the lab instructor"], why:"He asks to train with the second team on Thursdays, and she says, “That works.”"}
 ]},
 {t:"conv", setting:"Listen to a conversation between two friends.", lines:[
  "W: I’m trying to decide between two apartments. One is near campus but tiny. The other is bigger and cheaper, but it’s forty minutes away by bus.",
  "M: How often would you go to campus?",
  "W: Every day, sometimes twice, because I work at the library in the evenings.",
  "M: Then the bus would be eighty minutes a day, maybe more. That’s a lot of time.",
  "W: True. I could study on the bus, but it’s usually too crowded.",
  "M: I’d choose the small one. You’ll be out most of the day anyway."], qs:[
  {q:"Why does the woman go to campus so often?", o:["She has classes and a job there.","She lives with friends on campus.","She takes the bus for fun.","She studies at the library every morning."], why:"She goes every day and also works at the library in the evenings."},
  {q:"What does the man recommend?", o:["Taking the apartment near campus","Taking the cheaper apartment","Looking for a third option","Buying a car"], why:"“I’d choose the small one,” since she will be out most of the day."}
 ]},
 {t:"ann", setting:"Listen to an announcement in a university residence.", lines:[
  "W: Good evening, residents. Tomorrow morning, between seven and nine, the water will be turned off in the east wing while pipes are repaired. Showers in the west wing will remain available, so please plan to use those. We also remind you that the laundry room will open late, at ten, because the machines are connected to the same pipes."], qs:[
  {q:"What is the main purpose of the announcement?", o:["To inform residents about a temporary water cut","To announce new laundry prices","To ask residents to save water","To explain a change in the cleaning schedule"], why:"The water “will be turned off in the east wing” for repairs."},
  {q:"Why will the laundry room open late?", o:["Its machines use the pipes being repaired.","The staff will arrive late.","New machines are being installed.","It is being cleaned."], why:"“The machines are connected to the same pipes.”"}
 ]},
 {t:"talk", setting:"Listen to part of a talk in a biology class.", lines:[
  "M: You’ve all had goosebumps: when you’re cold, or when you hear a piece of music that moves you, tiny bumps appear on your skin and the hairs stand up. But why do we have this reaction?",
  "M: Each hair on your body has a tiny muscle attached to it. When it contracts, the hair stands up and the skin around it forms a bump. In animals with thick fur, this is very useful. A cat that raises its fur traps a layer of air that keeps it warm. And when a cat is frightened, raised fur makes it look bigger to an enemy.",
  "M: In humans, who have very little body hair, the reaction doesn’t do much anymore. It’s what we call a leftover from our ancestors. Interestingly, though, recent research in mice suggests the same muscles may help hair follicles grow, so the story may be a bit more complicated than we thought."], qs:[
  {q:"What is the talk mainly about?", o:["Why humans and animals get goosebumps","How cats keep warm in winter","Why music makes people emotional","How hair grows on the human body"], why:"The professor explains how goosebumps work and why they exist."},
  {q:"What causes the hair to stand up?", o:["A tiny muscle attached to it contracts.","Cold air enters the skin.","The skin becomes thicker.","Blood moves away from the skin."], why:"Each hair has “a tiny muscle attached to it. When it contracts, the hair stands up.”"},
  {q:"Why does the professor mention a frightened cat?", o:["To show another purpose of raised fur","To explain why cats are afraid of the cold","To compare cats and mice","To describe how cats hunt"], why:"Raised fur “makes it look bigger to an enemy.”"},
  {q:"What does the professor suggest about goosebumps in humans at the end?", o:["They may have a function that is not fully understood.","They are completely useless.","They help humans stay warm.","They only happen when people are afraid."], why:"Research in mice suggests the muscles “may help hair follicles grow, so the story may be a bit more complicated.”"}
 ]}
],
up:[
 {t:"cr", line:"M: I wouldn’t mind a little more time to finish this.", o:["Take until tomorrow if you need it.","I mind the time.","It’s a little late.","I finished it already."], why:"He indirectly asks for more time. Giving him more time responds."},
 {t:"cr", line:"W: You’re not still upset about the game, are you?", o:["A little. We should have won.","The game was on Sunday.","I’m not upset with you.","I’m still playing."], why:"She checks his feelings. Admitting it and saying why fits."},
 {t:"cr", line:"M: Didn’t the landlord say he’d fix the window last week?", o:["He did, but he hasn’t shown up yet.","The window is broken.","He said it was cold.","Last week was busy."], why:"He checks a promise. Explaining it hasn’t happened answers him."},
 {t:"cr", line:"W: I could have sworn the meeting was at three.", o:["They moved it to two this morning.","I swore it was true.","Three people came.","It was a long meeting."], why:"She is confused about the time. Explaining the change answers her."},
 {t:"cr", line:"M: Any idea when the new schedule will be posted?", o:["Sometime next week, I heard.","I have a lot of ideas.","The schedule is long.","It was posted by mail."], why:"He asks about timing, so a time answers."},
 {t:"cr", line:"W: That’s the third time this month the elevator has broken.", o:["Maybe we should complain to the manager.","It’s on the third floor.","I took the stairs today.","This month is almost over."], why:"She is frustrated. Suggesting action responds to the problem."},
 {t:"cr", line:"M: I’m thinking about taking a year off before graduate school.", o:["What would you do during that year?","I took it off the shelf.","Graduate school is expensive.","I’m thinking about it too."], why:"He shares a plan. Asking about it continues the conversation."},
 {t:"cr", line:"W: Don’t you think the music is a bit loud?", o:["Now that you mention it, it is.","I don’t think so, no thanks.","The music is from Brazil.","I can’t hear you."], why:"She asks for agreement. Agreeing after noticing it fits."},
 {t:"conv", setting:"Listen to a conversation between a student and a librarian.", lines:[
  "W: Hi. I’m writing about Bolivian newspapers from the 1920s, and my professor said the library has original copies.",
  "M: It does, in the special collections room. Those papers are very fragile, so you can’t borrow them, and you’ll need to wear cotton gloves when you handle them.",
  "W: Can I take photos?",
  "M: Yes, but without flash. Actually, many of them have already been scanned. You might want to check our digital archive first. You can search the scans from home, and they’re much easier to read.",
  "W: That would save me a lot of time. And if something isn’t scanned?",
  "M: Then make an appointment. The room is only open on weekday mornings."], qs:[
  {q:"Why can’t the student borrow the newspapers?", o:["They are old and easily damaged.","They belong to her professor.","They are being scanned right now.","They are kept in another library."], why:"“Those papers are very fragile, so you can’t borrow them.”"},
  {q:"Why does the librarian mention the digital archive?", o:["It may let the student avoid visiting the room.","It contains newspapers from other countries.","It is the only way to see the papers.","It allows students to print copies for free."], why:"Many papers are scanned, can be searched “from home” and are easier to read."}
 ]},
 {t:"ann", setting:"Listen to an announcement at a student meeting.", lines:[
  "M: Quick update on graduation. Because of the number of graduates this year, the ceremony will be held in two parts: one at ten for the faculties of science and engineering, and one at three for everyone else. Each graduate can now invite four guests instead of six. Tickets for guests must be requested online by May first; after that date, any remaining seats will be offered to students who want extra tickets."], qs:[
  {q:"Why is the ceremony being divided into two parts?", o:["There are too many graduates for one ceremony.","The hall is being repaired.","Different faculties requested it.","Guests complained about the time."], why:"It is held in two parts “because of the number of graduates this year.”"},
  {q:"How might a student get more than four guest tickets?", o:["By asking for remaining seats after May first","By attending both ceremonies","By requesting tickets before May first","By joining the science faculty"], why:"After May first, “remaining seats will be offered to students who want extra tickets.”"}
 ]},
 {t:"talk", setting:"Listen to part of a talk in a linguistics class.", lines:[
  "W: English spelling is famous for being difficult. Why do we write k-n-i-g-h-t for a word that sounds like “nite”? The surprising answer is that the spelling once matched the pronunciation. In the time of Chaucer, around 1400, people actually pronounced the k and made a sound in the middle of the word, a bit like the end of the German word ‘Bach’.",
  "W: Then two things happened at roughly the same time. First, the printing press arrived in England in 1476, and printers began to fix spellings in place. Second, over the next two centuries, English pronunciation changed dramatically. The long vowels shifted, and some consonants, like the k in knight, stopped being pronounced.",
  "W: So spelling froze while speech kept moving. The result is a writing system that often records how English sounded five hundred years ago. Some silent letters have a different origin, though. The b in debt was added by scholars who wanted the word to look more like its Latin source, debitum, even though no one had ever pronounced it in English."], qs:[
  {q:"What is the talk mainly about?", o:["Historical reasons for irregular English spelling","How Chaucer wrote his poetry","Why English borrowed words from German","How to teach spelling to children"], why:"The professor explains how printing and sound changes created spellings that no longer match speech."},
  {q:"According to the professor, what effect did the printing press have?", o:["It helped fix spellings in place.","It changed the pronunciation of vowels.","It introduced Latin words into English.","It made spelling more phonetic."], why:"“Printers began to fix spellings in place.”"},
  {q:"What does the professor mean by “spelling froze while speech kept moving”?", o:["Spelling stopped changing while pronunciation continued to change.","People stopped speaking English for a time.","Printers changed pronunciation on purpose.","Words became shorter over time."], why:"Spellings were fixed by printing, but pronunciation kept changing for two centuries."},
  {q:"Why does the professor mention the word debt?", o:["To give an example of a silent letter with a different origin","To show how Chaucer pronounced words","To explain the effect of the vowel shift","To show a word borrowed from German"], why:"Its b “was added by scholars,” unlike the k in knight, which was once pronounced."}
 ]}
],
down:[
 {t:"cr", line:"W: Is the library open on Sunday?", o:["No, only Monday to Saturday.","It has many books.","I read on Sunday.","It’s near the bank."], why:"A yes/no question about Sunday. “No” plus the days answers it."},
 {t:"cr", line:"M: What are you doing this weekend?", o:["I’m visiting my grandmother.","It was a good weekend.","On Saturday.","I did it last week."], why:"He asks about plans."},
 {t:"cr", line:"W: Can you turn on the light?", o:["Sure. Where is the switch?","It’s very light.","I turned left.","The light is new."], why:"A request. Agreeing and asking a practical question fits."},
 {t:"cr", line:"M: How much does this shirt cost?", o:["Fifteen dollars.","It’s cotton.","It’s blue.","Size medium."], why:"“How much” asks for a price."},
 {t:"cr", line:"W: Where did you go on vacation?", o:["To the beach in Peru.","For two weeks.","Last summer.","By plane."], why:"“Where” asks for a place."},
 {t:"cr", line:"M: Do you want to watch a movie tonight?", o:["Sure. What do you want to see?","I watched TV.","The movie was long.","Tonight is cold."], why:"An invitation. Accepting and asking a question fits."},
 {t:"cr", line:"W: Why is the store closed?", o:["It’s a holiday today.","It opens at nine.","On Main Street.","I bought some milk."], why:"“Why” asks for a reason."},
 {t:"cr", line:"M: I’m sorry, I broke your cup.", o:["Don’t worry. It was old.","I like cups.","It’s a blue cup.","I broke my arm."], why:"An apology. Accepting it kindly fits."},
 {t:"conv", setting:"Listen to a conversation at a library desk.", lines:[
  "M: Hi. I’d like to keep this book for another week. Is that possible?",
  "W: Let me check. Yes, nobody has asked for it, so I can renew it until the twentieth.",
  "M: Great. Do I have to pay anything?",
  "W: No, renewing is free. But if you return it late, it’s one boliviano per day."], qs:[
  {q:"What does the man want to do?", o:["Keep a book longer","Buy a book","Return a book","Find a new book"], why:"He wants “to keep this book for another week.”"},
  {q:"How much does it cost to renew the book?", o:["Nothing","One boliviano","One boliviano per day","Ten bolivianos"], why:"“Renewing is free.”"}
 ]},
 {t:"ann", setting:"Listen to an announcement at a concert hall.", lines:[
  "M: Good evening, ladies and gentlemen. Tonight’s concert will begin in ten minutes. Please turn off your phones. Taking photos is not allowed during the show. There will be a twenty-minute break after the first part."], qs:[
  {q:"When will the concert begin?", o:["In ten minutes","In twenty minutes","After the break","In one hour"], why:"It “will begin in ten minutes.”"},
  {q:"What is not allowed during the show?", o:["Taking photos","Drinking water","Leaving early","Clapping"], why:"“Taking photos is not allowed during the show.”"}
 ]},
 {t:"talk", setting:"Listen to part of a talk in a science class.", lines:[
  "W: Look at the tips of your fingers. You can see small lines in the skin. These are fingerprints, and every person has a different pattern, even identical twins.",
  "W: Why do we have them? For many years, people thought fingerprints helped us hold things. But experiments showed that they don’t help much with smooth objects. Now scientists think they help in two other ways. First, they help our fingers feel very small details, like the texture of cloth. Second, they may help water run off our fingers, so we can hold wet things better."], qs:[
  {q:"What is the talk mainly about?", o:["Why humans have fingerprints","How police use fingerprints","How twins are different","How to clean your hands"], why:"The speaker explains possible reasons we have fingerprints."},
  {q:"What does the speaker say about identical twins?", o:["They have different fingerprints.","They have the same fingerprints.","They have no fingerprints.","They feel textures better."], why:"Every person has a different pattern, “even identical twins.”"},
  {q:"What did experiments show about the old idea?", o:["Fingerprints do not help much with smooth objects.","Fingerprints help people hold everything.","Fingerprints change every year.","Fingerprints make fingers stronger."], why:"Experiments showed “they don’t help much with smooth objects.”"},
  {q:"According to the speaker, how might fingerprints help us?", o:["By helping us feel small details","By keeping our hands warm","By making our skin harder","By helping us write"], why:"“They help our fingers feel very small details, like the texture of cloth.”"}
 ]}
]
},

writing:{
 bas:[
  {ctx:"Why do you look so tired?", parts:["=I","stayed","up","late","finishing","my","=project."]},
  {ctx:"Did you enjoy the hike?", parts:["=It","was","harder","than","I","had","=expected."]},
  {ctx:"What did the interviewer ask?", parts:["=She","wanted","to know","what","I","had","=studied."], why:"Reported question: <i>what I had studied</i>, not <i>what had I studied</i>."},
  {ctx:"Can we meet on Thursday instead?", parts:["=Thursday","is","fine","if","we","meet","=after four."]},
  {ctx:"Where did you find that old map?", parts:["=It","was","hidden","in","a box","in my","=grandfather’s house."]},
  {ctx:"Is your new roommate nice?", parts:["=She’s","the","friendliest","person","I","have","=ever lived with."]},
  {ctx:"How do I get to the train station?", parts:["=Could","you","tell","me","which","bus","=goes there?"], why:"In an indirect question, <i>which bus goes there</i> keeps statement order."},
  {ctx:"Why was the flight delayed?", parts:["=The","plane","had","to","be","checked","=by engineers."], why:"Passive infinitive: <i>had to be checked</i>."},
  {ctx:"Have you finished reading the novel?", parts:["=I","only","have","two","chapters","=left."]},
  {ctx:"What should I bring to the picnic?", parts:["=Anything","that","is","easy","to","=carry."]}
 ],
 email:{
  scenario:"<p>You are graduating from your university next month. Your former high school English teacher, Mr. Peralta, helped you a lot when you were preparing for the university entrance exam. You want to invite him to your graduation ceremony.</p>",
  reader:"your former teacher, Mr. Peralta",
  bullets:["Tell him your news.","Explain how he helped you.","Invite him and give the details."],
  to:"jperalta@colegiosanandres.edu.bo", subject:"An invitation to my graduation",
  model:"<p>Dear Mr. Peralta,</p><p>I hope you are well and still enjoying your classes at San Andrés. I am writing with some good news: next month I will graduate from the Universidad Mayor de San Simón with a degree in civil engineering.</p><p>I often think about the year you spent helping me prepare for the entrance exam. You stayed after school twice a week to correct my essays, and you taught me how to organize my ideas before I wrote. I still use your “plan, write, check” method, even for my engineering reports. Without your help, I am not sure I would have passed the exam.</p><p>It would mean a lot to me if you could attend my graduation ceremony. It will take place on Friday, July 12, at 10:00 a.m. in the university’s main auditorium. I have saved a ticket for you, and I would love to introduce you to my parents afterward.</p><p>With gratitude,<br>Andrés Rocha</p>"
 },
 disc:{
  course:"organizational psychology", prof:"Dr. Gálvez",
  question:"<p>Some companies now offer “nap rooms,” quiet spaces where employees can sleep for twenty minutes during the workday. Supporters say short naps improve concentration and reduce mistakes. Critics argue that sleeping at work looks unprofessional and that employees should simply sleep more at night. Should companies provide nap rooms for their employees? Why or why not?</p>",
  posts:[["Paola","Yes. Many people have long commutes or young children, so they can’t always sleep eight hours. A short nap after lunch could help them work more safely, especially in jobs where mistakes are dangerous, like in hospitals."],["Gonzalo","I don’t think so. If a company needs nap rooms, it probably means employees are working too many hours. Instead of nap rooms, companies should reduce overtime so that people can rest properly at home."]],
  model:"<p>I understand Gonzalo’s concern that nap rooms could hide the real problem of overwork, but I still think companies should provide them, as long as they are part of a broader policy on rest. Even employees with reasonable hours can feel very tired after lunch, because our energy naturally drops in the early afternoon. A twenty-minute nap can restore attention far better than a third cup of coffee. For example, my cousin works as a nurse on twelve-hour shifts, and her hospital introduced a small rest room last year. She says the nurses now make fewer errors in the afternoon, and they no longer feel guilty about taking a short break. At the same time, I agree with Gonzalo that nap rooms should not replace limits on overtime. Companies should do both: protect working hours and offer a place to rest when people need it.</p>"
 }
},

speaking:{
 lr:{setting:"You are starting a summer job as a guide at an aquarium. Listen to your supervisor and repeat what he says.", items:[
  "Welcome to the city aquarium.",
  "Please do not knock on the glass.",
  "The sharks are fed every day at noon.",
  "Children can touch the starfish in the small pool.",
  "Visitors are not allowed to use a camera flash inside the tunnel.",
  "The exit for the gift shop is at the end of the jellyfish room.",
  "If a child gets lost, bring them to the information desk and call the security office right away."
 ]},
 iv:{topic:"A research study about learning new skills as an adult", intro:"You have agreed to take part in a study about how adults learn new skills outside school. A researcher will interview you online.", qs:[
  "Thank you for joining. To start, what is one skill you have learned outside of school, and how did you learn it?",
  "Some people prefer to learn new skills with a teacher, while others prefer to teach themselves using videos or books. Which do you prefer, and why?",
  "Many people say they are too busy to learn something new after they start working. Do you think this is a good reason? Why or why not?",
  "Last question. Some companies pay for their employees to take courses that are not directly related to their job, like cooking or painting. Do you think this is a good use of company money? Why or why not?"
 ], models:[
  "One skill I learned outside school is playing the guitar. When I was fifteen, my uncle left an old guitar at our house, and I started learning songs from online videos. At first my fingers hurt a lot, but I practiced for about twenty minutes every night. After a year, I could play at family parties, which made me really proud.",
  "I prefer learning with a teacher, at least at the beginning. When I taught myself guitar, I developed some bad habits, like holding my hand in the wrong position, and it took months to correct them. A teacher can notice mistakes right away. Later, when you know the basics, videos are great for learning new songs or techniques on your own.",
  "I don’t think it’s a very good reason. It’s true that working people have less time, but most of us spend at least an hour a day on our phones. My father started learning English at forty-five, while working full-time, by studying for fifteen minutes on the bus every morning. So I think the real problem is usually motivation, not time.",
  "I think it’s a smart use of money. Employees who learn something new feel more motivated and less stressed, and that improves their work too. Also, creative skills like painting can help people think in different ways. For example, a cooking class with colleagues can improve teamwork more than a formal meeting. The cost is small compared with the benefits."
 ]}
}
};
