"use strict";

/*
// Lecture 29
// Activating the Strict Mode
// Is a special mode which makes it easier
// for us to write JS secure codes.
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// Introduce short list of variable names
// reserved for features to be added to the language
// const interface = "audio"; // reserved word
// const private = 231; // reserved word
*/
////////////////////////////////////////////

/*
// Lecture 30
// Functions
// Piece of code that can be re-used
// over and over again
function logger() {
  console.log("My name is Ziha!🤟😻");
}

// Calling / Running / Invoking function
logger();
logger();
logger();

// Parameters
// Variables specific to the function, get defined
// once the function is called
function fruitProcessors(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice of ${apples} 🍎 and ${oranges} 🍊`;
  return juice;
}

// To use the returned value, we store it in a variable
// Capturing the returned value
const apple_orange_juice = fruitProcessors(4, 1); // replaced by the result of the function
console.log(apple_orange_juice);

// Log the returned value directly
// No capturing the value
console.log(fruitProcessors(4, 1));

const apple_juice = fruitProcessors(4, 0);
console.log(apple_juice);

// Built-In Functions
// console.log();
const num = Number("23"); // function result is 23
console.log(num);
*/
//////////////////////////////////////////

/*
// Lecture 31
// Function Declarations VS Functions Expressions
// Function Declarations

function cal_age_1(birthYear) {
  return 2037 - birthYear;
}

const age_1 = cal_age_1(1996);

// Function Expressions
// Anonymous Function
const cal_age_2 = function (birthYear) {
  return 2037 - birthYear;
};

const age_2 = cal_age_2(1997);

console.log(age_1, age_2);
*/
/////////////////////////////////////////////

/*
// Lecture 32
// Function Expressions
// Anonymous Function
const cal_age_2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Functions ES6
const cal_age_3 = (birthYear) => 2037 - birthYear;

const age_3 = cal_age_3(1996);
console.log(age_3);

const years_until_retirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 45 - age;

  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(years_until_retirement(1996, "Ziha"));
console.log(years_until_retirement(1999, "Ingrid"));
*/

// Lecture 33
