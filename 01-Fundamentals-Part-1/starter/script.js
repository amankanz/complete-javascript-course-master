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
