/*
let js = "amazing";
console.log(40 + 8 + 23 - 1);

console.log("John Smith"); // "John Smith is a Value
console.log(23); // 23 is a Value

// let firstName = "John Smith"; // Declaring a variable firstName and assign to it a Value John Smith
// console.log(firstName); // "John Smith is a Value

// const PI = 3.1415;

// Descriptive Variables
let myFirstJob = "JS Coder";
let myCurrentJob = "Teacher";
console.log(myFirstJob); // JS Coder
*/
//////////////////////////////////////////////////

/*
// DATA TYPE
// Primitive Data Type
// Number, String, Boolean, Undefined, Null, Symbol and BigInt

// Number (always called floating point numbers)
let age = 25;

// String (used for text)
let firstName = "Zak";

// Boolean (used for taking decisions)
let fullName = true;

// Undefined (empty Value taken by a variable that is not yet defined)
let children; // variable declared without a Value assigned to it.

// Null (Also means empty Value)

// Symbol (ES2015)
// Value that is unique and cannot be changed

// BigInt (ES2020)
// Another Type for Numbers
// Larger Integers that cannot be represented by the Number Type

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// // console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// // console.log(typeof "Zak");

// javaScriptIsFun = "YES!";
// console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);

// A BUG in JS
// Never correct due to legacy reasons
console.log(typeof null); // Null is same as undefined (empty Value) but the output is object
*/
////////////////////////////////////////////

/*
// Lecture 10
// Let, Const and Var

// Using the let keyword
let age = 30;
age = 31; // the variable got reassigned/muted  during execution.

// Using the const keyword
const BIRTHYEAR = 1997; // the value of BIRTHYEAR can not be changed
// BIRTHYEAR = 1999;

// Can not declare empty variable with const
// const JOB;

// Using Var keyword
var job = "Coder";
job = "Student";

// Create the variable to the global scope
// lastName = "Zihalirwa"; // Bad Practice
// console.log(lastName);
*/

// Lecture 11

/////////////////////////////////////////

/*
// Lecture 12
// Operator Precedence
const NOW = 2037;
const AGE_ZAK = NOW - 1997;
const AGE_SARAH = NOW - 2018;

console.log(NOW - 1997 > NOW - 2018);

// Mathematical operators
// console.log(25 - 10 - 5); // executed left-to-right

// Assignment
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

// Calculate Average age
const AVERAGE_AGE = (AGE_ZAK - AGE_SARAH) / 2;
console.log(AGE_ZAK, AGE_SARAH, AVERAGE_AGE);
*/
////////////////////////////////////////////////

/*
// Lecture 13
// CODING CHALLENGE #1
// TEST DATA 1:
const MARK_WEIGHT = 78;
const MARK_HEIGHT = 1.69;
const JOHN_WEIGHT = 92;
const JOHN_HEIGHT = 1.95;

// TEST DATA 2:
// const MARK_WEIGHT = 95;
// const MARK_HEIGHT = 1.88;
// const JOHN_WEIGHT = 85;
// const JOHN_HEIGHT = 1.76;

// Calculate both their BMIs
const MARK_BMI = MARK_WEIGHT / MARK_HEIGHT ** 2;
const JOHN_BMI = JOHN_WEIGHT / JOHN_HEIGHT ** 2;
const MARK_HIGHER_BMI = MARK_BMI > JOHN_BMI;

console.log(MARK_BMI, JOHN_BMI, MARK_HIGHER_BMI);
*/
//////////////////////////////////////////

/*
// Lecture 14
// Strings & Templates Literals
const FIRST_NAME = "Amani";
const JOB = "Coder";
const BIRTHYEAR = 1996;
const currentYear = 2024;

const AMANI =
  "I'm" +
  " " +
  FIRST_NAME +
  " " +
  "a" +
  " " +
  (currentYear - BIRTHYEAR) +
  " " +
  "years old" +
  "!"; // Type coercion JS will convert the (number) into string
// console.log(AMANI);

// Template Literals = ES6
const AMANI_NEW = `I'm ${FIRST_NAME} a ${
  currentYear - BIRTHYEAR
} years old TopNotch ${JOB}!`;
console.log(AMANI_NEW);

// Using backticks for regular string
console.log(`Hello guys, I'm pleased to welcome you all to Ziha Estate!`);

// Multiline string before ES6
console.log(
  "String with \n\
 multi-lines \n\
 characters"
);
// Multi-lines string in ES6
console.log(`String
with multi-lines
in ES6`);
*/
///////////////////////////////////////////

