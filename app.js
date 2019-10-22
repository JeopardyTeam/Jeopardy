'use strict';

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
new Easy('This tag is needed to run Javascript in an HTML file.', '<script>', 100);
new Easy('DOM stands for?', 'Document Object Model', 100);
new Easy('This selector allows you to target every element in a web page', 'maybe 3', 100);

new Medium('In JavaScript, this operator is used to assign a valie to a variable.', 'equals(=)', 200);
new Medium(' HTML attributes and CSS declarations are examples of _____-_____ pairs.', 'key-value', 200);
new Medium('This property allows you to take an element in normal flow and place it as far to the left or the right of the containing element as possible', 'float', 200);

new Hard('This term is used for a function that is associated with (or, attached to) an object', 'method', 300);
new Hard('This tag is used to create a numbered list.', '<ol>', 300);
new Hard('What is the outside component of the CSS Box Model?', 'margin', 300);

function one(){
  for (var i = 0; i < Easy.length; i++){
    var oneHundQuest = document.getElementsByClassName('quest1')[i];
    var firstQuestion = document.createElement('p');
    firstQuestion.textContent = `${allOneHundred[i].question}`;
    oneHundQuest.appendChild(firstQuestion);
  }
}
one();

function two(){
  for (var j = 0; j < Medium.length; j++){
    var twoHundQuest = document.getElementsByClassName('quest2')[j];
    var secondQuestion = document.createElement('p');
    secondQuestion.textContent = `${allTwoHundred[j].question}`;
    twoHundQuest.appendChild(secondQuestion);
  }
}
two();

function three(){
  for (var k = 0; k < Hard.length; k++){
    var threeHundQuest = document.getElementsByClassName('quest3')[k];
    var thirdQuestion = document.createElement('p');
    thirdQuestion.textContent = `${allThreeHundred[k].question}`;
    threeHundQuest.appendChild(thirdQuestion);
  }
}
three();

var overlay =  document.getElementById('overlay').addEventListener('click', off);

function off() {
  document.getElementById('overlay').style.display = 'none';
}

