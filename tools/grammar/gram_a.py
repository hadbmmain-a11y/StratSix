# -*- coding: utf-8 -*-
# Day data: A = main topic, B = new topic. Formats:
# choose/trans: [q, correct, [3 wrong], why]; fte: [sentence with 4 [[..]], wrongIndex, why]; corr: [wrongSentence, correct, [3 wrong], why]
G = {}
G[2]=dict(
 A_name="English word order", B_name="Subject-verb agreement",
 A_notice="<h4>Notice (4 min)</h4><p>Read the pairs. What moves?</p><table class='tbl'><tr><th>Incorrect</th><th>Correct</th></tr><tr><td>She checks <u>usually</u> her email.</td><td>She <b>usually checks</b> her email.</td></tr><tr><td>I watched <u>yesterday</u> a film.</td><td>I watched a film <b>yesterday</b>.</td></tr><tr><td>a wooden big old table</td><td>a <b>big old wooden</b> table</td></tr></table><p><b>Find the pattern:</b> frequency adverbs go before the main verb (after <i>be</i>); the object stays next to the verb; place and time go at the end; adjectives follow a fixed order.</p>",
 A_trap="<h4>Spanish-speaker trap</h4><p>Spanish puts adjectives after the noun (<i>una mesa grande</i>) and lets adverbs move freely (<i>Ella revisa siempre su correo</i>). English does not.</p><p>✗ She checks <b>always</b> her email. &nbsp; ✓ She <b>always checks</b> her email.</p><p>Also remember: an adverb never goes between the verb and its object.</p>",
 A_choose=[
  ["Which sentence is correct?","She usually checks her email.",["She checks usually her email.","Usually she her email checks.","She checks her usually email."],"Frequency adverb before the main verb."],
  ["He ___ late on Mondays.","is always",["always is","is always being","does always"],"After <i>be</i>, the adverb follows the verb."],
  ["I bought ___.","a new brown leather bag",["a leather brown new bag","a brown new leather bag","a leather new brown bag"],"Age, color, material."],
  ["Which sentence is correct?","I go to the gym every day.",["I go every day to the gym.","Every day I to the gym go.","I to the gym go every day."],"Place before time."],
  ["She speaks ___.","English very well",["very well English","well English very","English well very"],"Verb, object, then the adverb."]],
 A_fte=[
  ["She [[checks]] [[usually]] [[her email]] [[in the morning]].",1,"<i>usually</i> goes before the verb: <i>She usually checks…</i>"],
  ["I [[watched]] [[yesterday]] [[a film]] [[with my friends]].",1,"The time word goes after the object: <i>watched a film yesterday</i>."],
  ["He [[speaks]] [[very well]] [[English]] [[and Spanish]].",1,"<i>speaks English and Spanish very well</i>."],
  ["She [[always]] [[is]] [[happy]] when [[she]] cooks.",1,"After <i>be</i>: <i>She is always happy</i>."],
  ["We [[enough]] [[have]] [[time]] [[to finish]].",0,"<i>We have enough time</i>."],
  ["[[Please]] [[call]] [[up me]] [[tomorrow]].",2,"With a pronoun: <i>call me up</i>."]],
 A_corr=[
  ["She checks usually her email.","She usually checks her email.",["Usually checks she her email.","She checks her usually email.","She her email usually checks."],"Adverb before the main verb."],
  ["I watched yesterday a film.","I watched a film yesterday.",["I a film watched yesterday.","Yesterday a film I watched.","I yesterday a film watched."],"Object next to the verb, time at the end."],
  ["He always is late.","He is always late.",["He is late always.","He late is always.","Always is he late."],"The adverb follows <i>is</i>."],
  ["I have a wooden big table.","I have a big wooden table.",["I have a table wooden big.","I have wooden a big table.","I have a wooden table big."],"Size before material."],
  ["She speaks very well English.","She speaks English very well.",["She very well speaks English.","She speaks well very English.","She English speaks very well."],"Object, then manner."]],
 A_trans=[
  ["Put <i>usually</i> in the sentence: “She drinks coffee in the morning.”","She usually drinks coffee in the morning.",["She drinks usually coffee in the morning.","She drinks coffee in usually the morning.","She drinks coffee in the morning usually."],"Before the main verb."],
  ["Put the words in order: a / table / old / wooden / big","a big old wooden table",["a wooden old big table","an old big wooden table","a big wooden old table"],"Size, age, material."],
  ["Add <i>enough</i>: “The room is not big for all of us.”","The room is not big enough for all of us.",["The room is not enough big for all of us.","The room is enough not big for all of us.","Enough the room is not big for all of us."],"<i>Enough</i> follows an adjective."],
  ["Replace <i>the phone</i> with <i>it</i>: “She picked up the phone.”","She picked it up.",["She picked up it.","She it picked up.","She picked the up it."],"A pronoun goes inside a phrasal verb."]],
 B_notice="<h4>Second topic · Subject-verb agreement (notice)</h4><table class='tbl'><tr><th>Subject</th><th>Verb</th></tr><tr><td>The <b>number</b> of students</td><td>is growing</td></tr><tr><td>A <b>number</b> of students</td><td>are absent</td></tr><tr><td><b>Each</b> of the students</td><td>has a laptop</td></tr><tr><td>The <b>news</b></td><td>is good</td></tr></table><p><b>Rule:</b> the verb agrees with the <i>head</i> of the subject, not with the word next to it. <i>The number of</i> is singular; <i>a number of</i> is plural; <i>each, everyone, news, information, mathematics</i> take a singular verb.</p>",
 B_trap="<p><b>Spanish-speaker trap:</b> <i>la gente</i> (people) is singular in Spanish but <i>people</i> is plural in English: <b>people are</b>, not <i>people is</i>. And <i>informations</i> does not exist in English.</p>",
 B_choose=[
  ["The number of students ___ increasing.","is",["are","were","be"],"<i>The number</i> is singular."],
  ["Each of the students ___ a laptop.","has",["have","are having","having"],"<i>Each</i> is singular."],
  ["The news ___ good today.","is",["are","were","be"],"<i>News</i> is uncountable and singular."],
  ["A number of students ___ absent.","are",["is","was","has"],"<i>A number of</i> is plural."]],
 B_fte=[
  ["[[The number]] of [[applicants]] [[have]] [[increased]].",2,"<i>The number … has increased</i>."],
  ["[[Everyone]] in the class [[are]] [[ready]] to [[begin]].",1,"<i>Everyone is</i>."],
  ["The [[information]] [[are]] [[useful]] [[for students]].",1,"<i>Information is</i>."],
  ["[[Mathematics]] [[are]] [[my]] favorite [[subject]].",1,"<i>Mathematics is</i>."]],
 B_corr=[
  ["The news are good.","The news is good.",["The news were good.","The news be good.","The news are being good."],"<i>News</i> is singular."],
  ["Each of the students have a book.","Each of the students has a book.",["Each of the students are having a book.","Each of the students having a book.","Each of the student have a book."],"<i>Each</i> takes <i>has</i>."],
  ["A lot of people was waiting.","A lot of people were waiting.",["A lot of people is waiting.","A lot of people waits waiting.","A lot of people was wait."],"<i>People</i> is plural."]],
 cum=[
  ["Which sentence is correct?","She often visits her grandmother.",["She visits often her grandmother.","Often visits she her grandmother.","She often her grandmother visits."],"Adverb before the verb."],
  ["Which phrase is correct?","a small old Italian car",["an Italian old small car","a old small Italian car","a small Italian old car"],"Size, age, origin."],
  ["Which sentence is correct?","I finished my homework last night.",["I finished last night my homework.","I last night finished my homework.","Last night my homework I finished."],"Object then time."],
  ["Which sentence is correct?","They are never late.",["They never are late.","They are late never.","Never they are late."],"After <i>be</i>."],
  ["The number of cars in the city ___ every year.","grows",["grow","are growing","have grown"],"<i>The number</i> is singular."],
  ["The information in these books ___ useful.","is",["are","were","be"],"<i>Information</i> is singular."],
  ["Each student ___ a different topic.","has",["have","are having","having"],"<i>Each</i> is singular."],
  ["A few of my classmates ___ from Cochabamba.","are",["is","was","has"],"<i>A few of</i> + plural."]],
 hw=[("Spanish speakers often put adjectives after nouns and move adverbs freely. Choose three English word-order rules from today and, for each one, explain how it differs from Spanish and what mistake it could cause in an email. Give one example sentence for each rule.",60),
     ("Why do you think English has a fixed order for adjectives (opinion, size, age…)? What would a reader think if the order was wrong: is it a serious mistake or a small one? Give reasons.",50)],
 ck=["I used adverbs of frequency before the main verb (or after be).","I kept the object next to its verb and put time at the end.","My verbs agree with their subjects.","I read my email once before sending it."],
 chk_re="\\b(always|usually|often|never|sometimes)\\b")
