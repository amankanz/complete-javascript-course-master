'use strict';

/*
// Lecture 64
// Project #1
// Easy way of selecting element in JS
console.log(document.querySelector('.message').textContent);
*/
////////////////////////////

/*
// Lecture 65
// What is the DOM and DOM Manipulation
// DOM Manipulation is a technical term which means
// JS interacting with webpage.

// DOM
// Is a structure representation og the HTML documents

// DOM is a connection point between HTML document and the JS code. 

// DOM Tree
// Is a Tree structure generated by the browser on HTML loads.
*/
/////////////////////////////////////

/*
// Lecture 66
// Selecting and Manipulating Elements
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

// Use the .value property to get the actual
// values of input field
// Use the .value property to manipulate the input
// element its values
document.querySelector('.guess').value = 3;
console.log(document.querySelector('.guess').value);
*/
/////////////////////////////////

/*
// Lecture 67
// Handling click events
// we first select the element and then attach an eventlistener to it
// The eventlistener expect two argument:
// Name of the event
// And a function value / event handler
// The event handler is a function expression that we define which tells the eventlistener what to
// whenever the event happens.
// we DO NOT call the function JS Engine will call
// this function as soon as the event happens 

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO number!';
  }
});
*/
////////////////////////////////////////

/*
// Lecture 68
// Implementing the Game logic
// Define the secret number once
const secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secret_number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO number!';
  } else if (guess === secret_number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👽 You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👽 You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/
//////////////////////////////////////

/*
// Lecture 69
// Manipulating CSS Style
const secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secret_number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO number!';

    // When player wins
  } else if (guess === secret_number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👽 You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👽 You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/
///////////////////////////////////////////////

// Lecture 70