/*
// Lecture 15
// Taking decisions with: if/else statement
const AGE = 26;

if (AGE >= 18) {
  console.log("Sarah can start driving 👍🚙!"); // Get executed if the condition evaluates to true
} else {
  const YEARS_LEFT = 18 - AGE;
  console.log(`Sarah is too young, wait another ${YEARS_LEFT} years 😉!`); // Get executed if the conditional evaluates to false
}

// Century Program
const BIRTHYEAR = 2001;
let century;

if (BIRTHYEAR <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/
//////////////////////////////////////////////

/*
// Lecture 16
// Coding Challenge #2
// TEST DATA 1:
const MARK_WEIGHT = 78;
const MARK_HEIGHT = 1.69;
const JOHN_WEIGHT = 92;
const JOHN_HEIGHT = 1.95;

// TEST DATA 2:
// const MARK_WEIGHT = 95;
// const MARK_HEIGHT = 1.88;
// const JOHN_WEIGHT = 85;
// const JOHN_HEIGHT = 1.76;

// Calculate both their BMIs
const MARK_BMI = MARK_WEIGHT / MARK_HEIGHT ** 2;
const JOHN_BMI = JOHN_WEIGHT / JOHN_HEIGHT ** 2;

if (MARK_BMI > JOHN_BMI)
  console.log(`Mark's BMI (${MARK_BMI}) is higher than John's (${JOHN_BMI})!`);
else
  console.log(`John's BMI (${JOHN_BMI}) is higher than Mark's (${MARK_BMI})!`);
*/
///////////////////////////////////////////

/*
// Lecture 17
// Type conversion and coercion
// Type conversion
const INPUT_YEAR = "1996"; // Input from user
console.log(Number(INPUT_YEAR), INPUT_YEAR); // Output 1996 as a number.
console.log(Number(INPUT_YEAR) + 18);

// Converting a string to a number
console.log(Number("Amani")); // Output NaN(Invalid number)
console.log(typeof NaN);

// Converting number to string
console.log(String(23), 23);

// Type coercion
// Whenever an operator deals with two values of
// different types.
console.log("I'm " + 23 + " years old.");

// Different operator
console.log("23" + "10" + 3); // convert to string
console.log("23" - "10" - 3); // convert to number
console.log("23" * "2"); // convert to number
console.log("23" / "2"); // convert to number

// Guess the output
let n = "1" + 1;
n = n - 1;
console.log(n); // Output 10

let y = 2 - 3 + 3 - "3" + "4";
y = y + 2 - "3";
console.log(y); // Output -145
*/
///////////////////////////////////////////

/*
// Lecture 18
// Truthy & Falsy Values

// Five Falsy Values in JS:
// 0, '', undefined, null and NaN

// Everything else is Truthy values
// values that will be convert to true when try
// to convert to a Boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Amani")); // String that is not an empty-string is truthy value
console.log(Boolean({}));
console.log(Boolean(""));

// Type coercion with Boolean
// In a logical context of if/else statement
const MONEY = 310;

if (MONEY) console.log("Don't spend it all 😉!");
else console.log("You should get a Job!");

// Testing if a variable is defined
let height; // Height holds the value undefined

if (height) console.log("YAH! Height is defined!");
else console.log("Height is not DEFINED!");
*/
////////////////////////////////////////////

/*
// Lecture 19
// Equality Operators: == vs ===
const AGE = "18";

if (AGE === 18) console.log("You're just became an adult :D! (Strict)");

if (AGE == 18) console.log("You're just became an adult :D! (Loose)"); // '18' the string get convert to a number

// === / Strict Equality Operator
// Doesn't do type coercion
console.log("18" === 18); // Output false

// == / Loose Equality Operator
// Does type coercion
console.log("18" == 18); // Output true, '18' get convert to a number

// Getting a value from web page
// using the prompt() function
const FAVORITE_NUMBER = Number(prompt(`What's your favorite number?`));

console.log(FAVORITE_NUMBER);
console.log(typeof FAVORITE_NUMBER);

// if (FAVORITE_NUMBER == 23) console.log("Cool! 23 is a Cool number!"); // '23' == 23 the string('23') get converted to a number

// if (FAVORITE_NUMBER === 23) console.log("Cool! 23 is a Cool number!"); // '23' === 23 -> FALSE, NO TYPE COERCION

if (FAVORITE_NUMBER === 23) {
  console.log("Cool! 23 is a Cool number!");
} else if (FAVORITE_NUMBER === 3) {
  console.log("3 is also a cool number!");
} else {
  console.log("Number is not 23 or 3");
}

// Different Operator
if (FAVORITE_NUMBER !== 23) console.log("Why not 23?");
*/
//////////////////////////////////////////////

/*
// Lecture 20
// Boolean Logic
// It uses several logical operator to combine
// true & false values.

// Example
// A: Sarah has a driver's license
// B: Sarah has good vision
*/
////////////////////////////////////////

/*
// Lecture 21
// Logical Operators in JS
const has_drivers_license = true; // A
const has_good_vision = true; // B

console.log(has_drivers_license && has_good_vision);
console.log(has_drivers_license || has_good_vision);
console.log(!has_drivers_license);

// if (has_drivers_license && has_good_vision)
//   console.log(`Sarah is able to drive!`);
// else console.log(`Someone else should drive...`);

const is_tired = true; // C
console.log(has_drivers_license && has_good_vision && is_tired);

if (has_drivers_license && has_good_vision && !is_tired)
  console.log(`Sarah is able to drive!`);
else console.log(`Someone else should drive...`);
*/
//////////////////////////////////////////////////

