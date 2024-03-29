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
