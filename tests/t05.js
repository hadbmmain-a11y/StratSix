/* BandSix Test Simulator · Test 5 · Listening module Mock 1. Original content. */
(window.BS_TESTS = window.BS_TESTS || {})[5] = {
n:5, title:"Listening module · Mock test 1",

reading:{
m1:[
 {t:"cw", text:"For centuries, lighthouses guided ships safely along dangerous coasts. Each lighthouse had its own pattern of flashes, so sailors could identify it at night and know exactly where they were. Keepers lived in or near the tower and climbed the stairs every evening to light the lamp. Today, almost all lighthouses are automatic, and satellite navigation has made many of them unnecessary, but some are still used as a backup system."},
 {t:"dl", doc:{kind:"notice", title:"Rooftop Garden Now Open", body:"<p>The new rooftop garden on <b>Building D</b> is open to all residents from <b>7 a.m. to 9 p.m.</b> daily.</p><p>Residents may pick herbs for personal use, but vegetables are reserved for the monthly community dinner. Please use the stairs, not the freight elevator, to reach the roof.</p>"}, qs:[
  {q:"What are residents allowed to take from the garden?", o:["Herbs for their own use","Vegetables for their families","Any plant before 9 p.m.","Flowers for special events"], why:"“Residents may pick herbs for personal use,” but vegetables are reserved."},
  {q:"Why are some plants not available to residents?", o:["They will be used for a shared meal.","They are not ready to be picked.","They belong to the building manager.","They are sold at a market."], why:"Vegetables “are reserved for the monthly community dinner.”"}
 ]},
 {t:"dl", doc:{kind:"email", from:"TechFix Repair Center", to:"Lucía Flores", subject:"Your laptop is ready", body:"<p>Dear Lucía,</p><p>Good news: the screen on your laptop has been replaced, and the computer is ready for pickup. During our tests, we also noticed that the battery holds only about 40% of its original charge. We have <b>not</b> replaced it, but we can do so for an additional $55 if you wish.</p><p>Our store is open Monday to Saturday, 9:00 a.m. to 6:00 p.m. Please bring your repair receipt. Laptops not collected within 30 days are stored for a fee.</p><p>Regards,<br>TechFix Repair Center</p>"}, qs:[
  {q:"What is the main purpose of the email?", o:["To tell a customer that a repair is finished","To ask a customer to pay a storage fee","To advertise a discount on batteries","To explain why a repair was delayed"], why:"The screen “has been replaced, and the computer is ready for pickup.”"},
  {q:"What does the repair center say about the battery?", o:["It is weak, and the customer can choose to replace it.","It was replaced at no extra cost.","It caused the screen to break.","It must be replaced before pickup."], why:"The battery holds about 40% of its charge, and it can be replaced “if you wish.”"},
  {q:"What will happen if Lucía collects her laptop after 35 days?", o:["She will have to pay for storage.","The laptop will be sold.","The receipt will no longer be valid.","The battery will be replaced automatically."], why:"“Laptops not collected within 30 days are stored for a fee.”"}
 ]},
 {t:"ap", doc:{kind:"passage", title:"The First Paper Money", body:"<p>For most of history, people paid for goods with objects that had value in themselves, such as grain, salt, or coins made of gold, silver and copper. Paper money, which has almost no value as material, required a very different kind of trust. It first appeared in China more than a thousand years ago.</p><p>During the Tang dynasty, merchants who traveled long distances found heavy strings of copper coins difficult to carry. They began leaving their coins with trusted dealers, who gave them paper receipts in return. These receipts could be exchanged for coins later, and soon merchants began trading the receipts themselves. Around the early eleventh century, the government of the Song dynasty took control of this system and began issuing official paper notes.</p><p>The new currency brought clear benefits. It made trade across the large empire faster and allowed the government to manage the money supply. However, it also created a new danger. Because printing notes cost very little, later governments were tempted to print too many of them to pay for wars. As the number of notes grew, each one bought less, and prices rose sharply. By the fifteenth century, the Ming government had largely abandoned paper money, and silver returned as the main form of payment.</p>"}, qs:[
  {q:"What is the passage mainly about?", o:["How paper money began in China and the problems it caused","Why gold and silver kept their value in ancient trade","How merchants traveled safely across the Chinese empire","Why the Ming dynasty became wealthier than the Song"], why:"The passage traces paper money from merchant receipts to official notes, and explains why it was later abandoned."},
  {q:"According to the passage, why did merchants begin using paper receipts?", o:["Coins were too heavy to carry on long journeys.","The government asked them to stop using coins.","Copper had become too expensive.","Paper receipts could not be stolen."], why:"Merchants “found heavy strings of copper coins difficult to carry.”"},
  {q:"The word “issuing” in the passage is closest in meaning to", o:["producing and distributing","collecting","refusing","copying illegally"], why:"The government began producing and distributing official notes."},
  {q:"Why does the author mention wars?", o:["To explain why governments printed too much money","To show how paper money spread to other countries","To describe how merchants protected their coins","To give a reason for the invention of paper"], why:"Governments printed too many notes “to pay for wars,” which caused prices to rise."},
  {q:"What can be inferred about paper money from the passage?", o:["Its value depends on people’s trust in those who issue it.","It was always more valuable than silver.","It was invented to replace grain.","It made trade slower in the Song empire."], why:"Paper “has almost no value as material” and “required a very different kind of trust,” which disappeared when too many notes were printed."}
 ]}
],
up:[
 {t:"cw", text:"Cuttlefish are relatives of squid and octopuses, and they are masters of disguise. Their skin contains millions of special cells filled with colored pigment, which they can expand or shrink in a fraction of a second. By controlling these cells, a cuttlefish can match the pattern of sand, rocks or seaweed around it. Remarkably, scientists believe that cuttlefish are colorblind, which makes their ability to copy colors one of the great puzzles of marine biology."},
 {t:"dl", doc:{kind:"schedule", title:"Northern Lights Tours · Winter Season", body:"<table><thead><tr><th>Tour</th><th>Departs</th><th>Length</th><th>Price</th></tr></thead><tbody><tr><td>Classic bus tour</td><td>Daily, 9:00 p.m.</td><td>4 hours</td><td>$70</td></tr><tr><td>Photography tour (max. 8 people)</td><td>Tue, Thu, Sat, 8:30 p.m.</td><td>5 hours</td><td>$120 · tripod included</td></tr><tr><td>Snowmobile tour</td><td>Fri &amp; Sat, 10:00 p.m.</td><td>3 hours</td><td>$180 · driver’s license required</td></tr></tbody></table><p>If no lights are seen, guests may join the same tour again free of charge within 7 days.</p>"}, qs:[
  {q:"A visitor without a driver’s license wants a small-group tour on Thursday. Which tour should he choose?", o:["The photography tour","The classic bus tour","The snowmobile tour","No tour is available on Thursday."], why:"The photography tour runs on Thursday with at most eight people and does not require a license."},
  {q:"What happens if guests do not see the northern lights?", o:["They can repeat the tour without paying again.","They receive a full refund.","They get a discount on a different tour.","They are given free photographs."], why:"Guests “may join the same tour again free of charge within 7 days.”"}
 ]},
 {t:"dl", doc:{kind:"post", author:"Masa Madre Bakery", meta:"Event · Posted Friday", body:"<p>Ever wanted to bake real sourdough at home? Our two-part workshop starts on <b>Saturday, May 11</b>. In session one, you’ll learn how to feed and care for a starter, and you’ll take a jar of ours home. One week later, in session two, you’ll use your own starter to bake a loaf from start to finish.</p><p>Because session two depends on what you do during the week, both sessions must be booked together. Spaces are limited to ten people, and last month’s workshop sold out in two days.</p>"}, qs:[
  {q:"Why must participants book both sessions together?", o:["The second session builds on work done between the sessions.","The bakery offers a discount for both sessions.","Each session is taught by a different baker.","The first session is too short to attend alone."], why:"“Session two depends on what you do during the week,” using the starter from session one."},
  {q:"What will participants take home after the first session?", o:["A starter to use in the second session","A loaf of sourdough bread","A list of recipes","A bag of flour"], why:"In session one, “you’ll take a jar of ours home.”"},
  {q:"Why does the bakery mention last month’s workshop?", o:["To suggest that people should book quickly","To apologize for a cancellation","To show that the price has changed","To introduce a new teacher"], why:"It “sold out in two days,” which encourages readers to book soon."}
 ]},
 {t:"ap", doc:{kind:"passage", title:"Records in Knots", body:"<p>The Inca Empire, which stretched along the Andes in the fifteenth and early sixteenth centuries, governed millions of people without a system of writing as we normally understand it. Instead, officials used the khipu, a set of colored cotton or wool cords hanging from a main cord. Knots tied at different positions along each cord represented numbers in a base-ten system, with clusters of knots for units, tens and hundreds.</p><p>Spanish chroniclers reported that specialists called khipukamayuq could use these cords to record censuses, taxes, and the contents of storehouses across the empire. Modern researchers have confirmed that many khipus contain numerical data that adds up in consistent ways, for example when the totals on one cord equal the sum of several others.</p><p>A more controversial question is whether khipus also recorded language, such as names, stories or laws. Some colonial documents claim that they did, and certain khipus include features, such as cord colors and the direction of the knots, that do not seem necessary for numbers alone. In recent years, a few researchers have proposed that specific cords may represent family names in village records. However, no one has yet been able to “read” a khipu as a text, and many scholars remain cautious. If such a reading becomes possible, it could transform our understanding of how the Inca communicated.</p>"}, qs:[
  {q:"What is the main purpose of the passage?", o:["To describe the khipu and the debate about what it recorded","To explain why the Inca never developed writing","To compare Inca and Spanish record systems","To argue that khipus were used only for taxes"], why:"The passage explains how khipus recorded numbers and then discusses whether they also recorded language."},
  {q:"According to the passage, how did the khipu represent numbers?", o:["By the position of knots along cords","By the length of each cord","By the number of cords tied together","By the material of each cord"], why:"“Knots tied at different positions along each cord represented numbers in a base-ten system.”"},
  {q:"Why does the author mention that totals on one cord equal the sum of others?", o:["To show evidence that khipus contain organized numerical data","To prove that khipus recorded family names","To explain how Spanish chroniclers learned to read khipus","To describe how cords were attached to the main cord"], why:"Consistent sums are evidence that “many khipus contain numerical data.”"},
  {q:"The word “cautious” in the passage is closest in meaning to", o:["careful","confident","uninterested","critical"], why:"Many scholars are careful about accepting claims that khipus recorded language."},
  {q:"What can be inferred about the cord colors and knot directions?", o:["They may have carried information other than numbers.","They were added by Spanish officials.","They were used only for decoration.","They prove that khipus contained stories."], why:"These features “do not seem necessary for numbers alone,” which suggests they may have encoded something else."}
 ]}
],
down:[
 {t:"cw", text:"In 1995, scientists brought gray wolves back to Yellowstone National Park in the United States. Wolves had disappeared from the park about seventy years earlier. Without them, the number of elk grew quickly, and the elk ate many young trees near the rivers. When the wolves returned, the elk began to move more often and avoid some areas. Slowly, trees grew back, and birds and beavers returned to the riverbanks."},
 {t:"dl", doc:{kind:"notice", title:"Dust Storm Warning", body:"<p>Because a strong dust storm is expected this afternoon, all classes will <b>end at 12:30 p.m. today</b>.</p><p>School buses will leave at 12:45. Students who walk home should leave together and cover their mouths and noses with a scarf.</p>"}, qs:[
  {q:"Why are classes ending early?", o:["Bad weather is expected.","The buses need repairs.","Teachers have a meeting.","There is a holiday tomorrow."], why:"“A strong dust storm is expected this afternoon.”"},
  {q:"What should students who walk home do?", o:["Leave in groups and cover their faces","Wait for the school buses","Stay at school until the evening","Call their parents first"], why:"They “should leave together and cover their mouths and noses with a scarf.”"}
 ]},
 {t:"dl", doc:{kind:"email", from:"Ms. Rojas", to:"Choir members", subject:"Practice this week", body:"<p>Dear choir members,</p><p>This week, our practice will be on <b>Wednesday</b> instead of Thursday, because the music room is being painted. We will meet at the usual time, 4:00 p.m., in the theater.</p><p>Please practice the second song at home. We will sing it at the spring concert in two weeks.</p><p>Thank you,<br>Ms. Rojas</p>"}, qs:[
  {q:"Why is practice moving to a different day?", o:["The music room is being painted.","Ms. Rojas is busy on Thursday.","The theater is closed on Wednesday.","The concert date has changed."], why:"Practice moves “because the music room is being painted.”"},
  {q:"Where will the choir meet this week?", o:["In the theater","In the music room","In the gym","At Ms. Rojas’s house"], why:"“We will meet at the usual time, 4:00 p.m., in the theater.”"},
  {q:"What should students do at home?", o:["Practice the second song","Paint the music room","Buy concert tickets","Learn a new song"], why:"“Please practice the second song at home.”"}
 ]},
 {t:"ap", doc:{kind:"passage", title:"Water for Ancient Rome", body:"<p>Ancient Rome was a very large city. At its peak, it had about one million people, and they needed a lot of water for drinking, cooking and public baths. To bring water from the mountains, the Romans built aqueducts.</p><p>An aqueduct was a long channel that carried water. Most of it ran under the ground, but in valleys the Romans built tall stone bridges with many arches to keep the water moving. The channel went slightly downhill the whole way, so gravity moved the water without any pumps.</p><p>Rome had eleven aqueducts. Some of them still stand today, and one of them still brings water to fountains in the city.</p>"}, qs:[
  {q:"What is the passage mainly about?", o:["How the Romans brought water to their city","How Roman baths were built","Why Rome had a large population","How fountains work today"], why:"The passage explains why Rome needed water and how aqueducts carried it."},
  {q:"Why did the Romans build aqueducts?", o:["To carry water from the mountains to the city","To protect the city from floods","To connect different cities","To decorate the valleys"], why:"“To bring water from the mountains, the Romans built aqueducts.”"},
  {q:"According to the passage, how did water move through an aqueduct?", o:["The channel went slightly downhill.","Workers pushed it with pumps.","Animals pulled it in carts.","Rain filled the channel."], why:"“The channel went slightly downhill the whole way, so gravity moved the water.”"},
  {q:"The word “peak” in the passage is closest in meaning to", o:["highest point","beginning","end","worst time"], why:"At its highest point, Rome had about one million people."},
  {q:"What does the author say about the aqueducts today?", o:["One still brings water to fountains.","None of them are still standing.","They are all under the ground.","They were rebuilt last century."], why:"“One of them still brings water to fountains in the city.”"}
 ]}
]
},

listening:{
m1:[
 {t:"cr", line:"M: Do you know if the pharmacy is open on Sundays?", o:["I think it opens at ten.","I bought some medicine.","It’s across the street.","No, I don’t feel sick."], why:"He asks about Sunday hours. Giving an opening time answers him."},
 {t:"cr", line:"W: Why don’t you join us for lunch?", o:["Thanks, I’d love to.","Because I already ate.","The lunch was great.","We joined last year."], why:"“Why don’t you…?” is an invitation, not a question about reasons."},
 {t:"cr", line:"M: Who left these boxes in the hallway?", o:["The new neighbors, I think.","They’re full of books.","In the hallway, by the door.","I’ll leave them tomorrow."], why:"“Who” asks for a person."},
 {t:"cr", line:"W: My computer just froze in the middle of my essay.", o:["Did you save your work before it happened?","It’s very cold in here today.","My essay is about frozen lakes.","I bought a computer last year."], why:"She reports a problem. Asking whether she saved her work is a helpful reply."},
 {t:"cr", line:"M: Haven’t you met my roommate before?", o:["No, I don’t think so.","Yes, I haven’t.","My room is small.","We meet every day."], why:"A negative question asks for confirmation. “No, I don’t think so” answers clearly."},
 {t:"cr", line:"W: Would you mind turning the music down a bit?", o:["Not at all. Sorry about that.","Yes, I like this song.","Turn left at the corner.","My mind is tired."], why:"“Would you mind…?” is answered “Not at all” when you agree."},
 {t:"cr", line:"M: How long does the train to the city take?", o:["About forty minutes.","It leaves at eight.","The train is very long.","Platform three."], why:"“How long” asks for a duration."},
 {t:"cr", line:"W: I forgot my umbrella, and it’s pouring outside.", o:["You can borrow mine.","It poured last night too.","I forgot your name.","Umbrellas are cheap online."], why:"She has a problem. Offering your umbrella is the helpful reply."},
 {t:"conv", setting:"Listen to a conversation between a student and an employee at the registrar’s office.", lines:[
  "M: Hi. I need an official copy of my grades for a scholarship application.",
  "W: Sure. You can request it here or online. Online is cheaper, five dollars instead of ten.",
  "M: How long does the online request take?",
  "W: About three working days. If you request it here, I can print it right now.",
  "M: The scholarship deadline is tomorrow, so I’d better get it now.",
  "W: No problem. Can I see your student ID?"], qs:[
  {q:"Why does the man need the document?", o:["To apply for a scholarship","To change his major","To transfer to another university","To register for classes"], why:"He needs a copy of his grades “for a scholarship application.”"},
  {q:"Why does the man decide to pay ten dollars?", o:["He needs the document immediately.","The online system is not working.","He does not have a student ID.","He prefers paper documents."], why:"The online request takes three days, but his “deadline is tomorrow.”"}
 ]},
 {t:"conv", setting:"Listen to a conversation between two roommates.", lines:[
  "W: Carla’s birthday is on Friday. Have you thought about a gift?",
  "M: I was going to get her a book, but I’m not sure what she likes to read.",
  "W: Me neither. What about a cooking class? She keeps saying she wants to learn to make pasta.",
  "M: That’s perfect. But aren’t those classes expensive?",
  "W: They’re about sixty dollars. If we split it, it’s thirty each.",
  "M: OK, let’s do that. I’ll look for a class online tonight."], qs:[
  {q:"Why does the man change his gift idea?", o:["He does not know what kind of books Carla likes.","Books have become too expensive for him.","Carla already owns too many books.","The bookstore near them has closed."], why:"He is “not sure what she likes to read.”"},
  {q:"What do the speakers decide to do?", o:["Share the cost of a class for Carla","Cook pasta for Carla’s birthday","Each buy a separate gift","Ask Carla what she wants"], why:"They will split the cost of a cooking class, “thirty each.”"}
 ]},
 {t:"ann", setting:"Listen to an announcement on a university campus.", lines:[
  "M: Attention, students. The campus lost-and-found office is moving from the main library to the security office in Parking Lot C. Starting Monday, all items found on campus will be taken there. Items will be kept for sixty days. Phones, laptops and wallets, however, are stored in a locked cabinet, so you’ll need to show ID and describe the item before staff can return it."], qs:[
  {q:"What is the main purpose of the announcement?", o:["To tell students the new location of a service","To report a theft on campus","To announce new library hours","To ask students to return lost items"], why:"The lost-and-found office “is moving … to the security office in Parking Lot C.”"},
  {q:"What must students do to get back a lost wallet?", o:["Show identification and describe the wallet","Wait sixty days before collecting it","Go to the old office in the main library","Fill in a request form on the website"], why:"For valuable items, “you’ll need to show ID and describe the item.”"}
 ]},
 {t:"talk", setting:"Listen to part of a talk in a botany class.", lines:[
  "W: Plants can’t run, but some of them can move surprisingly fast. The best-known example is the Venus flytrap. Its leaves form two halves, a bit like an open book, and on the inside of each half there are tiny hairs.",
  "W: Here’s the clever part. If an insect touches one hair once, nothing happens. The trap only closes if a hair is touched twice within about twenty seconds. Why? Well, think about raindrops or a piece of falling leaf. A single touch could be anything, and closing the trap uses a lot of energy. Two touches in a short time are much more likely to mean a living insect is moving around.",
  "W: In fact, researchers have found that the plant keeps counting. After the trap closes, more touches from the struggling insect tell the plant to seal the trap tightly and start producing digestive juices. So, in a simple way, the flytrap can count to five."], qs:[
  {q:"What is the talk mainly about?", o:["How the Venus flytrap decides when to close","Where Venus flytraps grow","Why insects are attracted to plants","How plants use sunlight to move"], why:"The professor explains the touch-counting system that controls the trap."},
  {q:"Why does the professor mention raindrops?", o:["To explain why one touch is not enough to close the trap","To show that flytraps need a lot of water","To describe the plant’s natural environment","To compare raindrops with insects’ weight"], why:"A single touch “could be anything,” such as a raindrop, so the trap waits for a second touch."},
  {q:"What happens after the trap has closed?", o:["Further touches cause it to seal and digest the insect.","It opens again after twenty seconds.","It stops responding to touch.","It releases the insect if it is too small."], why:"More touches “tell the plant to seal the trap tightly and start producing digestive juices.”"},
  {q:"What does the professor mean when she says the flytrap “can count to five”?", o:["It responds differently depending on the number of touches.","It can catch up to five insects at the same time.","It closes about five times during a single day.","It has exactly five tiny hairs on each leaf."], why:"The plant reacts to two touches by closing and to further touches by sealing and digesting."}
 ]}
],
up:[
 {t:"cr", line:"W: I’d be surprised if the bus came on time today.", o:["So would I, with all this snow.","I was surprised by the gift.","The bus stops on Main Street.","I came on foot yesterday."], why:"She predicts a delay. Agreeing and giving a reason shows understanding."},
 {t:"cr", line:"M: You haven’t seen my reading glasses anywhere, have you?", o:["Try the kitchen counter.","I read that book already.","My glasses are new.","I haven’t seen that movie."], why:"He is looking for his glasses, so suggesting a place is helpful."},
 {t:"cr", line:"W: Remind me to call the bank before it closes.", o:["Sure. What time does it close?","The bank is on the corner.","I called you last night.","It closed for the holiday."], why:"She asks for a reminder. Agreeing and asking for the time fits."},
 {t:"cr", line:"M: I hear the new manager is pretty strict.", o:["That’s not what I’ve heard.","I can’t hear you very well.","The manager is new.","She arrived on Monday."], why:"He shares an opinion he heard. Offering a different view responds to it."},
 {t:"cr", line:"W: Do you think it’s worth taking the express train?", o:["Only if you’re in a hurry.","I took it last year.","It’s worth fifty dollars.","Express mail is faster."], why:"She asks for advice. A conditional recommendation answers her."},
 {t:"cr", line:"M: I wish I’d started this project sooner.", o:["It’s not too late to ask for help.","I started it last week.","I wish you a good day.","The project is due soon."], why:"He regrets something. Offering encouragement fits."},
 {t:"cr", line:"W: There’s no way we’ll finish painting by tonight.", o:["Then let’s finish the rest tomorrow.","The paint is blue.","We finished dinner early.","I know the way."], why:"She doubts they can finish. Suggesting a new plan is the logical reply."},
 {t:"cr", line:"M: Aren’t you supposed to be at the dentist right now?", o:["They moved my appointment to Friday.","Yes, I suppose so.","My teeth are fine.","The dentist is nice."], why:"He is surprised to see her. Explaining the change answers the question."},
 {t:"conv", setting:"Listen to a conversation between a student and a lab supervisor.", lines:[
  "M: Excuse me. The microscope at station six won’t focus. I’ve tried everything.",
  "W: Hmm, that’s the second complaint about that one this week. Did you clean the lens?",
  "M: Yes, twice. The image is still blurry at the highest magnification.",
  "W: Then it probably needs a technician. I’ll put a sign on it. For today, you can use the one at station two. Its owner switched to a different lab section.",
  "M: Thanks. Will I be able to finish my samples before the lab closes? I’ve lost about twenty minutes.",
  "W: If you need more time, the lab is open on Friday morning for make-up work. Just tell your instructor."], qs:[
  {q:"Why does the supervisor think the microscope needs a technician?", o:["Cleaning the lens did not solve the problem, and others had complained.","The student damaged it by accident while cleaning it.","It is the oldest microscope still used in the lab.","It cannot be used at any level of magnification."], why:"The student cleaned the lens twice, and it is “the second complaint about that one this week.”"},
  {q:"What does the supervisor suggest if the student cannot finish?", o:["Coming back on Friday morning","Sharing a microscope with another student","Skipping the last samples","Asking the technician for help"], why:"“The lab is open on Friday morning for make-up work.”"}
 ]},
 {t:"ann", setting:"Listen to an announcement at a student meeting.", lines:[
  "W: Before we finish, a message from the campus radio station. They’re looking for new presenters and producers for next semester. No experience is necessary, but applicants must be available for at least one two-hour shift a week and attend a training weekend in January. Producers will mostly work behind the scenes, editing audio and planning programs, so if you’re nervous about speaking on air, that might be the role for you. Applications close on December first."], qs:[
  {q:"What is required of all applicants?", o:["They must work at least two hours a week and attend training.","They must already have some experience working in radio.","They must know how to edit audio before the training.","They must present a program on air every single week."], why:"Applicants “must be available for at least one two-hour shift a week and attend a training weekend.”"},
  {q:"Why does the speaker mention people who are nervous about speaking?", o:["To suggest a role that does not require being on air","To warn them that the training is difficult","To explain why presenters are paid more","To encourage them to practice before applying"], why:"Producers “mostly work behind the scenes,” so they might suit people “nervous about speaking on air.”"}
 ]},
 {t:"talk", setting:"Listen to part of a talk in an engineering class.", lines:[
  "M: In 1940, a new suspension bridge opened over the Tacoma Narrows in Washington State. It was long, narrow and, by the standards of the time, very elegant. Even during construction, workers noticed that the road surface moved up and down in moderate wind. Drivers nicknamed it “Galloping Gertie.”",
  "M: Just four months after it opened, on a day with winds of about sixty-five kilometers an hour, which isn’t extreme, the bridge began to twist violently. Within an hour it tore apart and fell into the water. Fortunately, the only victim was a dog left in a car.",
  "M: Now, you’ll often hear that the collapse was caused by resonance, the same effect as a singer breaking a glass. That explanation is too simple. Engineers today describe it as aeroelastic flutter: the wind and the twisting deck fed energy into each other, so each twist made the next one larger. The lesson changed bridge design. Since then, engineers have tested models of large bridges in wind tunnels before building them."],qs:[
  {q:"What is the talk mainly about?", o:["Why a bridge collapsed and what engineers learned from it","How suspension bridges are built","The history of bridges in Washington State","How wind tunnels were invented"], why:"The professor describes the collapse, corrects a common explanation and gives the lesson for design."},
  {q:"Why does the professor mention that the wind was not extreme?", o:["To show that the bridge failed in ordinary conditions","To explain why there were few victims","To compare the bridge with modern ones","To suggest that the weather report was wrong"], why:"The bridge failed in winds of about sixty-five kilometers an hour, “which isn’t extreme.”"},
  {q:"What is the professor’s opinion of the resonance explanation?", o:["It oversimplifies what happened.","It is completely correct.","It was invented by the bridge’s designers.","It explains why drivers liked the bridge."], why:"“That explanation is too simple.” He describes a more complex process instead."},
  {q:"According to the professor, how did the collapse change bridge design?", o:["Bridge models are now tested in wind tunnels.","Bridges are no longer built over water.","Suspension bridges are now shorter.","Bridges are closed whenever it is windy."], why:"“Engineers have tested models of large bridges in wind tunnels before building them.”"}
 ]}
],
down:[
 {t:"cr", line:"W: What time does the bank open?", o:["At nine o’clock.","On Main Street.","It’s a big bank.","I opened an account."], why:"“What time” asks for a clock time."},
 {t:"cr", line:"M: Is this your first time in Bolivia?", o:["No, I came here two years ago.","Bolivia is very beautiful.","It’s my first coffee.","I live in the city."], why:"A yes/no question about past visits. The answer gives the earlier visit."},
 {t:"cr", line:"W: Can you close the door, please?", o:["Sure, no problem.","The door is brown.","It closes at six.","I’m very close."], why:"A polite request. Agreeing is the natural reply."},
 {t:"cr", line:"M: Where did you park the car?", o:["Behind the supermarket.","Yesterday afternoon.","It’s a red car.","For two hours."], why:"“Where” asks for a place."},
 {t:"cr", line:"W: How much is a ticket to the museum?", o:["Five dollars for students.","It opens at ten.","It’s next to the park.","Very interesting."], why:"“How much” asks for a price."},
 {t:"cr", line:"M: Let’s take a taxi. It’s late.", o:["Good idea. I’m tired.","I took it home.","It’s eight o’clock.","The taxi is yellow."], why:"A suggestion. Agreeing with a reason fits."},
 {t:"cr", line:"W: Why are you wearing a jacket?", o:["Because it’s cold this morning.","It’s from my sister.","It’s very nice.","In the closet."], why:"“Why” asks for a reason."},
 {t:"cr", line:"M: Are you coming to the meeting tomorrow?", o:["Yes, I’ll be there at nine.","The meeting was long.","I met him tomorrow.","It’s in room ten."], why:"A yes/no question about plans. “Yes” plus a time answers it."},
 {t:"conv", setting:"Listen to a conversation at a post office.", lines:[
  "W: Good morning. I’d like to send this package to my brother in Chile.",
  "M: Sure. Do you want regular or express mail?",
  "W: What’s the difference?",
  "M: Regular takes about ten days and costs eighty bolivianos. Express takes three days and costs two hundred.",
  "W: His birthday is in two weeks, so regular is fine."], qs:[
  {q:"Where is the woman sending the package?", o:["To Chile","To her birthday party","To another city in Bolivia","To her office"], why:"She wants to send it “to my brother in Chile.”"},
  {q:"Why does the woman choose regular mail?", o:["The package will still arrive in time.","Express mail is not available.","Regular mail is safer.","The package is very heavy."], why:"Regular mail takes about ten days, and the birthday is “in two weeks.”"}
 ]},
 {t:"ann", setting:"Listen to an announcement in a supermarket.", lines:[
  "W: Good evening, shoppers. The supermarket will close in fifteen minutes, at nine o’clock. Please bring your items to the checkout now. Today, all bread and fruit is half price until closing. Thank you for shopping with us."], qs:[
  {q:"When will the supermarket close?", o:["In fifteen minutes","At ten o’clock","In one hour","Tomorrow morning"], why:"It “will close in fifteen minutes, at nine o’clock.”"},
  {q:"What is cheaper today?", o:["Bread and fruit","Milk and eggs","Meat and fish","All products"], why:"“All bread and fruit is half price until closing.”"}
 ]},
 {t:"talk", setting:"Listen to part of a talk in a biology class.", lines:[
  "M: Many people believe that chameleons change color to hide, so they look like the leaves or branches around them. That is partly true, but it is not the main reason.",
  "M: Scientists now know that chameleons change color mostly to communicate and to control their temperature. When two males meet, they often become very bright to show they are strong. A calm chameleon is usually darker or greener. And on a cold morning, a chameleon can turn darker, because dark colors absorb more heat from the sun. So color is a kind of language for chameleons, and also a way to stay warm."], qs:[
  {q:"What is the talk mainly about?", o:["The real reasons chameleons change color","Where chameleons live","What chameleons eat","How to keep a chameleon as a pet"], why:"The professor corrects a common belief and gives the main reasons for color change."},
  {q:"What does the professor say about hiding?", o:["It is not the main reason for changing color.","It is the only reason for changing color.","Chameleons never try to hide.","It works only at night."], why:"Hiding “is partly true, but it is not the main reason.”"},
  {q:"Why do male chameleons become bright when they meet?", o:["To show that they are strong","To hide from each other","To get warm","To find food"], why:"Males “become very bright to show they are strong.”"},
  {q:"Why might a chameleon turn darker in the morning?", o:["To absorb more heat","To look calm","To hide in the shadows","To attract insects"], why:"“Dark colors absorb more heat from the sun.”"}
 ]}
]
},

writing:{
 bas:[
  {ctx:"Are you going to the party tonight?", parts:["=I","can’t,","because","I","have","an exam","=tomorrow."]},
  {ctx:"Did you find a new apartment?", parts:["=Yes, the","one","we","saw","on Monday","is","=perfect."], why:"The relative clause <i>we saw on Monday</i> describes <i>the one</i>."},
  {ctx:"What did the coach want to know?", parts:["=He","wanted","to know","why","I","had missed","=practice."], why:"Reported questions use statement order: <i>why I had missed</i>."},
  {ctx:"Is the café on the corner any good?", parts:["=It","has","the best","coffee","I","have ever","=tried."]},
  {ctx:"Can you help me move on Saturday?", parts:["=I’d","be","happy","to","help","you","=in the morning."]},
  {ctx:"Have you heard from the university?", parts:["=I","was","told","that","I","would","=hear soon."], why:"Passive reporting: <i>I was told that</i> + statement."},
  {ctx:"Why is the professor’s office closed?", parts:["=Do","you","know","whether","she","is","=on vacation?"], why:"After <i>Do you know whether</i>, use statement order: <i>she is</i>."},
  {ctx:"How did you learn to cook so well?", parts:["=My","grandmother","taught","me","when","I","=was young."]},
  {ctx:"Should I bring my laptop to the workshop?", parts:["=You","won’t","need","it","because","computers","=are provided."]},
  {ctx:"Which train should I take?", parts:["=Take","the","one","that","leaves","=at noon."]}
 ],
 email:{
  scenario:"<p>You live in an apartment building. Many residents have complained that the shared courtyard is dirty and that nobody takes care of the plants. You want to organize a clean-up day with your neighbors.</p>",
  reader:"all the residents of your building",
  bullets:["Explain why you are writing.","Describe your plan for the clean-up day.","Ask your neighbors to help in a specific way."],
  to:"residents@edificiolosalamos.com", subject:"Courtyard clean-up day",
  model:"<p>Dear neighbors,</p><p>My name is Gabriel Suárez, and I live in apartment 4B. Like many of you, I have noticed that our courtyard has become dirty, and several of the plants have died because nobody waters them. I think we could make it a pleasant place again if we work together.</p><p>I would like to propose a clean-up day on Saturday, May 18, from 9:00 to 12:00. In the first hour, we could collect trash and sweep the paths. After that, we could plant new flowers in the empty pots and paint the old benches. I have already asked the building manager, and he agreed to pay for the paint and the plants.</p><p>Could you please reply to this email by Wednesday and tell me if you can come? It would also help if a few people could bring brooms, gloves or garden tools.</p><p>Thank you, and I hope to see many of you there!</p><p>Gabriel Suárez</p>"
 },
 disc:{
  course:"education", prof:"Dr. Paredes",
  question:"<p>Universities choose students in different ways. In some countries, admission depends mainly on a single national entrance exam. In others, universities look mostly at students’ grades over several years of secondary school. Which approach do you think is fairer, and why?</p>",
  posts:[["Camila","I think a single exam is fairer. Every student answers the same questions on the same day, so it doesn’t matter which school you went to. Some schools give much higher grades than others for the same quality of work."],["Rodrigo","I prefer school grades. One bad day can ruin years of hard work. A friend of mine was sick on the day of the exam and lost her place at the university she wanted, even though she was one of the best students in our class."]],
  model:"<p>Both Camila and Rodrigo make strong points, but I believe the fairest system combines both methods, because each one corrects the weakness of the other. Camila is right that grades are not comparable between schools: in my city, private schools often give higher grades than public schools for similar work. However, Rodrigo’s example shows that a single exam measures performance on one day, not ability. A combined system could give, for example, sixty percent of the decision to an exam and forty percent to school grades. Students would still compete on equal questions, but one bad morning would not erase years of effort. Chile uses a system similar to this, and it also gives extra points to students who rank in the top of their own school, which helps talented students from weaker schools. I think that kind of balance is more just than either approach alone.</p>"
 }
},

speaking:{
 lr:{setting:"You are starting a part-time job as an assistant at a veterinary clinic. Listen to the veterinarian and repeat what she says.", items:[
  "Good morning, and welcome to the clinic.",
  "Dogs must stay on a leash in the waiting room.",
  "Please weigh every animal before the appointment.",
  "Cats wait in the small room on the left side.",
  "Clean the examination table after each patient leaves.",
  "Ask owners whether their pets have any allergies to medicine.",
  "If an animal arrives with a serious injury, call me immediately, even if I am with another patient."
 ]},
 iv:{topic:"A research study about sports and physical activity", intro:"You have agreed to take part in a research project about how people stay active. A researcher will ask you some questions online.", qs:[
  "Thank you for joining. First, what kind of physical activity do you do in a normal week?",
  "Some people prefer team sports, while others prefer activities like running or swimming alone. Which do you prefer, and why?",
  "Many schools have reduced the hours of physical education to give more time to subjects like math and science. Do you think this is a good decision? Why or why not?",
  "Final question. Some companies pay part of their employees’ gym memberships or give them time to exercise during the workday. Do you think companies should do this? Why or why not?"
 ], models:[
  "In a normal week, I try to do something active at least three times. On Monday and Thursday evenings, I go to a small gym near my house for about an hour, and on Saturday mornings I play basketball with some friends from my old school. I also walk to the university when the weather is good, which takes about twenty-five minutes each way.",
  "I prefer team sports, mainly because of the social side. When I run alone, I get bored after twenty minutes and start looking at my watch. But when I play basketball, I forget about the time because I’m focused on the game and my teammates. Also, if I don’t go, the team is missing a player, so I feel more responsible and I almost never skip it.",
  "I don’t think it’s a good decision. Math and science are important, but students who sit all day find it harder to concentrate. When I was in high school, we had physical education on Tuesday mornings, and I always felt more awake in the classes after it. I think schools should keep at least two hours a week of exercise, because it actually helps students learn better in other subjects.",
  "Yes, I think it’s a smart idea for companies. Employees who exercise are usually healthier, so they miss fewer days of work and they have more energy. My aunt works for a bank that gives employees one hour a week to exercise, and she says the atmosphere in the office is much better. It costs the company some money, but I think it gets that money back in productivity."
 ]}
}
};
