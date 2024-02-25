// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Lecture 49
// Section Intro
////////////////////////////////////////

/*
// Lecture 50
// Setting up Prettier and VSCode
const x = '23';
if (x === 23) console.log(23);

const age = birthYear => {
  return 2036 - birthYear;
};

console.log(); // cl
console.log();

// TODO: install Extensions
// Image Preview by Kiss Tamas
// Settings Sync by Shan Khan
// TODO Highlight by Wayou Liu
*/
///////////////////////////////////////

/*
// Lecture 51
// Installing Node.js and Setting Up
// A Dev Environment
// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1997));

// TODO: Install npm package
// npm install live-server -g
// live-server
*/
///////////////////////////////

// Lecture 52
// Learning how to code is Hard but you can do it!
/**
 * Everything is awesome
 *   - Study courses: underhand code, take challenges and notes
 *
 * Cliff of confusion
 *  - Stay motivated! Keep writing lots of code on your own, no matter how bad
 *
 * Pit of despair
 *  - Learn with other people, devs and beginners, and fix them
 *
 * Back to awesome
 *  - Round up your skillset with best practices and tools ( git, testing, ...)
 *
 * JOB READY
 *  - (But the learning never stops 😅)
 */

//////////////////////////////////////////////

// Lecture 53
// How to think like a Developer:
// Become a Problem Solver!
// 4 step to solve any problem:
/**
 * Understand the problem 100% Ask the right questions to get clear picture of the problem
 *
 * Divide and Conquer: Break the problem into smaller sub-problem
 *
 * Don't be afraid to do research: Google, MDN, StackOverflow
 *
 * For bigger problem, write pseudocode before writing the actual code
 */

// Tip: Develop a genuine curiosity and passions of understanding how things actually work in the world around you!

///////////////////////////////////////

/*
// Lecture 54
// Using Google, MDN and StackOverflow
// PROBLEM:
// "We work for a company building a smart home thermometer. Our most recent task is this: Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is a temperature amplitude? Answer: Difference between the min and max temp that occurred within a specific recording time period
// - How to compute max and min value in an temperatures?
// - What is a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to Ignore the sensor error?
// - Find the max value in temperatures array
// - Find the in value in temperatures array
// - Subtract min from max then return the value (amplitude)

const calc_temp_amplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
// max = 1
// max = 9
// min = 1
// min = 0

const amplitude = calc_temp_amplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// The function should receive two array of temperatures not just one

// 1) Understand the problem
// - With 2 arrays, should we implement the same functionality twice ? NO! Just merge the 2 arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays into one

const calc_temp_amplitude_2 = function (t1, t2) {
  const temps = t1.concat(t2); // [t1, t2]
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(temps);
  console.log(max, min);
  return max - min;
};

const amplitude_2 = calc_temp_amplitude_2([1, 4, 3], [5, 7, 9]);
console.log(amplitude_2);
*/
/////////////////////////////////////

/*
// Lecture 55
// Debugging (Fixing Errors)
// Is process of Identifying, finding, fixing and preventing buys in our programs code base. 
*/
///////////////////////////////////

/*
// Lecture 56
// Debugging with the console and Breakpoints
const measure_kelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // c) FIX the bug
    // value: Number(prompt('Degrees celsius:')),
    value: 30,
  };
  // b) FINDING the bug
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// a) IDENTIFY the bug
console.log(measure_kelvin());

// USING A DEBUGGER
const calc_temp_amplitude_bug = function (t1, t2) {
  const temps = t1.concat(t2); // [t1, t2]
  // B) FIND BUG
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    // debugger;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(temps);
  console.log(max, min);
  return max - min;
};

const amplitude_bug = calc_temp_amplitude_bug([1, 4, 9], [5, 7, 9]);

// A) IDENTIFY BUG
console.log(amplitude_bug);
*/
////////////////////////////////////

/*
// Lecture 57
// CODING CHALLENGE #1
// Example: [17, 21, 23] will print "...17*C in 1 day ...21*C in 2 days ...23*C in 3 days ..."

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

// a) Understand the problem
// - We receive an array of max temps
// - Print the string containing max temps
// - How do we print temp of an array?
// - How do we create a string that contains the printed temps?
// b) Breaking into Sub-problem
// - print temps of an array?
// - create a string containing printed temps
// - return the string

// a) Understanding the problem
// - Array transform to a string separated by ...
// - Adding a x day, what is the x day? Answer: index + 1

// b) Breaking into Sub-problem
// - Print each element of array
// - Create a string containing printed elements and add *C
// - Add the x day (index + 1) and ... from the begging and end separating the elements
// - Return the string
const test_data_1 = [17, 21, 23];
const test_data_2 = [12, 5, -5, 0, 4];

const print_forecast = function (arr) {
  let result = ``;
  for (let i = 0; i < arr.length; i++) {
    // debugger;
    if (i === 0) result += `${arr[i]}*C in ${i + 1} day ...`;
    else result += `${arr[i]}*C in ${i + 1} days ...`;
  }
  console.log(arr);
  return result;
};

console.log(`... ${print_forecast(test_data_1)}`);
console.log(`... ${print_forecast(test_data_2)}`);
*/

// Lecture 58
// SECTION:
// Intro HTML & CSS Crash Course
