'use strict';
//Empty arrays for questions to be generated in.
var allOneHundred = [];
var allTwoHundred = [];
var allThreeHundred = [];
var totalClicks = 0;

//Audio files used on intro and buttons.
var correctAudio = new Audio('/audio/rightanswer.mp3');
var wrongAudio = new Audio('/audio/Wrong-answer-sound-effect.mp3');
var themeAudio = new Audio('/audio/jeopardy.mp3');

//Object literals for Easy, Medium, Hard questions.
function Easy(question, answer, pointValue) {
  this.question = question;
  this.answer = answer;
  this.pointValue = pointValue;
  allOneHundred.push(this);
}

function Medium(question, answer, pointValue) {
  this.question = question;
  this.answer = answer;
  this.pointValue = pointValue;
  allTwoHundred.push(this);
}

function Hard(question, answer, pointValue) {
  this.question = question;
  this.answer = answer;
  this.pointValue = pointValue;
  allThreeHundred.push(this);
}
//add more questions
// Questions
new Easy('This tag is needed to run Javascript in an HTML file.', '<script>', 100);
new Easy('DOM stands for?', 'Document Object Model', 100);
new Easy('This selector allows you to target every element in a web page', 'maybe 3', 100);
new Easy('Who lives in a pineapple under the sea?', 'Spongebob Squarepants', 100);

new Medium('In JavaScript, this operator is used to assign a value to a variable.', 'equals(=)', 200);
new Medium(' HTML attributes and CSS declarations are examples of _____-_____ pairs.', 'key-value', 200);
new Medium('This property allows you to take an element in normal flow and place it as far to the left or the right of the containing element as possible', 'float', 200);
new Medium('What is the squareroot of 2704?', '50', 200);

new Hard('This term is used for a function that is associated with (or, attached to) an object', 'method', 300);
new Hard('This tag is used to create a numbered list.', '<ol>', 300);
new Hard('What is the outside component of the CSS Box Model?', 'margin', 300);
new Hard('Who was the 25th President of the United States?', 'William McKinley', 300);
var userPoints = [];
// myFunction();

//Three functions that assign questions, buttons, and audio functionability. As well as assigning the user points or subtracting points.
function one() {


  var btn = document.createElement('button');

  for (var i = 0; i < allOneHundred.length; i++) {

    var oneHundQuest = document.getElementsByClassName('quest1')[i];
    var firstQuestion = document.createElement('p');
    var btn = document.createElement('button');
    var wrong = document.createElement('button');

    firstQuestion.textContent = `${allOneHundred[i].question}`;
    oneHundQuest.appendChild(firstQuestion);
    oneHundQuest.appendChild(btn);
    oneHundQuest.appendChild(wrong);
    btn.textContent = 'Correct!';
    // console.log(userPoints);
    btn.onclick = function myScore() {
      correctAudio.play();
      userPoints.push(100);
      myFunction();
      totalClicks++;
      endscreen();
      event.target.outerHTML = '';
    };
    btn.setAttribute('id', 'rightAnswer');
    wrong.textContent = 'Wrong!';
    wrong.onclick = function myScore() {
      wrongAudio.play();
      userPoints.push(-100);
      myFunction();
      totalClicks++;
      endscreen();
      event.target.outerHTML = '';
    };
    wrong.setAttribute('id', 'wrongAnswer');

  }
}
one();

function two() {

  for (var j = 0; j < allTwoHundred.length; j++) {
    var twoHundQuest = document.getElementsByClassName('quest2')[j];
    var secondQuestion = document.createElement('p');
    var btn = document.createElement('button');
    var wrong = document.createElement('button');
    secondQuestion.textContent = `${allTwoHundred[j].question}`;
    twoHundQuest.appendChild(secondQuestion);
    twoHundQuest.appendChild(btn);
    twoHundQuest.appendChild(wrong);
    btn.textContent = 'Correct!';
    btn.onclick = function myScore() {
      correctAudio.play();
      userPoints.push(200);
      myFunction();
      totalClicks++;
      endscreen();
      event.target.outerHTML = '';
    };
    btn.setAttribute('id', 'rightAnswer');
    wrong.textContent = 'Wrong!';
    wrong.onclick = function myScore() {
      wrongAudio.play();
      userPoints.push(-200);
      myFunction();
      totalClicks++;
      endscreen();
      event.target.outerHTML = '';
    };
    wrong.setAttribute('id', 'wrongAnswer');
  }
}
two();


