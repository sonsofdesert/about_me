'use strict';

var userPoints = 1;
console.log('hello yall');
alert('Welcome to my About Me page!');

//Question 1
function question1() {
  var user = prompt('We\'re going to play a fun guessing game to get to know me a bit better. What is your name?');
  alert('Hi ' + user + '! Nice to meet you. My name is Eric Cobb and in this game I will ask you 7 fun-fact questions about me!');

  var answer = prompt('Question 1. Is my favorite food BBQ? Type Yes or No').toLowerCase();
  console.log('First question, user has started with zero points.');

  if(answer === 'yes' || answer === 'y') {
    alert('Correct! BBQ is the best! You also earned 1 point!');
    userPoints++;
  } else {
    alert('Wrong. I actually love BBQ.');
  }
}
question1();

//Question 2
function question2() {
  var answer1 = prompt('Question 2. Is my favorite dog breed Black Labs?').toLowerCase();
  console.log('After Question 1, user has ' + userPoints + '!');

  if(answer1 === 'yes' || answer1 === 'y') {
    alert('That\'s correct! I love just about every breed of dog, but black labs are my favorite! You now have ' + userPoints + ' point(s)! ');
    userPoints++;
  } else {
    alert('Sorry, that\'s wrong. Although I do love most dog breeds, Black Lab is my favorite.');
  }
}
question2();

//Question 3
function question3() {
  var answer2 = prompt('Question 3. Do I enjoy flying?').toLowerCase();
  console.log();
  if(answer2 === 'no' || answer2 === 'n') {
    alert('That\'s right. I hate flying. You have earned ' + userPoints + ' points so far!');
    //userPoints++;
  } else {
    alert('No, I\'m sorry that isn\'t correct either. I love to fly!');
  }
}
question3();

//Question 4
function question4() {
  var answer3 = prompt('Question 4. Am I 6\'5in?').toLowerCase();
  console.log(answer3);
  if(answer3 === 'no' || answer3 === 'n') {
    alert('Correct. I am actually 6\'3\'\'! Now you have ' + userPoints + ' points! Keep it up!');
    userPoints++;
  } else {
    alert('Incorrect. I am really 6\'3in tall.');
  }
}
question4();

//Question 5
function question5() {
  var answer4 = prompt('Last one! Do I like opera movies?').toLowerCase();
  console.log('user answered and has ' + userPoints + ' so far');

  if(answer4 === 'no' || answer4 === 'n') {
    alert('Yes! I can\'t stand them! Congratulations!  You\'ve earned ' + userPoints + ' /5!');
    userPoints++;
  } else {
    alert('Sorry, that is not right. I do enjoy scary movies! But you answered ' + userPoints + ' correctly. Thanks for playing!');
  }
}
question5();

//Question 6 - no more than 4 chances!
function question6() {
  var correctNum = 5;
  var notDone = true;
  var guess;
  for (var tries = 4; tries > 0 && notDone; tries--) {
    guess = prompt('What is my lucky number? Hint - It\'s between 1 and 10.');
    console.log('the value of guess is', guess);
    guess = parseInt(guess);
    if (guess === correctNum) {
      console.log('Entered if inside for loop.', guess);
      alert('That\'s correct!! 5 has always been my lucky number.');
      notDone = false;
    } else if (guess > correctNum) {
      console.log('Entered else if guess > inside for loop.', guess);
      alert('Sorry, that\'s too high. Try again!');
    } else {
      console.log('Entered else if guess < inside for loop.', guess);
      alert('Sorry, that\'s too low. Try again!');
    }
  }
}
question6();

//Questiono 7 - Six chances!
function question7() {
  var favoriteFruits = ['Apple', 'Banana', 'Pineapple', 'Watermelon', 'Honeydew', 'Orange'];
  var guesses = 6;
  var fruitAnswer = prompt('What\'s my favorite fruit?');
  var flag = false;
  while (!flag && guesses > 0) {
    for(var i = 0; i < favoriteFruits.length; i++) {
      console.log('the value of guess is', guesses);
      if(fruitAnswer === favoriteFruits[i].toLowerCase()) {
        flag = true;
      }
    }
    if (flag === true) {
      alert('You got it right! and you had ' + guesses + ' guesses left! You are too good at this game!');
    } else {
      guesses--;
      fruitAnswer = prompt('Sorry you got it wrong. Please guess again.');
    }
  }
}
question7();
