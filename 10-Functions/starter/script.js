'use strict';
/*
// Lecture 119
// Default Parameter
const bookings = [];

const create_booking = function (
  flightNum,
  numPassengers = 1,
  price = 231 * numPassengers
) {
  // // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 231;

  // Enhance object literal syntax ES6
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

create_booking('ZH123');
create_booking('ZH123', 2, 800);
create_booking('ZH123', 3);
create_booking('ZH123', 10);
create_booking('ZH123', undefined, 100);

console.log(bookings);
*/
//////////////////////////////

/*
// Lecture 120
// How Passing Arguments works: Value vs Reference
const flight = 'ZH132';
const ziha = {
  name: 'Ziha Amani',
  passport: 234436373,
};

const check_in = function (flightNum, passenger) {
  flightNum = 'AM234';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 234436373) alert('Checked In');
  else alert('Wrong Passport!');
};

// check_in(flight, ziha);
// console.log(flight);
// console.log(ziha);

// Same as doing....
// const flightNum = flight;
// const passenger = ziha;

// Example
const new_passport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

// new_passport(ziha);
// check_in(flight, ziha);
*/
//////////////////////////////////////////

// Lecture 121
// First-Class and Higher-order functions
////////////////////////////////////////////////////

/*
// Lecture 122
// Functions Accepting Callback functions
const one_word = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upper_first_word = function (str) {
  const [first, ...otherWords] = str.split(' ');
  return [first.toUpperCase(), ...otherWords].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformer string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the coolest!', upper_first_word);
transformer('JavaScript is the easier!', one_word);

// NB: We are only passing the function value, we are not calling the upper_first_word function.
// It will the transformer function calling the upper_first_word function.

const high_5 = function () {
  console.log('👋');
};

// JS uses callbacks all the time
document.body.addEventListener('click', high_5);
['Ziha', 'Ian', 'Rehemah', 'Akeem', 'Nikita'].forEach(high_5);

// Example
const day_1 = 'Today is your day to shine!';
const day_2 = `Yesterday is history, today is a gift. That's why it is called the present!`;
const day_3 = `Those who don't give-up never fail`;

const rand_num = function (_n) {
  if (_n === '1') console.log(day_1);
  if (_n === '2') console.log(day_2);
  if (_n === '3') console.log(day_3);
};

const word_day = function () {
  const output = `${Math.trunc(Math.random() * 3) + 1}`;

  return rand_num(output);
};

// Higher-order function
document.body.addEventListener('click', word_day);
*/
///////////////////////////////////////////

/*
// Lecture 123
// Functions Returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter_hi = greet('Hi');
greeter_hi('Ziha');
greeter_hi('Ian');

// Call the function in one go
greet("y'ello")('Amani');

// Challenge
const greet_arr = greeting => name => console.log(`${greeting} ${name}`);

const greeter_arr = greet_arr('Hellooooo');
greeter_arr('Ingrid');
*/
////////////////////////////////

/*
// Lecture 124
// The Call and Apply methods
const uganda_airline = {
  airline: 'Uganda Airline',
  iataCode: 'UA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      name,
      flight: `${this.iataCode}${flightNum}`,
    });
  },
};

uganda_airline.book('239', 'Kaneza Zihalirwa');
uganda_airline.book('634', 'Meshack William');

console.log(uganda_airline);

const ziha_airline = {
  airline: 'Ziha Airline',
  iataCode: 'ZA',
  bookings: [],
};

const book = uganda_airline.book;

// Does NOT work
// book('234', 'Ingrid Furaha');

// Call method
book.call(ziha_airline, '234', 'Ingrid Furaha');
console.log(ziha_airline);

book.call(uganda_airline, '239', 'Elina Kaneza');

const rwanda_airways = {
  airline: 'Rwanda Airways',
  iataCode: 'RA',
  bookings: [],
};

book.call(rwanda_airways, 247, 'Ziha Amani');
console.log(rwanda_airways);

// apply method
const flight_data = [238, 'Furaha Ingrid'];

const qatar_airways = {
  airline: 'Qatar Airways',
  iataCode: 'QA',
  bookings: [],
};

book.apply(qatar_airways, flight_data);
console.log(qatar_airways);

book.call(rwanda_airways, ...flight_data);

/////////////////////////////////

// Lecture 125
// The bind() method
// book.call(rwanda_airways, 247, 'Ziha Amani');

const book_rw = book.bind(rwanda_airways);
const book_ug = book.bind(uganda_airline);
const book_za = book.bind(ziha_airline);
book_rw(240, 'Robert Kaneza');
book_za(278, 'Philomene Kaneza');

// Using multiple arguments
const book_rw_234 = book.bind(rwanda_airways, 234);

book_rw_234('Yannis');
book_rw_234('Bijoux Kange');

// NB: Other situation in which we can use the bind() method. it is when we use objects together with event listeners

// With Event listeners
uganda_airline.planes = 300;
uganda_airline.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// uganda_airline.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', uganda_airline.buyPlane.bind(uganda_airline));

// Partial Application
const add_tax = (rate, value) => value + value * rate;

console.log(add_tax(0.1, 100));

const add_vat = add_tax.bind(null, 0.23);
// add_vat = value => value + value * 0.23

console.log(add_vat(100));

// Challenge
const add_tax_rate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const add_vat_2 = add_tax_rate(0.23);
console.log(add_vat_2(300));
*/
//////////////////////////////////////

// Lecture 126
// Coding Challenge

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// Understand the problem

// Break the problem into sub-problem
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  // Get Answers
  registerNewAnswer() {
    const input_num = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // console.log(this.answers);

    typeof input_num === 'number' &&
      input_num < this.answers.length &&
      this.answers[input_num]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const display_results = poll.displayResults;
const test_data_1 = [5, 2, 3];
const test_data_2 = [1, 5, 3, 9, 6, 1];


poll.displayResults.call({ answers: test_data_1 }, 'string');
poll.displayResults.call({ answers: test_data_2 });

// const arr = [1, 2, 3];
// console.log(arr.join(', '));
*/

/*
// Lecture 127
// Immediately Invoked Functions Expressions (IIFE)
const run_once = function () {
  console.log('This will never run again!');
};

run_once();

// IIFE
(function () {
  console.log('This will never run again!');
  const is_private = 33;
})();

(() => console.log('This will ALSO never run again!'))();

// console.log(is_private); //scoped, can't be accessed in the global scope

// Scope in ES6
// let and const create their own scope in of {}
{
  const is_private = 33;
  var is_not_private = 333;
}

// console.log(is_private);
console.log(is_not_private);
*/

// Lecture 128
// Closures
const secure_booking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secure_booking();

booker();
booker();
booker();

// Take a look at the closure indirectly
console.dir(booker);