G[3]=dict(
 A_name="Question forms", B_name="Tenses: present perfect and past simple",
 A_notice="<h4>Notice (4 min)</h4><table class='tbl'><tr><th>Statement</th><th>Question</th></tr><tr><td>She works in the library.</td><td>Where <b>does</b> she <b>work</b>?</td></tr><tr><td>They are going to Cochabamba.</td><td>Where <b>are</b> they going?</td></tr><tr><td>Someone called you.</td><td><b>Who called</b> you?</td></tr></table><p><b>Find the pattern:</b> question word + auxiliary + subject + base verb. When the question word <i>is</i> the subject (<i>Who called you?</i>), there is no auxiliary.</p>",
 A_trap="<h4>Spanish-speaker trap</h4><p>Spanish questions need no auxiliary: <i>¿Dónde trabaja ella?</i> English needs <i>do, does</i> or <i>did</i>.</p><p>✗ Where <b>she works</b>? &nbsp; ✓ Where <b>does she work</b>?</p><p>✗ What <b>means</b> this word? &nbsp; ✓ What <b>does</b> this word <b>mean</b>?</p>",
 A_choose=[
  ["___ she work in the library?","Does",["Do","Is","Are"],"<i>Does</i> with <i>she</i>."],
  ["Where ___ you going?","are",["do","does","is"],"Present continuous: <i>are … going</i>."],
  ["What time ___ the class usually start?","does",["do","is","are"],"<i>does + subject + base verb</i>."],
  ["___ didn’t you call me?","Why",["Who","Whose","Which"],"Asking for a reason."],
  ["Who ___ the window?","broke",["did broke","does broke","was broke"],"When <i>who</i> is the subject, use the past simple."]],
 A_fte=[
  ["[[Where]] [[does]] she [[works]] [[now]]?",2,"After <i>does</i>, use the base verb: <i>work</i>."],
  ["[[What]] [[means]] this word [[in]] [[English]]?",1,"<i>What does this word mean</i>?"],
  ["[[Did]] she [[went]] [[to]] [[the library]]?",1,"After <i>did</i>, use the base verb: <i>go</i>."],
  ["[[How]] [[many]] [[students]] [[is]] there in the class?",3,"<i>How many students are there</i>?"],
  ["[[Who]] [[did]] [[call]] you [[yesterday]]?",1,"A subject question has no <i>did</i>: <i>Who called you?</i>"],
  ["[[Are]] you [[have]] [[a]] [[car]]?",1,"<i>Do you have a car?</i>"]],
 A_corr=[
  ["Where she works?","Where does she work?",["Where she does work?","Where does she works?","Where works she?"],"Question word + auxiliary + subject + base verb."],
  ["What means this word?","What does this word mean?",["What does mean this word?","What this word means?","What means does this word?"],"<i>mean</i> needs <i>does</i>."],
  ["Did she went to class?","Did she go to class?",["Did she goes to class?","Does she went to class?","Did she gone to class?"],"Base verb after <i>did</i>."],
  ["How many students is there in the class?","How many students are there in the class?",["How many students there is in the class?","How many students is in class?","How many there are students in the class?"],"Plural: <i>are there</i>."],
  ["Who did call you?","Who called you?",["Who does call you?","Who you called?","Who called to you?"],"No auxiliary in a subject question."]],
 A_trans=[
  ["“She works in the library.” Ask about the place.","Where does she work?",["Where she works?","Where works she?","Where does she works?"],"<i>does</i> + base verb."],
  ["“They are going to Cochabamba.” Ask about the place.","Where are they going?",["Where do they going?","Where they are going?","Where going are they?"],"<i>are</i> + subject + <i>-ing</i>."],
  ["“Someone called you.” Ask about the person.","Who called you?",["Who did call you?","Who does called you?","Who you called?"],"Subject question: no auxiliary."],
  ["“He doesn’t like coffee.” Ask for the reason.","Why doesn’t he like coffee?",["Why he doesn’t like coffee?","Why does he not likes coffee?","Why doesn’t he likes coffee?"],"Negative question: <i>Why doesn’t he like…?</i>"]],
 B_notice="<h4>Second topic · Present perfect and past simple (notice)</h4><table class='tbl'><tr><th>Present perfect</th><th>Past simple</th></tr><tr><td>I <b>have lived</b> in Santa Cruz <b>since</b> 2018. (still true)</td><td>I <b>lived</b> in Tarija <b>in</b> 2015. (finished)</td></tr><tr><td>She <b>has finished</b> the report. (result now)</td><td>She <b>finished</b> it <b>at five</b>. (a time)</td></tr></table><p><b>Rule:</b> the present perfect connects the past to now (<i>since, for, already, ever</i>). The past simple names a finished time (<i>yesterday, in 2015, last week</i>).</p>",
 B_trap="<p><b>Spanish-speaker trap:</b> <i>Vivo aquí desde 2018</i> uses the present in Spanish. English needs the present perfect: ✗ I live here since 2018. ✓ I <b>have lived</b> here since 2018.</p>",
 B_choose=[
  ["I ___ in Santa Cruz since 2018.","have lived",["live","lived","am living"],"<i>since</i> needs the present perfect."],
  ["She ___ the report yesterday.","finished",["has finished","finishes","is finishing"],"<i>yesterday</i> needs the past simple."],
  ["How long ___ English? (You still study it.)","have you studied",["did you study","do you study","are you study"],"Still true now: present perfect."],
  ["I ___ never tried sushi.","have",["did","do","was"],"<i>have never tried</i>."]],
 B_fte=[
  ["[[I]] [[live]] [[here]] [[since]] 2018.",1,"<i>I have lived here since 2018</i>."],
  ["Yesterday I [[have seen]] a film [[with]] [[my]] [[friends]].",0,"<i>Yesterday I saw</i>: past simple."],
  ["How long [[do]] [[you]] [[study]] [[English]]?",0,"<i>How long have you studied English?</i>"],
  ["I [[am]] [[never]] [[eaten]] [[sushi]].",0,"<i>I have never eaten sushi.</i>"]],
 B_corr=[
  ["I live here since 2018.","I have lived here since 2018.",["I am living here since 2018.","I lived here since 2018.","I have live here since 2018."],"<i>since</i> + present perfect."],
  ["She has finished yesterday.","She finished yesterday.",["She finishes yesterday.","She has finish yesterday.","She was finished yesterday."],"A finished time needs the past simple."],
  ["I am studying English for three years.","I have been studying English for three years.",["I study English since three years.","I was studying English for three years.","I have study English for three years."],"Still continuing: present perfect continuous."]],
 cum=[
  ["Which question is correct?","What time does the class start?",["What time starts the class?","What time the class starts?","What time does the class starts?"],"Question word + auxiliary + subject + base verb."],
  ["Which question is correct?","Who called you?",["Who did call you?","Who does called you?","Who you called?"],"Subject question."],
  ["Which question is correct?","Where do they live?",["Where they live?","Where lives they?","Where do they lives?"],"<i>do</i> + base verb."],
  ["Which sentence is correct?","I have worked here since March.",["I work here since March.","I worked here since March.","I am working here since March."],"<i>since</i> + present perfect."],
  ["Which sentence is correct?","We visited Sucre last year.",["We have visited Sucre last year.","We visit Sucre last year.","We were visit Sucre last year."],"A finished time: past simple."],
  ["Which sentence is correct? (Day 2)","She usually checks her email.",["She checks usually her email.","Usually she her email checks.","She checks her usually email."],"Adverb before the verb."],
  ["The news ___ good. (Day 2)","is",["are","were","be"],"<i>News</i> is singular."],
  ["Which phrase is correct? (Day 2)","a big old wooden table",["a wooden big old table","a old big wooden table","a big wooden old table"],"Size, age, material."]],
 hw=[("A friend says: “English questions are illogical. Spanish just raises the voice and keeps the same words.” Compare how the two languages form questions and explain which is easier to use accurately. Use at least two correct English questions as examples.",50),
     ("When do you use the present perfect and when the past simple? Explain the difference with two pairs of your own sentences about your life, and say what the reader understands in each case.",50)],
 ck=["I formed questions with the auxiliary in the right place.","I used the present perfect for ‘since’ and ‘for’, and the past simple for finished times.","I used at least one question in my email.","I read my email once before sending it."],
 chk_re="\\b(have|has) (lived|worked|studied|been)\\b")
