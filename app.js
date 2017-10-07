'use strict';

var questions = [
  ['Question 1. Do I like BBQ?', 'yes', 'y'],
  ['Question 2. Is my favorite dog breed Black Labs?', 'yes', 'y'],
  ['Question 3. Do I enjoy flying?', 'no', 'n'],
  ['Question 4. Am I 6\'5in?', 'no', 'n'],
  ['Last one! Do I like opera movies?', 'no', 'n']
];

var responses = [
  ['Correct! BBQ is the best!', 'Wrong. I actually love BBQ.'],
  ['That\'s correct! I love just about every breed of dog, but black labs are my favorite! You now have point(s)!','Sorry, that\'s wrong. Although I do love most dog breeds, Black Lab is my favorite.'],
  ['That\'s right. I hate flying. You have earned points so far!', 'No, I\'m sorry that isn\'t correct either. I love to fly!'],
  ['Correct. I am actually 6\'3\'\'! Now you have points! Keep it up!', 'Incorrect. I am really 6\'3in tall.'],
  ['Yes! I can\'t stand them! Congratulations!  You\'ve earned', 'Sorry, that is not right. I do enjoy scary movies! But you answered correctly. Thanks for playing!']
];

var userPoints = 0;
console.log('hello yall');
alert('Welcome to my About Me page!');

//Questions
function question() {
  var user = prompt('We\'re going to play a fun guessing game to get to know me a bit better. What is your name?');

  alert('Hi ' + user + '! Nice to meet you. My name is Eric Cobb and in this game I will ask you 7 fun-fact questions about me!');

  var answer;
  for (var i = 0; i < questions.length; i++) {
    answer = prompt(questions[i][0]).toLowerCase();
    console.log(questions[i][0]);

    if(answer === questions[i][1] || answer === questions[i][2]) {
      userPoints++;
      alert(responses[i][0] + ' You have ' + userPoints + ' points.');
    } else {
      alert(responses[i][1] + ' You have ' + userPoints + ' points.');
    }
  }
}
question();

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
      alert('That\'s correct!! 5 has always been my lucky number.' + ' You have ' + userPoints + ' points.');
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
      alert('You got it right! and you had ' + guesses + ' guesses left! You are too good at this game!' + ' You have ' + userPoints + ' points.');
    } else {
      guesses--;
      fruitAnswer = prompt('Sorry you got it wrong. Please guess again.');
    }
  }
}
question7();