function three() {
  for (var k = 0; k < allThreeHundred.length; k++) {
    var threeHundQuest = document.getElementsByClassName('quest3')[k];
    var thirdQuestion = document.createElement('p');
    var btn = document.createElement('button');
    var wrong = document.createElement('button');
    thirdQuestion.textContent = `${allThreeHundred[k].question}`;
    threeHundQuest.appendChild(thirdQuestion);
    threeHundQuest.appendChild(btn);
    threeHundQuest.appendChild(wrong);
    btn.textContent = 'Correct!';
    btn.onclick = function myScore() {
      correctAudio.play();
      userPoints.push(300);
      myFunction();
      totalClicks++;
      endscreen();
      event.target.outerHTML = '';
    };
    btn.setAttribute('id', 'rightAnswer');
    wrong.textContent = 'Wrong!';
    wrong.onclick = function myScore() {
      wrongAudio.play();
      userPoints.push(-300);
      myFunction();
      totalClicks++;
      endscreen();
      event.target.outerHTML = '';
    };
    wrong.setAttribute('id', 'wrongAnswer');
  }
}
three();

//Saving user scores
User.allUsers = [];


function User(name) {
  this.name = name;
  this.score = 0;
  User.allUsers.push(this);
}

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);
//input validation for username
function handleSubmit(event) {
  event.preventDefault();
  var userName = event.target.username.value;
  console.log(userName);
  new User(userName);
  userForm.reset();
  document.getElementById('overlay').style.transition = '2s';
  fade();
  themeAudio.play();
  document.getElementById('overlay').style.visibility = 'hidden';
  document.getElementById('namedata').textContent = `Player: ${userName}`;
}
function fade() {
  document.getElementById('overlay').style.opacity = '0';
}
parseData();

//add new game button
//add a game over screen with user score then link to leaderboard page

function getSum(total, num) {
  return total + Math.round(num);
}
function myFunction() {
  var score = (userPoints.reduce(getSum, 0));
  console.log(score);
  document.getElementById('scoredata').textContent = `Score: ${score}`;
  if (User.allUsers[0]) {
    User.allUsers[0].score += score;
  }
}
function endscreen() {
  if (totalClicks === 5) {
    console.log(User.allUsers);
    //check local storage
    if ('userData' in localStorage) {
      User.storedUsers = localStorage.getItem('userData');
      // console.log(User.storedUsers);
      User.parsedUsers = JSON.parse(User.storedUsers);
      // console.log(User.parsedUsers);
      for (var i = 0; i < User.parsedUsers.length; i++) {
        new User(User.parsedUsers[i].name, User.parsedUsers[i].score);
        // console.log(User.parsedUsers[i].name, User.parsedUsers[i].score);
      }
      // console.log(User.parsedUsers);
    // renderUsers();
    } else{
      // handleSubmit();
    }

    var User_serialized = JSON.stringify(User.allUsers);
    localStorage.setItem('userData', User_serialized);
    window.location.href = 'highscores.html';
  }

}

// function highscoreData(){

//   var getData = localStorage.getItem('userData');
//   var parseData = JSON.parse(getData);



//   for (var i = 0; i < parseData.length; i++) {
//     var scoreLine = (parseData[i].name, parseData[i].score);
//     var userScore = document.createElement('li');
//     userScore.textContent = scoreLine;
//     var getList = document.getElementById('scoreList');
//     getList.appendChild(userScore);


//   }



// }
// highscoreData();
// function highscore() {
//   var score =(userPoints.reduce(getSum, 0));
//   document.getElementById('yourscore').innerHTML =`Score: ${score}`;
// }
// highscore();


// if (totalClick === 2) {
//   alert('balls');
//   // var overlay2 = document.createElement('div');
//   // overlay2.textContent = `Game Finished! Score: ${this.score}`;
// }

endscreen();
