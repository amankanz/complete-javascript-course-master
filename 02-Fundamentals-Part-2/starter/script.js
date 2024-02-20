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

/*
// Lecture 37
// Basic Array Operation (Methods)
const friends = ["Amani", "Ingrid", "Rehemah"];

// Useful Array Methods:

// Add Elements to the Array
// push() method
const new_length = friends.push("Ian");
// console.log(friends);
// console.log(new_length);

// unshift()
friends.unshift("Hakheem");
console.log(friends);

// Remove Elements from the Array
// pop() method
const popped_element = friends.pop();
// friends.pop();
// console.log(friends);
// console.log(popped_element);

// shift() method
const shift_element = friends.shift();
console.log(friends);
console.log(shift_element);

// indexOf() method
// Return the position of an element
console.log(friends.indexOf("Rehemah"));
console.log(friends.indexOf("Bob")); // Not inside

// includes() ES6
// Returns a boolean if the element is / isn't
//  inside the array
friends.push(23);
console.log(friends.includes("Rehemah"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

// Use the includes() to write conditionals
if (friends.includes("Ingrid")) {
  console.log("You have a friend named Ingrid!");
}
*/
///////////////////////////////////////////////

/*
// Lecture 38
// CODING CHALLENGE #2
const calc_tip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// console.log(calc_tip(100));

// TEST DATA: 125,555 and 44
const bills = [125, 555, 44];
const tips = [calc_tip(bills[0]), calc_tip(bills[1]), calc_tip(bills[2])];
console.log(tips);

const calc_total = function (bill) {
  return bill + calc_tip(bill);
};

const total = [
  calc_total(bills[0]),
  calc_total(bills[1]),
  calc_total(bills[2]),
];

console.log(total);
*/
/////////////////////////////////////////

/*
// Lecture 39
// Introduction to Object

// Array
const amani_array = ["Ziha", 2037 - 1997, "Coder", ["Ingrid", "Meshack"]];

// Object
// Keyvalue-pairs
// for unstructured data, data that we want to name
// then retrieve based on that name.
const amani_obj = {
  firstName: "Amani",
  lastName: "Ziha",
  age: 2037 - 1997,
  job: "Coder",
  friends: ["Ingrid", "Philip", "Salleh"],
};
*/
////////////////////////////////////////

/*
// Lecture 40
// Dot VS Bracket Notation
const amani_obj = {
  firstName: "Amani",
  lastName: "Ziha",
  age: 2037 - 1997,
  job: "Coder",
  friends: ["Ingrid", "Philip", "Salleh"],
};

console.log(amani_obj);
console.log(amani_obj.lastName);
// Bracket Notation
// Specify the string with property name
console.log(amani_obj["lastName"]);

// Use an expression inside the []
const name_key = "Name";

console.log(amani_obj["first" + name_key]);
console.log(amani_obj["last" + name_key]);

// Another example for using [] Notation
// const interested_opt = prompt(
//   "What do yu want to know about Amani? Choose between firstName, lastName, age, job and friends"
// );
// if (amani_obj[interested_opt]) {
//   // if truthy
//   console.log(amani_obj[interested_opt]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends"
//   );
// }

// Adding new property into the object
amani_obj.location = "Vancouver BC";
amani_obj["LinkedIn"] = "linkedin/in/fred-kaneza";

console.log(amani_obj);

// Challenge
// "Amani has 3 friends, and his best friend is called Ingrid"

console.log(`
${amani_obj.firstName} has ${amani_obj.friends.length}, and his best friend is called ${amani_obj.friends[0]}`);
*/
/////////////////////////////////////

/*
// Lecture 41
// Object Methods
// We can hold all kind of different data type in
// object
const amani = {
  firstName: "Amani",
  lastName: "Ziha",
  birthYear: 1997,
  job: "Coder",
  friends: ["Ingrid", "Philip", "Salleh"],
  hasDriverLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  // Most efficient solution
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()}-year old ${
      this.job
    }, and has ${this.hasDriverLicense ? "a" : "no"} driver's license!`;
  },
};
// The this keyword
// is equal to the object calling the method
// amani_obj is the object calling the method

//Only need to calculate the age once
console.log(amani.calcAge());

// simple retrieve the property age already calculated.
console.log(amani.age);
console.log(amani.age);
console.log(amani.age);

// console.log(amani_obj["calcAge"](1997));

// Challenge
// 'Amani is 40-year old coder, and has a/no driver's license'
console.log(amani.getSummary());
*/
/////////////////////////////////////////////

/*
// Lecture 42
// CODING CHALLENGE #3
// Go back to Mark and John comparing their BMI!
// mass in kg and height in meter
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
// console.log(mark.calcBMI());
// console.log(mark.BMI);

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
// console.log(john.calcBMI());
// console.log(john.BMI);

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
//   );
// }
mark.calcBMI() > john.calcBMI()
  ? console.log(
      `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`
    )
  : console.log(
      `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
    );
*/
//////////////////////////////////////////

/*
// Lecture 43
// Iteration: The FOR Loop
// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 2 🏋️‍♂️");
// console.log("Lifting weights repetition 3 🏋️‍♂️");
// console.log("Lifting weights repetition 4 🏋️‍♂️");
// console.log("Lifting weights repetition 5 🏋️‍♂️");

// for loop keeps running  while condition is TRUE
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}
*/
///////////////////////////////////////

/*
// Lecture 44
// Looping Arrays. Breaking and Continuing
const amani = [
  "Amani",
  "Ziha",
  2037 - 1997,
  "Coder",
  ["Ingrid", "Meshack"],
  true,
];

// Create a new array based on the values of
// the original array
// types[0] = 'string'
const types = [];

// Individual log every element of the array
// console.log(amani[0]);
// console.log(amani[1]);
// // ...
// console.log(amani[4]);
// amani[5] does NOT exist

for (let i = 0; i < amani.length; i++) {
  // Reading values from amani array
  console.log(amani[i], typeof amani[i]);

  // Filling the types array
  // types[i] = typeof amani[i];
  types.push(typeof amani[i]);
}

console.log(types);

const years = [1996, 1997, 1998, 1999, 2024];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("=== ONLY STRING ===");
for (let i = 0; i < amani.length; i++) {
  if (typeof amani[i] !== "string") continue;
  console.log(amani[i], typeof amani[i]);
}

console.log("=== BREAK WITH NUMBER ===");
for (let i = 0; i < amani.length; i++) {
  if (typeof amani[i] === "number") break;
  console.log(amani[i], typeof amani[i]);
}
*/
//////////////////////////////////////////////

// Lecture 45
