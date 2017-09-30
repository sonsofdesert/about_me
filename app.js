'use strict';

var userPoints = 0;

console.log('hello yall');
alert('Welcome to my About Me page!');

//Question 1
var user = prompt('We\'re going to play a fun guessing game to get to know me a bit better. What is your name?');
alert('Hi ' + user + '! Nice to meet you. My name is Eric Cobb and in this game I will ask you 5 simple Yes or No fun-fact questions about me!.');

var answer = prompt('Question 1. Is my favorite food BBQ? Type Yes or No').toLowerCase();
console.log(answer);

if(answer === 'yes' || answer === 'y') {
  alert('Correct! BBQ is the best!');
  //userPoints++;
} else {
  alert('Wrong. I actually love BBQ.');
}

//Question 2
var answer1 = prompt('Question 2. Is my favorite dog breed Black Labs?').toLowerCase();
console.log(answer1);

if(answer1 === 'yes' || answer1 === 'y') {
  alert('That\'s correct! I love just about every breed of dog, but black labs are my favorite!');
  //userPoints++;
} else {
  alert('Sorry, that\'s wrong. Although I do love most dog breeds, Black Lab is my favorite.');
  //userPoints--;
}

//Question 3
var answer2 = prompt('Question 3. Do I enjoy flying?').toLowerCase();
console.log(answer2);

if(answer2 === 'no' || answer2 === 'n') {
  alert('That\'s right. I HATE flying.');
  //userPoints++;
} else {
  alert('No, I\'m sorry that isn\'t correct either. I love to fly!');
  //userPoints--;
}

//Question 4
var answer3 = prompt('Question 4. Am I 6\'3in?').toLowerCase();
console.log(answer3);

if(answer3 === 'yes' || answer3 === 'y') {
  alert('Yes! Keep it up!');
  //userPoints++;
} else {
  alert('Incorrect. I am really 6\'3in tall.');
  //userPoints--;
}

//Question 5 - final question
var answer4 = prompt('Last one! Do I like opera movies?').toLowerCase();
console.log(answer4);

if(answer4 === 'no' || answer4 === 'n') {
  alert('Yes! I can\'t stand them!');
//userPoints++;
} else {
  alert('Sorry, that is not right. I do enjoy scary movies!');
  //userPoints--;
}
