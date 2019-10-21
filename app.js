
var allOneHundred = [];
var allTwoHundred =[];
var allThreeHundred = [];


function Easy(question, answer, pointValue) {
  this.question = question;
  this.answer = answer;
  this.pointValue = pointValue;
  allOneHundred.push(this);
}

function Medium(question, answer, pointValue){
  this.question = question;
  this.answer = answer;
  this.pointValue = pointValue;
  allTwoHundred.push(this);
}

function Hard(question, answer, pointValue){
  this.question = question;
  this.answer = answer;
  this.pointValue = pointValue;
  allThreeHundred.push(this);
}

// Questions
new Easy('Easy Question?', 'maybe', 100);
new Easy('Easy Question 2?', 'maybe 2', 100);
new Easy('Easy Question 3?', 'maybe 3', 100);

new Medium('Medium Question?', 'maybe', 200);
new Medium('Medium Question 2?', 'maybe 2', 200);
new Medium('Medium Question 3?', 'maybe 3', 200);

new Hard('Hard Question?', 'maybe', 300);
new Hard('Hard Question 2?', 'maybe 2', 300);
new Hard('Hard Question 3?', 'maybe 3', 300);

function one(){
  for (var i = 0; i < Easy.length; i++){
    var oneHundQuest = document.getElementsByClassName('oneHund')[i];
    var firstQuestion = document.createElement('p');
    firstQuestion.textContent = `${allOneHundred[i].question}`;
    oneHundQuest.appendChild(firstQuestion);
  }
}
one();

function two(){
  for (var j = 0; j < Medium.length; j++){
    var twoHundQuest = document.getElementsByClassName('twoHund')[j];
    var secondQuestion = document.createElement('p');
    secondQuestion.textContent = `${allTwoHundred[j].question}`;
    twoHundQuest.appendChild(secondQuestion);
  }
}
two();

function three(){
  for (var k = 0; k < Hard.length; k++){
    var threeHundQuest = document.getElementsByClassName('threeHund')[k];
    var thirdQuestion = document.createElement('p');
    thirdQuestion.textContent = `${allThreeHundred[k].question}`;
    threeHundQuest.appendChild(thirdQuestion);
  }
}
three();
