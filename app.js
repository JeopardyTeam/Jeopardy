var questionsOne = ['onehundred', 'onehundred2', 'onehunderd3'];
var questionsTwo = ['twohundred', 'twohundred', 'twohundred'];
var questionsThree = ['questionthree', 'questionthree', 'questionthree'];

function oneHundred(answer, pointValue) {
  this.answer = [];
  this.pointValue = pointValue;
}

function twoHundred(answer, pointValue) {
  this.answer =[];
  this.pointValue = pointValue;
}

function threeHundred(answer, pointValue) {
  this.answer =[];
  this.pointValue = pointValue;
}

var oneHundQuest = document.getElementsByClassName('oneHund')[0];
var oneHundQuest2 = document.getElementsByClassName('oneHund')[1];
var oneHundQuest3 = document.getElementsByClassName('oneHund')[2];

var twoHundQuest = document.getElementsByClassName('twoHund')[0];
var twoHundQuest2 = document.getElementsByClassName('twoHund')[1];
var twoHundQuest3 = document.getElementsByClassName('twoHund')[2];

var threeHundQuest = document.getElementsByClassName('threeHund')[0];
var threeHundQuest2 = document.getElementsByClassName('threeHund')[1];
var threeHundQuest3 = document.getElementsByClassName('threeHund')[2];

function renderQuestOne(){
  var firstQuestion = document.createElement('p');
  var secondQuestion = document.createElement('p');
  var thirdQuestion = document.createElement('p');

  firstQuestion.textContent = `${questionsOne[0]}`;
  secondQuestion.textContent = `${questionsOne[1]}`;
  thirdQuestion.textContent = `${questionsOne[2]}`;

  oneHundQuest.appendChild(firstQuestion);
  oneHundQuest2.appendChild(secondQuestion);
  oneHundQuest3.appendChild(thirdQuestion);
}

function renderQuestTwo(){
  var firstQuestion = document.createElement('p');
  var secondQuestion = document.createElement('p');
  var thirdQuestion = document.createElement('p');

  firstQuestion.textContent = `${questionsTwo[0]}`;
  secondQuestion.textContent = `${questionsTwo[1]}`;
  thirdQuestion.textContent = `${questionsTwo[2]}`;

  twoHundQuest.appendChild(firstQuestion);
  twoHundQuest2.appendChild(secondQuestion);
  twoHundQuest3.appendChild(thirdQuestion);
}

function renderQuestThree(){
  var firstQuestion = document.createElement('p');
  var secondQuestion = document.createElement('p');
  var thirdQuestion = document.createElement('p');

  firstQuestion.textContent = `${questionsThree[0]}`;
  secondQuestion.textContent = `${questionsThree[1]}`;
  thirdQuestion.textContent = `${questionsThree[2]}`;

  threeHundQuest.appendChild(firstQuestion);
  threeHundQuest2.appendChild(secondQuestion);
  threeHundQuest3.appendChild(thirdQuestion);
}
renderQuestOne();
renderQuestTwo();
renderQuestThree();
oneHundQuest[0];
