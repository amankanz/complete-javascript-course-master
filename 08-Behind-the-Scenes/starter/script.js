'use strict';

/*
// Lecture 86
// Scoping
function calc_age(birthYear) {
  const age = 2037 - birthYear;

  function print_age() {
    let output = `${first_name}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;

      // Creating NEW variable with the same name as the outer Scope's variable
      const first_name = 'Rehemah';

      // Resigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you are a millennial, ${first_name}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millennial);
    // console.log(add(2, 3));
    console.log(output);
  }
  print_age();

  return age;
}

const first_name = 'Zihalirwa';
calc_age(1996);
// console.log(age);
// print_age();
*/
///////////////////////////////////////////////////////////

// Lecture 87
// Variable Environment:Hoisting and The TDZ

//////////////////////////////////////////////////////////////

/*
// Lecture 88
// Hoisting and TDZ in Practice

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ziha';
let job = 'Coder';
const year = 1996;

// Functions
console.log(add_decl(2, 3));
console.log(add_exp);
// console.log(add_exp(2, 3));
// console.log(add_arrow(2, 3));

function add_decl(a, b) {
  return a + b;
}

var add_exp = function (a, b) {
  return a + b;
};

var add_arrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) {
  delete_shopping_cart();
}

var numProducts = 10;

function delete_shopping_cart() {
  console.log('All products deleted!');
}

// Example
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
//////////////////////////////////////////////////////////////

/*
// Lecture 89
// The this Keyword

// Lecture 90
// The this keyword in Practice

// the this variable in a global scope is
// simply the window object
// console.log(this);

// As a regular function
// In strict mode the this is undefined. Otherwise the this is
// simply the window object
// const calc_age = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calc_age(1996);

// As an arrow function
// the this variable uses the lexical this keyword of
// its parent function or the parent scope
// the parent scope is the window object
const calc_age_arrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

// calc_age_arrow(1999);

// As a Method
const ziha = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

ziha.calcAge();

const ian = {
  year: 2024,
};

ian.calcAge = ziha.calcAge; // Method borrowing

ian.calcAge();

const f = ziha.calcAge;

console.log(f);
f();
*/
////////////////////////////////////////////////////

/*
// Lecture 91
// Regular function vs Arrow function

// var firstName = 'Ian';

const ziha = {
  firstName: 'Ziha',
  year: 1996,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1:
    // const self = this; // self or that
    // const is_millennial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);

    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2:
    const is_millennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    is_millennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  },
};

ziha.greet();
ziha.calcAge();

// Arguments keywords
const add_exp = function (a, b) {
  console.log(arguments);
  return a + b;
};

add_exp(2, 3);
add_exp(2, 3, 4, 6, 8);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3, 6);
*/
/////////////////////////////////////////////

// Lecture 92