/*
// Lecture 22
// CODING CHALLENGE #3
/*
1. Calculate the average score for each team, using the test data below.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
*/
// // Dolphins Average Score
// const dolphins_score_1 = 96;
// const dolphins_score_2 = 108;
// const dolphins_score_3 = 89;
// const dolphins_average_score =
//   (dolphins_score_1 + dolphins_score_2 + dolphins_score_3) / 3;

// console.log(dolphins_average_score); // 97.67

// // Koalas Average Score
// const koalas_score_1 = 88;
// const koalas_score_2 = 91;
// const koalas_score_3 = 110;
// const koalas_average_score =
//   (koalas_score_1 + koalas_score_2 + koalas_score_3) / 3;

// console.log(koalas_average_score);

// // TEST DATA BONUS 1:
// // Dolphins Average Score
// const dolphins_score_1 = 97;
// const dolphins_score_2 = 112;
// const dolphins_score_3 = 101;
// const dolphins_average_score =
//   (dolphins_score_1 + dolphins_score_2 + dolphins_score_3) / 3;

// console.log(dolphins_average_score); // 97.67

// // Koalas Average Score
// const koalas_score_1 = 109;
// const koalas_score_2 = 95;
// const koalas_score_3 = 123;
// const koalas_average_score =
//   (koalas_score_1 + koalas_score_2 + koalas_score_3) / 3;

// console.log(koalas_average_score);

// // TEST DATA BONUS 2:
// // Dolphins Average Score
// const dolphins_score_1 = 97;
// const dolphins_score_2 = 80;
// const dolphins_score_3 = 101;
// const dolphins_average_score =
//   (dolphins_score_1 + dolphins_score_2 + dolphins_score_3) / 3;

// console.log(dolphins_average_score); // 97.67

// // Koalas Average Score
// const koalas_score_1 = 109;
// const koalas_score_2 = 50;
// const koalas_score_3 = 106;
// const koalas_average_score =
//   (koalas_score_1 + koalas_score_2 + koalas_score_3) / 3;

// console.log(koalas_average_score);

// if (
//   dolphins_average_score > koalas_average_score &&
//   dolphins_average_score >= 100
// )
//   console.log(`Dolphins wins the Trophy🏆!`);
// else if (
//   dolphins_average_score < koalas_average_score &&
//   koalas_average_score >= 100
// )
//   console.log(`Kaolas wins the Trophy 🏆!`);
// else if (
//   dolphins_average_score === koalas_average_score &&
//   dolphins_average_score >= 100 &&
//   koalas_average_score >= 100
// )
//   console.log(`It's a Draw, Both wins 🏆!`);
// else console.log(`No team wins the Trophy😭!`);
////////////////////////////////////////////////

/*
// Lecture 23
// The Switch Statement
// Use it to compare one value against multiple
// options
const day = "thursday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan the meetings and projects");
    console.log("Go to Coding Meetups");
    break;
  case "tuesday":
    console.log("Prepare pseudocode for each features");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code for each feature");
    break;
  case "friday":
    console.log("Test each feature");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend with fellow friends and Coders :D");
    break;
  default:
    console.log("Not a valid day! :C");
}

// if/else control structure
// if (day === "monday") {
//   console.log("Plan the meetings and projects");
//   console.log("Go to Coding Meetups");
// } else if (day === "tuesday")
//   console.log("Prepare pseudocode for each features");
// else if (day === "wednesday" || day === "thursday")
//   console.log("Write code for each feature");
// else if (day === "friday") console.log("Test each feature");
// else if (day === "saturday" || day === "sunday")
//   console.log("Enjoy the weekend with fellow friends and Coders :D");
// else console.log("Not a valid day! :C");
*/
/////////////////////////////////////////////////

/*
// Lecture 24
// Statements and Expressions
// Expressions produce a value
3 + 4;
1996;
true && false && !false;

// Statement
// Are like full sentences that translate to actions
// actions we want our program to perform
if (23 > 10) {
  const str = "23 is bigger";
}

// In template literals we can only
// insert expressions
const me = "ziha";
console.log(`I'm ${2034 - 1997} years old ${me}.`);
*/
/////////////////////////////////////////////

/*
// Lecture 25
// The Conditional (Ternary) Operator
// const age = 17;

// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to dink water 💧");
// age < 18
//   ? console.log("I like to drink milk 🥛")
//   : console.log("I like to drink beer 🍺");

// An operator is an expression
// it always produces value
// const age = 23;
// const drink = age >= 18 ? "wine 🍷" : "water 💧";

// console.log(drink);

// Using if/else block
// let drink2;

// if (drink2 >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "milk 🥛";
// }
// console.log(drink2);

// Ternary Operator is an expression which produces
// a value
// we can use it inside template literals
const age = 17;

console.log(`I like to dink ${age >= 18 ? "wine 🍷" : "milk 🥛"}`);
*/
///////////////////////////////////////////////

/*
// Lecture 26
// CODING CHALLENGE #4
// Tip Calculator
//Tip 15% if the bill value is between 50 and 300.
// If the value is different, the tip is 20%

// TEST DATA: Test for bill values 275, 40 and 430
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
*/
////////////////////////////////////////

// Lecture 27
// JS Releases: ES5, ES6+ And ESNEXT
// Modern JavaScript from the beginning
