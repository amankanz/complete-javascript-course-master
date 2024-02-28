'use strict';
/*
// Lecture 76
// Project #3: Pig Game

// Selecting Elements
const score_0_el = document.querySelector('#score--0');
const score_1_el = document.getElementById('score--1');
const dice_el = document.querySelector('.dice');

// Starting Condition
// JS Engine convert 0 to str to display it on the page
score_0_el.textContent = 0;
score_1_el.textContent = 0;
dice_el.classList.add('hidden');
*/
///////////////////////////////////////////

/*
// Lecture 77
// Rolling the Dice

// Selecting Elements
const score_0_el = document.querySelector('#score--0');
const score_1_el = document.getElementById('score--1');
const current_score_0 = document.getElementById('current--0');
const current_score_1 = document.getElementById('current--1');
const dice_el = document.querySelector('.dice');
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');

// Starting Condition
score_0_el.textContent = 0;
score_1_el.textContent = 0;
dice_el.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btn_roll.addEventListener('click', function () {
  // 1. Generating a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  dice_el.classList.remove('hidden');
  dice_el.src = `dice-${dice}.png`;

  // 3. Check for dice rolled 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    current_score_0.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});
*/
////////////////////////////////////////

/*
// Lecture 78
// Switching the active Player

// Selecting Elements
const player_0_el = document.querySelector('.player--0');
const player_1_el = document.querySelector('.player--1');
const score_0_el = document.querySelector('#score--0');
const score_1_el = document.getElementById('score--1');
const current_score_0 = document.getElementById('current--0');
const current_score_1 = document.getElementById('current--1');
const dice_el = document.querySelector('.dice');
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');

// Starting Condition
score_0_el.textContent = 0;
score_1_el.textContent = 0;
dice_el.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btn_roll.addEventListener('click', function () {
  // 1. Generating a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  dice_el.classList.remove('hidden');
  dice_el.src = `dice-${dice}.png`;

  // 3. Check for dice rolled 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player_0_el.classList.toggle('player--active');
    player_1_el.classList.toggle('player--active');
  }
});
*/
///////////////////////////////////////////////

// Lecture 79
// Holding the current score

// Selecting Elements
const player_0_el = document.querySelector('.player--0');
const player_1_el = document.querySelector('.player--1');
const score_0_el = document.querySelector('#score--0');
const score_1_el = document.getElementById('score--1');

const current_score_0 = document.getElementById('current--0');
const current_score_1 = document.getElementById('current--1');
const total_score_0 = document.getElementById('score--0');
const total_score_1 = document.getElementById('score--1');

const dice_el = document.querySelector('.dice');
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');

// Starting Condition
score_0_el.textContent = 0;
score_1_el.textContent = 0;
dice_el.classList.add('hidden');

const scores = [0, 0];
let totalScore0 = 0;
let totalScore1 = 0;
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btn_roll.addEventListener('click', function () {
  // 1. Generating a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  dice_el.classList.remove('hidden');
  dice_el.src = `dice-${dice}.png`;

  // 3. Check for dice rolled 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player_0_el.classList.toggle('player--active');
    player_1_el.classList.toggle('player--active');
  }
});

// Holding the current score functionality
btn_hold.addEventListener('click', function () {
  // 1. Active player current score get added to score[]
  if (activePlayer === 0) {
    totalScore0 += currentScore;
    console.log(totalScore0);
    scores.unshift(totalScore0);
    total_score_0.textContent = scores[0];
  }
});

// Time Stamp: 01:44
