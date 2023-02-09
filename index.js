
var chalk = require('chalk');
var readlineSync = require('readline-sync');
// var userName = readlineSync.question("what s up? ")

function welcome() {
 var userName = readlineSync.question("What's your name? ");
  console.log("Welcome "+ chalk.cyan(userName) + " to HOW MUCH YOU KNOW KRATI QUIZ?");
}

//array of questions for level 1
let questionlevelOne = [
  {
  question: "Who is my favorite superhero? ",
  answer: "Iron Man"
  },
  {
  question: "Which is my favorite song? ",
  answer: "Aashayein"
  },
     {
  question: "Who is closeone to me? ",
  answer: "Uday"
  },
  {
  question: "Which is my favorite street food? ",
  answer: "Panipuri"
  },
  {
  question: "Which is my favorite snacks? ",
  answer: "Dhokla"
  }
]


//array of questions for level 2
let questionlevelTwo = [
  {
  question: "What's the name of my 10th grade school? ",
  answer: "RBM"
  },
  {
  question: "Where do I live? ",
  answer: "Aligarh"
  },
  {
  question: "Who is idol personality to me? ",
  answer: "Shrila Prabupad"
  },
  {
  question: "Which is my favorite Movie? ",
  answer: "Jodha Akbar"
  },
  {
  question: "Which is my favorite fruit? ",
  answer: "Chiku"
  }
]

// data of high score
var highScores = [
  {
    name: "Uday",
    score: 9,
  },
  {
    name: "Usha",
    score: 8,
  },
]

var score=0;
//play function
function play (question,answer) {
  var yourAnswer = readlineSync.question(question)
  if(yourAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("correct!")
    score=score+1
  }
  else{
    console.log("wrong!")
  }
  console.log("-----------------")
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

//level 2 play
function playlevel2 (question,answer) {
  var yourAnswer = readlineSync.question(question)
  if(yourAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("correct!")
    score=score+1
  }
  else{
    console.log("wrong!")
  }
  console.log("-----------------")
}


welcome()
for(let levelOne of questionlevelOne){
  play(levelOne.question,levelOne.answer)
}

//go to level 2 game
if(score < 3){
   console.log("Your final score ",score +" You are not eligible for next Level!")
}else{
   console.log("Your final score ",score + "\nYou sucessfully unlock the next Level! \n-------------------------------")
  for(let levelTwo of questionlevelTwo){
    playlevel2(levelTwo.question,levelTwo.answer)
  }
  showScores()
}