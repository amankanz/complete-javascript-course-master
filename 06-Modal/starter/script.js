'use strict';

/*
// Lecture 73
// Project #2: Modal window
// In this project we will work with classes
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_modal_btn = document.querySelector('.close-modal');
const show_modal_btns = document.querySelectorAll('.show-modal');
console.log(show_modal_btns);

for (let i = 0; i < show_modal_btns.length; i++) {
  const element = show_modal_btns[i].textContent;
  console.log(element);
}
*/
///////////////////////////////////

/*
// Lecture 74
// Working with classes
// Refactoring: Dry Principle
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_modal_btn = document.querySelector('.close-modal');
const show_modal_btns = document.querySelectorAll('.show-modal');

const open_modal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close_modal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < show_modal_btns.length; i++) {
  const element = show_modal_btns[i];
  element.addEventListener('click', open_modal);
}

close_modal_btn.addEventListener('click', close_modal);
overlay.addEventListener('click', close_modal);
*/
////////////////////////////

/*
// Lecture 75
// Handling an 'ESC' Keypress Event
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_modal_btn = document.querySelector('.close-modal');
const show_modal_btns = document.querySelectorAll('.show-modal');

const open_modal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close_modal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < show_modal_btns.length; i++) {
  const element = show_modal_btns[i];
  element.addEventListener('click', open_modal);
}

close_modal_btn.addEventListener('click', close_modal);
overlay.addEventListener('click', close_modal);

// Global Event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    close_modal();
  }
});
*/
////////////////////////////////////////////

// Lecture 76
