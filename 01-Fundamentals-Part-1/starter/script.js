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

// Lecture 20
