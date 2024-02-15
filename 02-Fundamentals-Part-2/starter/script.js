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
///////////////////////////////////////////////

/*
// Lecture 33
// Function calling other functions
function cut_fruit_pieces(fruit) {
  return fruit * 4;
}

function fruitProcessors(apples, oranges) {
  // Calling cut_fruit_pieces() then capturing
  // its return value into apple_pieces
  // and orange_pieces
  const apple_pieces = cut_fruit_pieces(apples);
  const orange_pieces = cut_fruit_pieces(oranges);

  const juice = `Juice of ${apple_pieces} pieces of 🍎 and ${orange_pieces} pieces of 🍊`;
  return juice;
}
console.log(fruitProcessors(2, 3));
*/
////////////////////////////////////////

/*
// Lecture 34
// Reviewing functions
const cal_age = function (birthYear) {
  return 2037 - birthYear;
};

const years_until_retirement = function (birthYear, firstName) {
  const age = cal_age(birthYear);
  const retirement = 45 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!🎉`);
    return -1;
  }
};

console.log(years_until_retirement(1996, "Ziha"));
console.log(years_until_retirement(1970, "Bob"));
*/
//////////////////////////////////////////

/*
// Lecture 35
// CODING CHALLENGE #1
// Arrow function to calculate the average of 3 scores
const calc_average = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// check_winner function
const check_winner = function (avgDolpgins, avgKoalas) {
  if (avgDolpgins >= 2 * avgKoalas) {
    return `Dolphins wins 🏆 (${avgDolpgins} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolpgins) {
    return `Koalas wins 🏆 (${avgKoalas} vs ${avgDolpgins})`;
  } else {
    return `No team wins...`;
  }
};

// TEST DATA 1: Dolphins 44, 23 and 71. Koalas score 65, 54 and 49

// Calculate the average for both teams
const avg_score_dolphins = calc_average(44, 23, 71);
const avg_score_koalas = calc_average(65, 54, 49);
console.log(check_winner(avg_score_dolphins, avg_score_koalas));

// TEST DATA 2: Dolphins 85, 54 and 41. Koalas score 23, 34 and 27
const avg_score_dolphins_2 = calc_average(85, 54, 41);
const avg_score_koalas_2 = calc_average(23, 34, 27);
console.log(check_winner(avg_score_dolphins_2, avg_score_koalas_2));
*/
////////////////////////////////////

/*
// Lecture 36
// Intro to Arrays
// A big container in which we can store values and then reference them
const friends = ["Amani", "MonIngrid", "Meshack", "Salleh", "Philipp"];
console.log(friends);

// Another of creating an Array
const years = new Array(1996, 1997, 1998, 1999);
console.log(years);

// Accessing values inside the array
console.log(friends[0]);
console.log(friends[2]);

// Length of the array(exact amount of elements inside the array)
console.log(friends.length);

// Get the last element of an array
console.log(friends[friends.length - 1]);

// Mutate the array
friends[friends.length - 1] = "Clovis";
console.log(friends);

// Store values with different type
const first_name = "Amani";
const amani = [first_name, "Ziha", 2037 - 1997, "Coder", friends];
console.log(amani);

// Exercise
const cal_age = function (birthYear) {
  return 2037 - birthYear;
};

const years_2 = [1997, 1999, 2000, 2010];

const age_1 = cal_age(years_2[0]);
const age_2 = cal_age(years_2[1]);
const age_4 = cal_age(years_2[years_2.length - 1]);
console.log(age_1, age_2, age_4);

const ages = [
  cal_age(years_2[0]),
  cal_age(years_2[1]),
  cal_age(years_2[years_2.length - 1]),
];
console.log(ages);
*/
///////////////////////////////////////

// Lecture 37
