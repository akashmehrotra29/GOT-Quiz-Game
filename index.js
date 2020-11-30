
var readlineSync = require("readline-sync");

var score = 0;
var highScore = 0;

var username = readlineSync.question("What is your name? ");
console.log ("Hi! "+ username +". Welcome to Game of Thrones Quiz. ");

console.log ("--------------------");

var check = readlineSync.question ("Do you want to start quiz? [Y/N] \n");


if (check == "N")
{
 process.exit(0);
}

console.log ("--------------------");
  
console.log ("Pick one option. Enter your answer as a b c or d");

function play (ques, ans)
{
  var user_ans = readlineSync.question(ques);

  if (user_ans === ans) 
  {
    console.log ("Correct Answer!!");
    score++;
  }
  else
  {
    console.log ("Incorrect Answer");
  }
}

var scores = [{name:"Alex", points:"12"}, {name:"John", points:"12"},
{name:"James", points:"11"}, {name:"Sam", points:"10"}, {name:"Cloe", points:"10"}];



var questions = [{ques:"1) Who was responsible for the creation of the Night King? \n a)The Lord of Light \n b)The Children of the Forest \n c)The Drowned God \n d)The First Men \n", ans: "b"}, 

{ques:"In the TV show, what was Hodor called before he got his tragic door-holding nickname? \n a)Wylis \n b)Horys \n c)Myrys \n d)Gladys \n", ans: "a"}, 

{ques:"Who was the leader of the Golden Company sellswords when Dany ransacked King’s Landing? \n a)Wes Borland \n b)Harry Strickland \n c)Kiefer Sutherland \n d)Robert Westland\n", ans:"b"},

{ques:"Dany’s dragons are (or were) called Drogon, Viserion and ____? \n a)Dougal \n b)Vhagar \n c)Rhaegal \n d)Balerion \n", ans:"c"},

{ques:"Who said: 'I don’t plan on knitting by the fire while men fight for me'? \n a)Lyanna Mormont \n b)Sansa Stark \n c)Ser Brienne of Tarth \n d)Olenna Tyrell \n", ans:"a"},

{ques:"Who’s this grizzled chap with Ser Jorah and Daenerys? \n a)Ser Elrick Sarsfield \n b)Ser Balon Swann \n c)Ser Royland Degore \n d)Ser Barristan Selmy \n", ans:"d"},

{ques:"Where is the House of Black and White, the training temple of the Faceless Men? \n a)Qarth \n b)Braavos \n c)Meereen \n d)No one knows \n", ans:"b"},

{ques:"Which relative did Euron Greyjoy murder to take the Salt Throne of the Iron Islands? \n a)His brother \n b)His uncle \n c)His nephew \n d)His cousin \n", ans:"a"},

{ques:"What is the name of Arya’s sword? \n a)Ice \n b)Pointy \n c)Fang \n d)Needle \n", ans:"d"},

{ques:"In which King’s Landing slum did Gendry grow up? \n a)Flea Bottom \n b)Rat Bottom \n c)Rhaenys’s Hill \n d)Dragonpit \n", ans:"a"},

{ques:"Who said: 'Chaos isn't a pit. Chaos is a ladder'? \n a)Lord Varys \n b)Petyr Baelish ('Littlefinger') \n c)Cersei Lannister \n d)Faris Rotterk \n", ans:"b"},

{ques:"Who had the honour of killing Petyr Baelish? \n a)Jon Snow \n b)Sansa Stark \n c)Brienne \n d)Arya Stark \n", ans:"d"},

{ques:"The King Beyond the Wall, Mance Rayder, was roasted alive on whose orders? \n a)Cersei Lannister \n b)Daenerys Targaryen \n c)Stannis Baratheon \n d)Roose Bolton \n", ans:"c"},

{ques:"What were the first words King Robert said to Ned Stark in episode one of season one? \n a)'You’ve got fat.' \n b)'You’ve not changed.' \n c)'You look old.' \n d)'Your hair looks terrible.' \n", ans:"a"},

{ques:"What's the name of the explosive that gave the Lannisters the edge in the Battle of Blackwater? \n a)Wildfire \n b)Dragonfire \n c)Godsfire \n d)Pantsonfire \n", ans:"a"}
]; 

  console.log ("--------------------");

  console.log ("Welcome to Level 1");
  
  for (var i=0; i<5; i++)
  {
    play (questions[i].ques, questions[i].ans);
  }

  console.log ("Your total score is: "+score);

  if (score<4)
    process.exit(0);


  console.log ("--------------------");

  console.log ("Welcome to Level 2");

  for (var i=5; i<10; i++)
  {
    play (questions[i].ques, questions[i].ans);
  }

  console.log ("Your total score is: "+score);

  if (score<8)
    process.exit(0);


  console.log ("--------------------");

  console.log ("Welcome to Level 3");

  for (var i=10; i<15; i++)
  {
    play (questions[i].ques, questions[i].ans);
  }

  console.log ("Your total score is: "+score);


console.log ("--------------------");

console.log ("Top 5 scores are:");

for (var i=0; i<scores.length; i++)
{
  console.log (scores[i].name +" : "+ scores[i].points);
  if (highScore < scores[i].points)
  {
    highScore = scores[i].points;
  }  
}

console.log ("--------------------");

if (score > highScore)
{
  console.log ("Congratulations!! You have made a high score");

  console.log ("Please send screenshot we'll update it.");
}

