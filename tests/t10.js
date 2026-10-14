/* BandSix Test Simulator · Test 10 · Speaking module Diagnostic. Original content. */
(window.BS_TESTS = window.BS_TESTS || {})[10] = {
n:10, title:"Speaking module · Diagnostic test",

reading:{
m1:[
 {t:"cw", text:"Stalactites are long, thin rocks that hang from the ceilings of caves. They form very slowly from drops of water that carry a mineral called calcite. When a drop hangs from the ceiling, it loses a tiny amount of this mineral, which stays behind as a thin ring. Over thousands of years, these rings build a stone shape, and some stalactites eventually reach the cave floor."},
 {t:"dl", doc:{kind:"notice", title:"Route 12 Bus · Temporary Detour", body:"<p>From <b>Monday, March 3</b>, Route 12 buses will not stop on Calle Junín because of road repairs. The two stops on that street will move to Avenida Bolívar, one block north.</p><p>The work is expected to last three weeks. Bus times will not change. For updates, check the city transport app.</p>"}, qs:[
  {q:"Why are the two stops on Calle Junín moving?", o:["The street is being repaired.","The buses are being replaced.","The route has become too busy.","The street will become a market."], why:"Buses will not stop there “because of road repairs.”"},
  {q:"What does the notice say about the bus timetable?", o:["It will remain the same.","It will be posted at each stop.","Buses will come less often.","It will change after three weeks."], why:"“Bus times will not change.”"}
 ]},
 {t:"dl", doc:{kind:"email", from:"Altamira Residences · Management", to:"Daniela Choque", subject:"Apartment inspection on May 8", body:"<p>Dear Ms. Choque,</p><p>As part of our yearly safety check, a technician will inspect the gas heater and smoke alarm in <b>Apartment 4C</b> on <b>Thursday, May 8, between 9:00 a.m. and noon</b>. The visit takes about twenty minutes.</p><p>You do not need to be at home; with your permission, the building manager can let the technician in. If the date is not convenient, please reply by May 5 so we can arrange another day. Kindly make sure the area around the heater is clear.</p><p>Altamira Residences</p>"}, qs:[
  {q:"What is the purpose of the email?", o:["To inform a resident about a safety visit","To ask a resident to pay for repairs","To announce new rules for the building","To offer a resident a different apartment"], why:"It explains that a technician will inspect the heater and smoke alarm."},
  {q:"What must Ms. Choque do if May 8 is not convenient?", o:["Write back before May 5","Call the technician directly","Leave her key at the front door","Wait for a second email"], why:"“If the date is not convenient, please reply by May 5.”"},
  {q:"What is Ms. Choque asked to do before the visit?", o:["Move things away from the heater","Turn off the gas","Test the smoke alarm herself","Stay at home all morning"], why:"“Kindly make sure the area around the heater is clear.”"}
 ]},
 {t:"ap", doc:{kind:"passage", title:"The Moon’s Hidden Side", body:"<p>Anyone who looks at the Moon on different nights will notice that its familiar pattern of dark and light areas never changes. Although the Moon turns on its axis, we always see the same half. This is not a coincidence. The Moon takes about twenty-seven days to turn once, which is exactly the time it takes to travel once around the Earth, so the same side always faces us.</p><p>Astronomers call this situation tidal locking. Billions of years ago, the young Moon probably turned much faster. However, the Earth’s gravity pulled on the Moon and slightly stretched it, creating a small bulge on each side. As the Moon turned, the Earth kept pulling on these bulges, acting like a gentle brake. Over millions of years, this slowed the Moon’s rotation until it matched its orbit.</p><p>Tidal locking is common in the solar system; many moons of Jupiter and Saturn are locked to their planets. The far side of the Moon remained a mystery until 1959, when a Soviet spacecraft first photographed it. The images showed a surprise: the far side has very few of the dark plains that cover the near side.</p>"}, qs:[
  {q:"What is the passage mainly about?", o:["Why we always see the same side of the Moon","How the Moon was first formed","Why the Moon has dark and light areas","How spacecraft photograph distant planets"], why:"The passage explains tidal locking and its effect on what we see."},
  {q:"According to the passage, why does the same side of the Moon always face the Earth?", o:["One turn of the Moon takes as long as one orbit.","The Moon does not turn on its axis.","The Earth blocks the light on the far side.","The Moon moves faster than the Earth."], why:"Its rotation of about twenty-seven days equals the time it takes to orbit the Earth."},
  {q:"The author compares the Earth’s gravity to a brake in order to", o:["explain how the Moon’s rotation became slower","describe how the Moon was stretched into a new shape","show that the Earth’s gravity is very strong","explain why the Moon moves away from the Earth"], why:"The pull on the bulges acted “like a gentle brake” that slowed the Moon’s rotation."},
  {q:"The word “matched” in the passage is closest in meaning to", o:["was equal to","was faster than","replaced","followed"], why:"The rotation became equal to the orbit."},
  {q:"What did the photographs from 1959 show?", o:["The far side has few dark plains.","The far side is completely dark.","The far side is covered with dark plains.","The far side looks the same as the near side."], why:"“The far side has very few of the dark plains that cover the near side.”"}
 ]}
],
up:[
 {t:"cw", text:"Toasted bread, roasted coffee and grilled meat all owe their flavor to the same chemical process. When food is heated above about 140 degrees Celsius, sugars and proteins react with each other and produce hundreds of new compounds. These compounds give food its brown color and its rich smell. The reaction happens slowly in wet food, which is why boiled meat never develops the same deep flavor as meat cooked in a hot pan."},
 {t:"dl", doc:{kind:"schedule", title:"Laguna Alalay Rowing Club · Membership Options", body:"<table><thead><tr><th>Plan</th><th>Access</th><th>Monthly fee</th></tr></thead><tbody><tr><td>Beginner</td><td>2 coached sessions per week · first 3 months only</td><td>Bs 150</td></tr><tr><td>Standard</td><td>Unlimited boat use · must pass the safety test</td><td>Bs 220</td></tr><tr><td>Competitive</td><td>Unlimited use + daily coaching + races</td><td>Bs 350</td></tr></tbody></table><p>Students pay 25% less on any plan. Boats may not be used after sunset.</p>"}, qs:[
  {q:"A member has finished the beginner course and passed the safety test, but does not want to race. Which plan suits her best?", o:["Standard","Beginner","Competitive","None of the plans"], why:"The beginner plan is only for the first three months, and she does not want races, so Standard fits."},
  {q:"What is suggested about the club’s boats?", o:["They are not available in the evening after dark.","Students can use them for free.","Only competitive members may use them.","They must be booked a month in advance."], why:"“Boats may not be used after sunset.”"}
 ]},
 {t:"dl", doc:{kind:"post", author:"Residents of Edificio Los Pinos", meta:"Posted Sunday", body:"<p>Neighbors, after last week’s meeting, we have agreed on a new system for the shared laundry room. From next month, each apartment will reserve <b>two time slots per week</b> on the sheet by the door. Clothes left in a machine for more than thirty minutes after the cycle ends may be moved to the table.</p><p>Several residents mentioned that the dryer sometimes stops halfway. A repair has been requested, but until then, please check your clothes before leaving.</p>"}, qs:[
  {q:"Why was the post most likely written?", o:["To explain a decision residents made together","To complain about a neighbor’s behavior","To invite residents to a meeting","To announce that the laundry room will close"], why:"It reports the system “we have agreed on” after a meeting."},
  {q:"What may happen to clothes that stay in a machine too long?", o:["Another resident may take them out.","They will be thrown away.","The owner will have to pay a fine.","They will be dried automatically."], why:"They “may be moved to the table.”"},
  {q:"What does the post suggest about the dryer?", o:["It is not completely reliable yet.","It has already been replaced.","It may only be used twice a week.","It has been removed from the room."], why:"It “sometimes stops halfway,” and the repair has only been requested."}
 ]},
 {t:"ap", doc:{kind:"passage", title:"Messengers from the Deep", body:"<p>Diamonds form under conditions that exist nowhere near the surface of the Earth. Carbon becomes diamond only under enormous pressure and heat, conditions found roughly 150 kilometers below our feet. Yet the deepest mines reach only about four kilometers. How, then, do diamonds arrive within reach of human hands?</p><p>The answer lies in rare volcanic eruptions of an unusual rock called kimberlite. Kimberlite magma originates deep in the mantle and is rich in water and carbon dioxide. As it rises, these gases expand, and the magma accelerates, possibly reaching speeds of several meters per second. This speed is crucial. Diamond is stable only at high pressure; if it rises slowly, it gradually turns into graphite, the soft material in pencils. Kimberlite carries diamonds upward so quickly that they have no time to change.</p><p>These eruptions leave behind narrow, carrot-shaped structures known as pipes, and almost all mined diamonds come from them. Remarkably, no kimberlite eruption has ever been witnessed; the youngest pipes are millions of years old, and most are far older. For this reason, geologists value diamonds not only as gems but also as samples. Tiny minerals trapped inside them preserve information about the deep Earth that cannot be obtained any other way.</p>"}, qs:[
  {q:"Why does the author mention the depth of the deepest mines?", o:["To highlight the gap between where diamonds form and where people can dig","To explain why digging for diamonds has always been so expensive","To show that modern miners have finally reached the upper mantle","To compare today’s deep mines with the older, shallower ones"], why:"Diamonds form at about 150 km, but mines reach only about 4 km, which creates the puzzle the passage answers."},
  {q:"According to the passage, why is the speed of kimberlite magma important?", o:["It prevents diamonds from turning into graphite.","It produces the heat needed to make diamonds.","It breaks large diamonds into smaller pieces.","It allows gases to escape before the eruption."], why:"Rising slowly, diamond “gradually turns into graphite”; kimberlite moves too fast for this."},
  {q:"The word “crucial” in the passage is closest in meaning to", o:["essential","surprising","dangerous","unusual"], why:"The speed is essential for the diamonds to survive."},
  {q:"What can be inferred about kimberlite eruptions?", o:["Scientists study them only through the rocks they left behind.","They happen every few years in remote areas.","They are similar to most volcanic eruptions.","They usually destroy the diamonds they carry."], why:"No eruption “has ever been witnessed,” so geologists rely on old pipes and the diamonds in them."},
  {q:"Why do geologists value diamonds as samples?", o:["Minerals inside them record conditions deep in the Earth.","They show how old the solar system is.","They are the hardest rocks on the surface.","They reveal where future eruptions will occur."], why:"Trapped minerals “preserve information about the deep Earth.”"}
 ]}
],
down:[
 {t:"cw", text:"On a clear night, you may see a bright line of light cross the sky. Many people describe this as a shooting star, although real stars never travel across the sky like that. Actually, these lights come from small pieces of rock that travel through space. When a piece enters the air around our planet, it moves very quickly, gets hot and burns for a second. Most pieces are smaller than a grain of sand."},
 {t:"dl", doc:{kind:"notice", title:"Bike Lane Closed This Weekend", body:"<p>The bike lane on Avenida Las Américas will be <b>closed on Saturday and Sunday</b> for painting.</p><p>Cyclists can use the park path next to the river. The lane will open again on Monday morning.</p>"}, qs:[
  {q:"Why is the bike lane closed?", o:["It is being painted.","There is a race.","It is too dirty.","A new bridge is being built."], why:"It “will be closed … for painting.”"},
  {q:"Where can cyclists ride this weekend?", o:["On the park path","On the avenue","On the bridge","On the sidewalk"], why:"“Cyclists can use the park path next to the river.”"}
 ]},
 {t:"dl", doc:{kind:"email", from:"Coach Ramírez", to:"Basketball club members", subject:"New training times", body:"<p>Hi team,</p><p>From next week, training will be on <b>Tuesdays and Thursdays at 6:00 p.m.</b>, not 5:00. The gym is busy with a school class at five.</p><p>Our first game is on Saturday, May 10. Please wear your blue club shirt.</p><p>Coach Ramírez</p>"}, qs:[
  {q:"Why is the coach changing the training time?", o:["The gym is used by a class at five.","The coach works until five.","The players asked for it.","The gym closes early."], why:"“The gym is busy with a school class at five.”"},
  {q:"What time will training start next week?", o:["At 6:00 p.m.","At 5:00 p.m.","At 5:30 p.m.","At 7:00 p.m."], why:"“Training will be … at 6:00 p.m.”"},
  {q:"What should players wear on May 10?", o:["The blue club shirt","A white shirt","Any sports clothes","A school uniform"], why:"“Please wear your blue club shirt.”"}
 ]},
 {t:"ap", doc:{kind:"passage", title:"Potatoes That Last for Years", body:"<p>People in the Andes have grown potatoes for thousands of years. But fresh potatoes do not last long. After a few months, they become soft or start to grow. So Andean farmers found a way to keep them for many years. They make chuño.</p><p>Chuño is made in June and July, when nights in the high mountains are very cold and days are sunny. Farmers leave potatoes outside, where they freeze at night and thaw in the sun. After a few days, people walk on the potatoes with bare feet to push out the water. Then the potatoes dry in the sun.</p><p>The result is small, light and hard. Chuño is easy to carry, and it can be stored for ten years or more. Before cooking, people put it in water. Today it is still common in Bolivian and Peruvian food, for example in soups, and many families eat it every week.</p>"}, qs:[
  {q:"What is the passage mainly about?", o:["A traditional way to keep potatoes for a long time","How to grow potatoes in the mountains","Why potatoes are healthy","The history of Bolivian soups"], why:"The passage explains how chuño is made and why it lasts."},
  {q:"Why is chuño made in June and July?", o:["Nights are very cold and days are sunny.","Potatoes are cheap in those months.","Farmers have more free time.","It rains a lot in those months."], why:"In June and July “nights … are very cold and days are sunny.”"},
  {q:"Why do farmers walk on the potatoes?", o:["To push the water out","To make them soft","To clean them","To break them into pieces"], why:"They walk on them “to push out the water.”"},
  {q:"The word “stored” in the passage is closest in meaning to", o:["kept","sold","cooked","planted"], why:"Chuño can be kept for ten years or more."},
  {q:"What do people do before cooking chuño?", o:["They put it in water.","They freeze it again.","They dry it in the sun.","They cut it into small pieces."], why:"“Before cooking, people put it in water.”"}
 ]}
]
},

listening:{
m1:[
 {t:"cr", line:"M: How long does it take to get to the airport?", o:["About forty minutes by taxi.","At the main terminal.","I took a plane there.","It’s a very big airport."], why:"“How long” asks for an amount of time."},
 {t:"cr", line:"W: How did your team do in the competition?", o:["We made it to the semifinals.","We play every Sunday.","At the city stadium.","There were ten teams in it."], why:"“How did your team do” asks about the result."},
 {t:"cr", line:"M: Is the apartment still available?", o:["Yes, until Friday.","It has two bedrooms.","I live on the third floor.","The rent was paid."], why:"A yes/no question. “Yes” with a detail answers it."},
 {t:"cr", line:"W: Why don’t you take the train instead of driving?", o:["Good idea. Parking is hard.","Because I’m driving.","The train is long.","I drove there yesterday."], why:"A suggestion. Accepting it with a reason fits."},
 {t:"cr", line:"M: When does the pool open on Sunday?", o:["Not until ten, I believe.","It’s an indoor pool.","I swim every week.","Near the gym."], why:"“When” asks for a time."},
 {t:"cr", line:"W: The printer on our floor is out of paper again.", o:["There’s a box in the supply room.","I printed it yesterday.","The floor is very clean.","It’s a new printer."], why:"She reports a problem. Telling her where to find paper helps."},
 {t:"cr", line:"M: Have you met our new neighbors yet?", o:["Only briefly, in the elevator.","They’re moving next month.","I’m new here too.","Yes, I have neighbors."], why:"He asks whether she has met them. A short report of the meeting answers it."},
 {t:"cr", line:"W: The hotel shuttle leaves in ten minutes.", o:["Then I’d better finish packing.","The hotel has a nice pool.","I left it ten minutes ago.","It’s a very short flight."], why:"She warns that time is short. Hurrying to get ready fits."},
 {t:"conv", setting:"Listen to a conversation between a student and a worker at the university housing office.", lines:[
  "W: Hi. I live in Residence B, and I’d like to change rooms if possible.",
  "M: Is there a problem with your room?",
  "W: Not the room itself. It faces the main road, and the traffic starts at five in the morning. I haven’t slept properly in weeks.",
  "M: I see. Residence B is full right now, but there’s a free room in Residence D, on the quiet side of campus. It’s a bit farther from the library, though.",
  "W: That’s fine. I can walk.",
  "M: OK. Fill in this form, and you can move on Friday. You’ll need to return your old key the same day."], qs:[
  {q:"Why does the student want to move to another room?", o:["Noise from the road wakes her up early.","Her room is too small.","She does not get along with her roommate.","Her residence is far from the library."], why:"Her room faces the main road, and the traffic starts at five in the morning."},
  {q:"What is a disadvantage of the new room?", o:["It is farther from the library.","It is more expensive.","She cannot move until next month.","It faces another busy road."], why:"“It’s a bit farther from the library, though.”"}
 ]},
 {t:"conv", setting:"Listen to a conversation between two friends.", lines:[
  "M: I’m thinking of joining a cycling club. Do you know any good ones?",
  "W: My cousin is in the Pedal Club. They ride every Saturday morning, usually about sixty kilometers.",
  "M: Sixty? I’ve never done more than twenty.",
  "W: Don’t worry. They have two groups. The slower group rides thirty kilometers and stops for breakfast halfway.",
  "M: That sounds more like me. Do I need a special bike?",
  "W: Any road bike is fine, but you have to wear a helmet. They’re very strict about that."], qs:[
  {q:"Why is the man worried at first?", o:["He has never ridden as far as sixty kilometers.","He does not own a bike.","He works on Saturday mornings.","He does not know anyone in the club."], why:"He says he has never done more than twenty kilometers."},
  {q:"What does the woman say about the club?", o:["Members must wear a helmet.","Members must buy a special bike.","It rides only on Sunday mornings.","It has only one group."], why:"“You have to wear a helmet. They’re very strict about that.”"}
 ]},
 {t:"ann", setting:"Listen to an announcement on a city bus.", lines:[
  "M: Attention, passengers. From the first of next month, cash will no longer be accepted on city buses. Passengers will need to pay with a rechargeable travel card or a mobile phone. Travel cards can be bought and recharged at any pharmacy or newsstand displaying the blue card sign. Students and senior citizens can apply for a discount card at the main transport office with a photo ID."], qs:[
  {q:"What change is being announced?", o:["Passengers will not be able to pay with cash.","Bus fares will become cheaper.","New bus routes will start next month.","Travel cards will no longer be sold."], why:"“Cash will no longer be accepted on city buses.”"},
  {q:"What must students do to get a discount card?", o:["Apply at the transport office","Buy it at any pharmacy or newsstand","Ask the bus driver for a form","Download the city transport app"], why:"Students “can apply for a discount card at the main transport office with a photo ID.”"}
 ]},
 {t:"talk", setting:"Listen to part of a talk in a food science class.", lines:[
  "W: Most people think bread goes stale because it dries out. That seems logical. A loaf left on the table becomes hard, so it must be losing water, right? Actually, that’s only a small part of the story.",
  "W: Bread contains a lot of starch. When bread is baked, the heat and water make the starch soft and disorganized. As the bread cools, the starch molecules slowly start to line up again into tight, hard structures. This process, not drying, is the main reason bread becomes firm. In fact, scientists have shown that bread kept in a sealed bag still goes stale, even though it loses almost no water.",
  "W: This also explains a common mistake. Many people keep bread in the refrigerator to make it last longer. But cold temperatures actually speed up the process, so bread goes stale faster in the fridge. The freezer is different, because at those temperatures the molecules can hardly move. And if you heat stale bread in the oven for a few minutes, you can partly reverse the process."], qs:[
  {q:"What is the talk mainly about?", o:["The real cause of bread becoming stale","How bread is baked in large factories","Why some bread contains more starch than other bread","How to keep bread fresh in a sealed bag"], why:"The professor explains that starch changes, not drying, make bread stale."},
  {q:"Why does the professor mention bread kept in a sealed bag?", o:["To show that bread goes stale without losing water","To recommend the best way to store bread","To explain why bread loses water","To show that bags keep bread soft"], why:"Sealed bread “still goes stale, even though it loses almost no water.”"},
  {q:"According to the professor, what happens to bread in the refrigerator?", o:["It goes stale more quickly.","It stays fresh much longer.","It loses most of its water.","It becomes soft again."], why:"“Cold temperatures actually speed up the process.”"},
  {q:"What can people do with stale bread, according to the professor?", o:["Warm it briefly to make it softer again","Put it in the fridge for a day","Keep it in a sealed bag","Add water and freeze it"], why:"Heating it in the oven “can partly reverse the process.”"}
 ]}
],
up:[
 {t:"cr", line:"W: I didn’t realize the last train left so early.", o:["Neither did I. We’ll have to get a taxi.","The train was very fast.","I realized it last week.","It leaves from platform two."], why:"She has missed the train. Agreeing and proposing a solution fits."},
 {t:"cr", line:"M: Surely you’re not cycling all the way to Sorata.", o:["Why not? Most of it is downhill.","I cycled there yesterday.","Sorata is a small town.","Surely it is far away."], why:"He doubts her plan. Defending it with a reason responds naturally."},
 {t:"cr", line:"W: The landlord still hasn’t fixed the heater.", o:["Put your request in writing, then.","It’s cold outside.","I fixed my bike.","He is a good landlord."], why:"She complains. Suggesting a next step fits."},
 {t:"cr", line:"M: I thought the library stayed open until midnight.", o:["Only during exam weeks.","I stayed there all day.","The library is very quiet.","Midnight is too late."], why:"He is surprised it is closed. Explaining when it stays open late answers him."},
 {t:"cr", line:"W: Any chance you could cover my shift on Saturday?", o:["Sorry, I’m visiting my parents.","The shift is long.","I covered it with paper.","Saturday is a good day."], why:"A request. Politely refusing with a reason fits."},
 {t:"cr", line:"W: Those noisy pipes in the bathroom kept me up all night.", o:["Did you tell the manager?","I kept them in a box.","The bathroom is upstairs.","I was up early too."], why:"She complains about a problem. Asking if she reported it suggests a next step."},
 {t:"cr", line:"W: I wouldn’t eat that if I were you.", o:["Why? Has it gone bad?","I’m not you.","I already ate lunch.","It’s my favorite plate."], why:"A warning. Asking for the reason fits."},
 {t:"cr", line:"M: Don’t tell me you’ve lost your bus card again.", o:["No, it’s just in my other jacket.","I told you yesterday.","The bus card is blue.","I lost the game."], why:"He suspects a repeated mistake. Explaining where it is answers him."},
 {t:"conv", setting:"Listen to a conversation between a student and a professor.", lines:[
  "M: Professor Quispe, I wanted to ask about the geology field trip next week. I have a basketball final on Saturday.",
  "W: The trip is Friday to Sunday, so that’s a conflict. The field trip counts for twenty percent of your grade.",
  "M: I know. Is there any alternative assignment?",
  "W: Not exactly, but here’s an option. The second group is collecting rock samples near Sorata the following weekend. If there’s space, you could join them instead.",
  "M: That would be perfect. Should I ask the other professor?",
  "W: Send me an email today, and I’ll check the list with him. Spaces are limited, so don’t wait."], qs:[
  {q:"Why does the student come to see the professor?", o:["His game clashes with a required trip.","He wants to lead a field trip.","He missed a basketball game.","He wants to change his grade."], why:"The field trip is Friday to Sunday, and his basketball final is on Saturday."},
  {q:"What does the professor imply about the option she suggests?", o:["It may not be possible if the group is full.","It is easier than the original trip.","It counts for more of the grade.","The student must find a partner first."], why:"She will “check the list” and says “spaces are limited, so don’t wait.”"}
 ]},
 {t:"ann", setting:"Listen to an announcement at a sports center.", lines:[
  "W: Attention, members. The main swimming pool will be closed from Thursday to Sunday this week while it hosts the regional youth championship. During this time, the small training pool will remain open, but only for lap swimming, and each session will be limited to forty-five minutes. Members who prefer not to swim during these days may use their pass in the gym or join any fitness class at no extra cost. Parking will be very limited, so we recommend using public transport."], qs:[
  {q:"Why will the main pool be closed?", o:["It will host a competition.","It needs to be cleaned.","The water heater is broken.","It is being made larger."], why:"It “hosts the regional youth championship.”"},
  {q:"What is offered to members who do not want to swim?", o:["Free use of the gym and fitness classes","A refund for those days","A longer session in the training pool","Free parking near the center"], why:"They “may use their pass in the gym or join any fitness class at no extra cost.”"}
 ]},
 {t:"talk", setting:"Listen to part of a talk in an astronomy class.", lines:[
  "M: Thirty years ago, we didn’t know of a single planet orbiting a star like our Sun. Today we know of more than five thousand. But here’s the strange thing: we have actually seen very few of them. Planets are tiny and dark compared with their stars, so their light is lost in the glare.",
  "M: So how do we find them? The most productive method is called the transit method. If a planet’s orbit happens to pass between its star and us, the planet blocks a tiny fraction of the star’s light, maybe one percent for a large planet. A telescope that measures the star’s brightness very precisely will record a small dip, and if the dip repeats at regular intervals, we can calculate how long the planet’s year is.",
  "M: The size of the dip also tells us the planet’s size. Now, there’s an obvious limitation. The method only works if the orbit is lined up just right from our point of view. For most planetary systems, it isn’t. So for every planet we detect this way, there are many others we simply can’t see, which means the real number of planets must be far higher."], qs:[
  {q:"What is the talk mainly about?", o:["How astronomers detect planets around other stars","Why distant planets are so dark","How telescopes are built to observe the Sun","Why our solar system has so few planets"], why:"The professor explains the transit method for finding planets."},
  {q:"Why does the professor say we have seen very few of these planets?", o:["To point out that they are found indirectly","To suggest that most discoveries are mistakes","To explain why astronomers stopped searching","To show that telescopes are too old"], why:"Their light is lost in the star’s glare, so they are detected through other methods."},
  {q:"According to the professor, what information does the size of the dip provide?", o:["The size of the planet","The age of the star","The distance to the planet","The planet’s temperature"], why:"“The size of the dip also tells us the planet’s size.”"},
  {q:"What does the professor conclude about the number of planets?", o:["It is probably much larger than the number known.","It has been calculated precisely.","It is smaller than scientists once believed.","It will not change in the future."], why:"Many orbits are not aligned, “so the real number of planets must be far higher.”"}
 ]}
],
down:[
 {t:"cr", line:"W: How much is a ticket to the city center?", o:["Three bolivianos.","By bus.","Every hour.","It’s near here."], why:"“How much” asks for a price."},
 {t:"cr", line:"M: Where is the changing room?", o:["Next to the pool entrance.","At four o’clock.","I changed my shoes.","It’s a big room."], why:"“Where” asks for a place."},
 {t:"cr", line:"W: Do you live near here?", o:["Yes, just two streets away.","I live with my sister.","It’s a nice house.","I like it here."], why:"A yes/no question about distance. “Yes” with a detail answers it."},
 {t:"cr", line:"M: What time does your game start?", o:["At half past three.","On the big field.","With my friends.","It’s a long game."], why:"“What time” asks for a time."},
 {t:"cr", line:"W: Shall we walk to the park?", o:["Yes, it isn’t far.","It’s a big park.","I walked yesterday.","At the park."], why:"A suggestion. Agreeing with a reason fits."},
 {t:"cr", line:"M: Who won the match yesterday?", o:["Our team, two to one.","At the stadium.","Last night.","It was a good match."], why:"“Who” asks for the winner."},
 {t:"cr", line:"W: Is this seat free?", o:["Yes, go ahead.","It’s a blue seat.","I’m free today.","It costs nothing."], why:"She asks if she can sit. “Yes, go ahead” answers it."},
 {t:"cr", line:"M: Why are you so tired today?", o:["I didn’t sleep well last night.","I’m tired of it.","At ten o’clock.","Yes, I am."], why:"“Why” asks for a reason."},
 {t:"conv", setting:"Listen to a conversation at a bike rental shop.", lines:[
  "M: Hello. I’d like to rent a bike for the afternoon.",
  "W: Sure. It’s twenty bolivianos for four hours, or thirty for the whole day.",
  "M: Four hours is enough. Do I need to leave anything?",
  "W: Yes, I need to see your ID card. And please bring the bike back before seven. We close at seven.",
  "M: No problem. Does it come with a lock?",
  "W: Yes, the lock is in the basket."], qs:[
  {q:"How much will the man pay?", o:["Twenty bolivianos","Thirty bolivianos","Seven bolivianos","Forty bolivianos"], why:"He chooses four hours, which costs twenty bolivianos."},
  {q:"Where is the lock?", o:["In the basket","On the wall","At the front desk","In his bag"], why:"“The lock is in the basket.”"}
 ]},
 {t:"ann", setting:"Listen to an announcement at a football stadium.", lines:[
  "M: Good evening, everyone. Tonight’s game will start fifteen minutes late because of the heavy rain. Please stay in your seats. Food and drinks are sold near Gates 2 and 5. After the game, please leave by the closest gate."], qs:[
  {q:"Why will the game start late?", o:["It is raining a lot.","A player is hurt.","The lights are not working.","The gates opened late."], why:"It will start late “because of the heavy rain.”"},
  {q:"Where can people buy food?", o:["Near Gates 2 and 5","At their seats","Outside the stadium","At the main gate only"], why:"“Food and drinks are sold near Gates 2 and 5.”"}
 ]},
 {t:"talk", setting:"Listen to part of a talk in an earth science class.", lines:[
  "W: Here’s a rock that can do something strange. It’s called pumice. If you put it in water, it floats. Most rocks sink, so why does this one float?",
  "W: Pumice comes from volcanoes. During some eruptions, very hot rock comes out full of gas, a bit like a bottle of soda when you open it. The rock cools very fast, and the gas bubbles are trapped inside. So pumice is full of tiny holes filled with air. That makes it very light. People use pumice in many ways. For example, they use it to clean the skin on their feet, and builders add it to some kinds of concrete to make it lighter."], qs:[
  {q:"What is the talk mainly about?", o:["Why a volcanic rock can float","How volcanoes erupt","How concrete is made","Why soda has bubbles"], why:"The speaker explains why pumice floats."},
  {q:"Where does pumice come from?", o:["Volcanoes","Rivers","The ocean floor","Mountains of sand"], why:"“Pumice comes from volcanoes.”"},
  {q:"Why does the professor mention a bottle of soda?", o:["To compare it with rock full of gas","To explain how pumice is cleaned","To show what people drink near volcanoes","To describe the color of pumice"], why:"Hot rock comes out full of gas, “a bit like a bottle of soda.”"},
  {q:"Why is pumice so light?", o:["It has many tiny holes filled with air.","It cools very slowly.","It is made of sand.","It contains water."], why:"Pumice “is full of tiny holes filled with air.”"}
 ]}
]
},

writing:{
 bas:[
  {ctx:"How do you get to work?", parts:["=I","usually","take","the","bus","unless","=it’s raining."]},
  {ctx:"Did you enjoy the hotel?", parts:["=The","room","we","stayed","in","had","=an amazing view."], why:"The relative clause <i>we stayed in</i> describes <i>the room</i>."},
  {ctx:"What did the coach tell you?", parts:["=He","told","us","not","to","be","=late again."], why:"Reported command: <i>told us not to be</i>."},
  {ctx:"Why are you moving?", parts:["=Our","current","apartment","is","too","far","=from the university."]},
  {ctx:"Have you finished the book?", parts:["=Not","yet.","I’ve","only","read","half","=of it."]},
  {ctx:"Do you know when the next train leaves?", parts:["=Let","me","check","what","time","it","=departs."], why:"After <i>check what time</i>, use statement order: <i>what time it departs</i>."},
  {ctx:"Is the gym crowded in the morning?", parts:["=It’s","much","quieter","than","it","is","=in the evening."]},
  {ctx:"What happened to the old stadium?", parts:["=It","was","torn","down","a","few","=years ago."], why:"Passive in the past: <i>was torn down</i>."},
  {ctx:"Are you coming to the club barbecue?", parts:["=I","would","come","if","I","weren’t","=working that night."], why:"Second conditional: <i>would come if I weren’t</i>."},
  {ctx:"Why didn’t you call me last night?", parts:["=My","phone","battery","had","already","died","=by then."], why:"Past perfect: <i>had already died</i>."}
 ],
 email:{
  scenario:"<p>Two weeks ago, you joined the Cumbre Sports Club and paid for a three-month membership online. When you checked your bank statement, you saw that the club had charged you twice for the same membership. You want to write to the club’s membership office.</p>",
  reader:"the membership office of the Cumbre Sports Club",
  bullets:["Explain the problem with the payment.","Describe what you have already done to solve it.","Say what you would like the club to do."],
  to:"membership@cumbresports.org", subject:"Double charge for my membership",
  model:"<p>Dear Membership Office,</p><p>I joined the Cumbre Sports Club on September 2 and paid Bs 450 online for a three-month membership. However, when I checked my bank statement yesterday, I noticed that the same amount had been charged twice on the same day, so I have paid Bs 900 in total.</p><p>Before writing, I spoke to the receptionist on Monday evening. She confirmed that the system shows only one membership in my name, but she explained that she cannot issue refunds and suggested that I contact your office. I have attached a copy of my bank statement with both payments marked.</p><p>I would be grateful if you could return the second payment to my card as soon as possible. If a refund will take some time, could you please send me a short confirmation that it is being processed?</p><p>Thank you for your help.</p><p>Best regards,<br>Andrés Vaca</p>"
 },
 disc:{
  course:"urban studies", prof:"Dr. Mendoza",
  question:"<p>In many cities, apartment owners now rent their homes to tourists for a few nights at a time through online platforms. This brings money to owners and local businesses, but some residents say it raises rents and changes the character of neighborhoods. Should cities strictly limit this kind of tourist rental? Why or why not?</p>",
  posts:[["Carla","Yes, they should. In my city, entire buildings in the old center are now full of tourists. Rents have gone up so much that young families and students have had to move to the outskirts."],["Tomás","I don’t think strict limits are fair. Many owners depend on that income, and tourists who stay in apartments spend money in local shops and restaurants instead of big hotels."]],
  model:"<p>Both Carla and Tomás make valid points, but I believe cities should limit tourist rentals, especially in central neighborhoods. Housing is a basic need, while renting to tourists is a business. When too many apartments are rented by the night, fewer homes are available for people who actually live and work in the city, and prices rise for everyone. This happened in my neighborhood in Sucre: a family-run shop closed because the new short-term visitors did not buy everyday products. However, I understand Tomás’s concern about owners’ income. A good compromise would be to allow people to rent the home they live in for a limited number of nights per year, but not to buy several apartments only for tourists. That way, small owners can still earn extra money, and neighborhoods keep their residents.</p>"
 }
},

speaking:{
 lr:{setting:"You are starting a job at the front desk of a city hotel. Listen to the front desk manager and repeat what she says.", items:[
  "Welcome every guest with a smile.",
  "Check-in starts at two in the afternoon.",
  "Ask each guest to show a passport or ID.",
  "Breakfast is served on the first floor until ten.",
  "Give every guest two key cards and a map of the city.",
  "If a room is not ready, offer to keep the guest’s luggage at the desk.",
  "Guests who need a taxi to the airport should tell us at least one hour before leaving."
 ]},
 iv:{topic:"A research study about sleep", intro:"You have agreed to take part in a study about people’s sleep habits. A researcher will interview you online.", qs:[
  "Thank you for joining us. To start, can you describe your usual sleep routine on a weekday?",
  "Some people say they are “morning people,” while others say they work best at night. Which are you, and how does this affect your day?",
  "Many people use their phones in bed before they go to sleep. Do you think this is a problem? Why or why not?",
  "Final question. Some schools and companies have started to begin their day later so that people can sleep more. Do you think this is a good idea? Why or why not?"
 ], models:[
  "On weekdays I usually go to bed around midnight and get up at six thirty, because my first class starts at eight and the bus takes almost an hour. So I sleep about six and a half hours, which honestly isn’t enough. I try to make up for it on weekends, when I sleep until nine or ten, but then on Sunday night it’s hard to fall asleep early.",
  "I’m definitely a night person. In the morning I find it hard to concentrate, so I avoid scheduling difficult tasks before ten. My best study time is between eight and eleven at night, when the house is quiet. The problem is that university classes start early, so sometimes I feel like I’m living on the wrong schedule for my body.",
  "I think it can be a problem, and I say that from experience. When I check my phone in bed, I always plan to read one message, and then forty minutes later I’m still watching videos. The light and the content keep my mind active. Last year I started leaving my phone in the kitchen at night, and I noticed that I fall asleep much faster.",
  "I think it’s a good idea, especially for teenagers and students. Many young people naturally feel sleepy later at night, so an early start means they arrive tired and learn less. A later start, even by one hour, could improve concentration and reduce accidents on the way to school. The only difficulty is that parents with fixed work hours might have trouble adapting their schedules."
 ]}
}
};
