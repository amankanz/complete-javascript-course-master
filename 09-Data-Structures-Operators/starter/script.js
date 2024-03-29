'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  oderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:30',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
*/
// ES6 Computing property name
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object (1)
  openingHours,

  // ES6 Writing methods (2)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  oderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:30', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Lecture 117
// String Methods Practice
const flights2 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// Understand the Problem

// Break the problem into sub-problem

const get_code = str => str.slice(0, 3).toUpperCase();

const fix_str = function (text) {
  const words = text.split('+');
  console.log(words);

  for (const w of words) {
    const text = w.split(';');
    const [type, from, to, time] = text;
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
      '_',
      ' '
    )} from ${get_code(from)} to ${get_code(to)} (${time.replace(
      ':',
      'h'
    )})`.padStart(45);

    console.log(output);
  }
};

fix_str(flights2);

//////////////////////////////////////////////////////
// Lecture 116
// Coding Challenge #4
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');
const text_area = document.querySelector('textarea');

// Understand the problem

// Break the problem into sub-problem

const convert_camel_case = function () {
  const phrases = text_area.value.toLowerCase();
  const text = phrases.trim().split('\n');
  console.log(text);

  for (const [i, t] of text.entries()) {
    const [first, second] = t.trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
};

button.addEventListener('click', convert_camel_case);

/*
////////////////////////////////////////////////////////
// Lecture 115
// Working with Strings Part 3
// .split() method
console.log('a+very+nice+day+!'.split('+'));
console.log('Ziha Amani'.split(' '));

const [firstName, lastName] = 'Ziha Amani'.split(' ');
console.log(firstName, lastName);

// .jon() method
// It's the opposite of split()
const new_name = ['Coder', firstName, lastName.toUpperCase()].join(' ');
console.log(new_name);

// Example
const capitalize_name = function (name) {
  const names = name.split(' ');
  const names_upper = [];

  for (const n of names) {
    // names_upper.push(n[0].toUpperCase() + n.slice(1));
    names_upper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(names_upper.join(' '));
};

const passenger = 'amani zihalirwa kaneza fred';

capitalize_name(passenger);

// Padding Strings
const message = 'Go to gate 23!';
console.log(message.padEnd(22, '+'));
console.log('Ziha'.padStart(24, '+').padEnd(30, '+'));

// Example
const mask_credit_card = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(str);
  console.log(last.padStart(str.length, '*'));
};

mask_credit_card(4892929223467888);
mask_credit_card('679292822736471723');

// .repeat() method
const message2 = 'Bad weather... All Departures delayed! ';
console.log(message2.repeat(6));

const plane_inline = function (n) {
  return `There are ${n} planes line ${'✈'.repeat(n)}`;
};

console.log(plane_inline(12));
console.log(plane_inline(3));
console.log(plane_inline(6));

/*
////////////////////////////////////////////////////////
// Lecture 114
// Working with string Part 2
const airline = 'Uganda Airline';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('ziha'.toUpperCase());

// Example
// Fix capitalization in name
const passenger = 'zIhA';
const passenger_lower = passenger.toLowerCase();
const passenger_correct =
  passenger_lower[0].toUpperCase() + passenger_lower.slice(1);
console.log(passenger_correct);

// #CHALLENGE a function to fix Capitalization

// Comparing Email
const email = 'hello@ziha.io';
const login_email = ' Hello@Ziha.Io \n';

// const lower_email = login_email.toLowerCase();
// const trim_email = lower_email.trim();
// console.log(trim_email);

const normalized_email = login_email.toLowerCase().trim();
console.log(normalized_email);
console.log(normalized_email === email);

// # CHALLENGE a function to compare emails

// Replacing parts of a string
const price_ug = '1,000,000ugx';
const price_us = price_ug.replace('ugx', '$').replaceAll(',', '.');
console.log(price_us);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Regular Expression
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A032ziha';
console.log(plane.includes('A032'));
console.log(plane.includes('Boeing'));

console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('ziha')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercises
const check_baggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('NO allowed on board!');
  } else {
    console.log('Welcome aboard!');
  }
};

check_baggage('I have a Laptop, some Snack and a Pocket Knife');
check_baggage('Hoodies and a Camera');
check_baggage('Some drinks and a gun for protection');

/*
// Lecture 113
// Working with strings Part 1
const airline = 'Uganda Airline';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B723'[0]);

// Length of a string
console.log(airline.length);
console.log('B246'.length);

// Methods
console.log(airline.indexOf('a')); // position 2
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Uganda')); // Case sensitive

// slice() method
console.log(airline.indexOf('d'));
console.log(airline.slice(4, 10));

// NO hard-coding
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Negative parameter
console.log(airline.slice(-3));
console.log(airline.slice(1, -3));

// Example
const check_middle_seat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You got ${seat} middle seat. 😬`);
  else console.log('You got lucky 😍');
};

check_middle_seat('12B');
check_middle_seat('2C');
check_middle_seat('17E');

console.log(new String('Ziha'));
console.log(typeof new String('Ziha'));
console.log(typeof new String('Ziha').slice(-1));
/////////////////////////////////////////////////////
// Lecture 112
// Coding Challenge #3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// a) Understand the problem

// b) Break the problem into sub-problem

// 1.
const events = [...new Set([...gameEvents.values()])];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min < 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// Lecture 111
// Summary: Which Data Structure to use?

///////////////////////////////////////
/*
// Lecture 110
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again..!'],
]);
console.log(question);

console.log(Object.entries(openingHours));
// Convert Object to Maps
const hours_map = new Map(Object.entries(openingHours));
console.log(hours_map);

// Iteration
// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt());
// console.log(question.get('Correct'));
// console.log(question.get(question.get('Correct') === answer));

// Converting Maps to Arrays
// Using the Spread Operator
console.log([...question]);

// Method on Arrays
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// This is exactly the as when we loop over the object the only difference is that objects are not iterable we need Object.entries to convert it to an iterable.

///////////////////////////////////////////////////
/*
// Lecture 109
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Angel In Us.');
rest.set(1, 'Kampala, Uganda');
console.log(rest.set(2, 'Nairobi, Kenya'));

// Map can receive any data-type
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');

// The get() method
console.log(rest.get('name'));
console.log(rest.get(false));
console.log(rest.get(1));
console.log(rest.get('open'));
console.log(rest.get('close'));

// Example
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Map Methods
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

// The .size property
console.log(rest.size);

// Remove all the elemensts from the Map
// rest.clear();
// console.log(rest);

// Arrays and Object as key
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest);
console.log(rest.get(arr));

// DOM Elements (Special type of object)
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

///////////////////////////////////////////////////
// Lecture 108
// SETS
/*
In the past JS had little built-in data-structure basically we only had objects and arrays. In ES6 two more data-structure were introduced: Sets and Maps  
*/
/*
// Sets:
// Is just a collection of unique values. That means a set can never have an duplicate. And it can also hold mixed data-type

// Just like arrays, sets are also iterables.
// NB: Sets are different from arrays because:
// its element are unique
// and the order of elements in the sets is irrelevant
const order_sets = new Set([
  'Pizza',
  'Buggers',
  'Green',
  'Pasta',
  'Milk-shake',
  'Pizza',
  'Buggers',
  'Pasta',
]);

console.log(order_sets);

// Strings are also iterable
console.log(new Set('Ziha'));

// Size of Sets
console.log(order_sets.size);

// Check for an element in a set
console.log(order_sets.has('Buggers'));
console.log(order_sets.has('Chips'));

// Add new element to a set
order_sets.add('Chips');
order_sets.add('Chips');
console.log(order_sets);

// Delete elements from a set
order_sets.delete('Pasta');
console.log(order_sets);

// Delete all the elements of the Set
// order_sets.clear();
// console.log(order_sets);

// NB: In sets there are not indexes, In fact there is not way of getting values out of a set
// If your goal is store values in order and then retrieve them it's best to use an array.

// Looping over Set
for (const order of order_sets) console.log(order);

// Example
// Main use case of set is to remove duplicate values of arrays.
const staff = [
  'waiter',
  'chef',
  'waiter',
  'manager',
  'security',
  'waiter',
  'chef',
  'cashier',
  'cashier',
];

// Converting a set to an array
// The SPREAD operator works on all iterables
const job_titles = [...new Set(staff)];
console.log(job_titles);

console.log(new Set(staff).size);
console.log(new Set('ZihalirwaAmaniFredKaneza').size);

// NB: Sets are not intended to replace arrays, whenever you need to store values in order and might contain duplicate always use arrays. It is also true when you need to manipulate data.

// Keep Sets in mind whenever you need to work with unique values

///////////////////////////////////////////////
// Lecture 107
// Coding Challenge #2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// a) Understand the problem

// b) Breaking into Sub-problem

// 1).
// const players = game.scored;

// for (const [i, el] of Object.entries(players)) {
//   console.log(`Goal ${Number(i) + 1}: ${el}`);
// }

// 2).
/*
const odds = Object.values(game.odds);

let average = 0;

for (const value of odds) {
  average += value;
}
average /= odds.length;
console.log(average);
*/

// 3).
/*
NB: In the array we use .entries() method to get the entries of the array. But in the object we have to use Object.entries() and then pass into the method the object we are interested in.
*/
// const team_odds = Object.entries(game.odds);
// console.log(team_odds);

// for (const [key, value] of team_odds) {
//   console.log(`Odd of victory ${game[key] ?? 'Draw'}: ${value}`);
// }
// for (const [key, value] of team_odds) {
//   const team_str = key === 'x' ? 'Draw' : `victory ${game[key]}`;
//   console.log(`Odd of ${team_str}: ${value}`);
// }

// BONUS
// const scored = game.scored;
// console.log(scored);

// const scorers = {
//   [scored[1]]: 1,
//   [scored[3]]: 1,
//   [scored[0]]: 2,
// };
// console.log(scorers);

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};

// const players = game.scored;
// console.log(players);

// for (const player of game.scored) {
//   // console.log(player);
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
/*
///////////////////////////////
// Lecture 106
// Looping Objects: Object Keys. Values. and Entries

/*
Recap: We learn about the For-of loop to loop over array, which is an iterable. We can also loop over objects which are not iterables but in an indirect way.

Few option depending exactly on what we want to loop over:
Do we want to loop over the object
  * Property names
  * Or over the values
  * Or both together 
*/

// Looping over Property Names (Keys)
/*
Object.keys return an array containing the property names of the openingHours object.
*/
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} Days:`;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Looping over Property Values
// const values = Object.values(openingHours);
// console.log(values);

// for (const value of values) {
//   console.log(value);
// }

// Looping over the entire object
/*
To really simulate, to loop over the entire object, we actually need the entries(names + values together).

NB: This distinction between the array and the object, is important as we loop ove the entire object. 
*/
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
////////////////////////////////////////

/*
//////////////////////////////////////////////
// Lecture 95
// Destructing Arrays
const arr = [1, 2, 3];

// Destructuring assignment
const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 returned values from a function
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [3, 4, [5, 7]];
// const [a, , b] = nested;
const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default values
const [p = 1, q = 1, u = 1] = [9, 10, 11];
console.log(p, q, u);

*/
/////////////////////////////////////

/*
// Lecture 96
// Destructuring Objects
// variable names should exactly match the property name that we
// want to retrieve.
// The oder of variables name doesn't matter.
const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

// Variable names to be different from the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Setting default values
const { menu = [], starterMenu: starter = [] } = restaurant;

console.log(menu, starter);

// Mutating variables
let a = 123;
let b = 238;

const obj = {
  a: 23,
  b: 3,
  c: 7,
};

({ a, b } = obj);
console.log(a, b);

// Destructuring Nested Objects
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Destructing an argument
restaurant.oderDelivery({
  time: '22:30',
  address: 'Kampala Kololo, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.oderDelivery({
  address: 'Kololo, 21',
  starterIndex: 2,
});
*/
/////////////////////////////////////

/*
// Lecture 97
// The spread Operator (...)
const arr = [7, 8, 9];
const new_arr = [1, 2, 3, ...arr];

console.log(new_arr);

// Creating a new menu array is one more food item
// Action: writing a new array from scratch simply based on expending
// restaurant.mainMenu array and adding one a new item to it.
const new_menu = [...restaurant.mainMenu, 'Chapati'];
console.log(new_menu);

// Use cases of the spread operator:
// Create a shallow copy of arrays
// Copy array
const main_menu_copy = [...restaurant.mainMenu];

// Join 2 or more arrays together
const joined_arrays = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(joined_arrays);

// Iterables are:arrays, strings, maps, sets. NOT objects
const str = 'Amani';
const letters = [...str, '', 'Z.'];
console.log(letters);
console.log(...str);

// Passing arguments into functions
// Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient1?"),
//   prompt('Ingredient2?'),
//   prompt('Ingredient3?'),
// ];

// restaurant.orderPasta(...ingredients);

// Objects
const new_restaurant = {
  foundedIn: 1996,
  ...restaurant,
  founder: 'Rehemah',
};

console.log(new_restaurant);

// Shallow copy
const restaurant_copy = { ...restaurant };
restaurant_copy.name = 'Angel In Us.';

console.log(restaurant_copy.name);
console.log(restaurant.name);
*/
////////////////////////////////////////////

/*
// Lecture 98
// Rest Pattern and Parameters
// Pack elements into an array

// 1) Destructuring

// SPREAD, because on the RIGHT side of the =
const arr = [1, 2, ...[3, 4]];

// REST, because on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

// Another example
const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFoods);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;

console.log(sat, weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;
  }
  console.log(sum);
};

add(1, 2, 3);
add(4, 5, 6, 7);
add(10, 11, 12, 13);

// SPREAD is the opposite of REST
const x = [23, 22, 28];
add(...x);

// REAL-WORLD example
restaurant.orderPizza('chicken', 'green-peppers', 'mushrooms', 'chez');
*/
////////////////////////////////

/*
// Lecture 99
// Short circuiting (&& and ||)

// 3 properties of logical operators:
// Use ANY data type, return ANY data type and
// they can can do Short-circuiting
console.log('----- OR -----');
console.log(3 || 'Amani');
console.log('' || 'Ziha');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// Real-world example
// restaurant.numGests = 3;
const guest_1 = restaurant.numGests ? restaurant.numGests : 10;
console.log(guest_1);

// Short-circuiting and the OR operator ||
// Easier way to set default values
const guest_2 = restaurant.numGests || 10;
console.log(guest_2);

console.log('--- AND ----');
console.log(0 && 'Ziha');
console.log(7 && 'Amani');

console.log('Hello' && 23 && null && 'Amani');

// Practical example
if (restaurant.orderPasta) {
  restaurant.orderPizza('mushroom', 'spinach');
}

// Using short-circuiting and the AND operator &&
restaurant.orderPizza && restaurant.orderPizza('Chicken', 'chilli');

// Summary
console.log('---- Summary -----');
restaurant.africans = 10;
const guest_3 = restaurant.africans || 'NO';
console.log(guest_3);

restaurant.orderPasta &&
  restaurant.orderPasta('Chicken', 'Mushrooms', 'Chilli');
*/
///////////////////////////////////

/*
// Lecture 100
// The Nullish Coalescing operator (??)
// O is a falsy value and so we go to the second
// operand
restaurant.africans = 0;
const guest_3 = restaurant.africans || 10;
console.log(guest_3);

// Nullish Coalescing operator ES2020
// Nullish: null and undefined (NOT 0 or "")
// All the nullish values will short-circuit the evaluation
// Only if the 1st value was null or undefined only then the second operand will be executed and returned. 
const guest_correct = restaurant.africans ?? 10;
console.log(guest_correct);
*/
///////////////////////////////////

/*
// Lecture 101
// Logical Assignment Operators ES2021
const rest_1 = {
  name: 'Angel In Us.',
  // numGuests: 30,
  numGuests: 0,
};

const rest_2 = {
  name: "Roll-x's",
  owner: 'Ziha Majolera',
};

// Setting default value for the restaurant
// with NO numGuest
// Short-circuiting with the OR operator
// rest_1.numGuests = rest_1.numGuests || 10;
// rest_2.numGuests = rest_2.numGuests || 10;

// The OR assignment operator ||=
// rest_1.numGuests ||= 10;
// rest_2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest_1.numGuests ??= 10;
rest_2.numGuests ??= 10;

// console.log(rest_1);
// console.log(rest_2);

// Logical AND assignment operator
// rest_1.owner = rest_1.owner && '<ANONYMOUS>';
// rest_2.owner = rest_2.owner && '<ANONYMOUS>';

rest_1.owner &&= '<ANONYMOUS>';
rest_2.owner &&= '<ANONYMOUS>';

console.log(rest_1);
console.log(rest_2);
*/
///////////////////////////////////

/*
// Lecture 102
// Coding Challenge #1
/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// 1).
const [players1, players2] = game.players;
console.log(players1, players2);

// 2). Rest pattern(REST syntax) & Destructuring
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3). Spread operator
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4). Spread operator
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5). Destructuring Nested Object
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, team2, draw);

// 6). REST Parameter
// const { score, scored } = game;
// console.log(score, scored);

const print_goals = function (...players) {
  console.log(`${players.length} goals scored`);
  console.log(...players);
};
print_goals(...game.scored);

// 7). The AND logical operator (&&)

team1 < team2 && console.log('Team2 is more likely to win! 🏆');
*/
//////////////////////////////////

/*
// Lecture 103
// Looping Arrays: The For-of loop
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Current element
for (const item of menu) console.log(item);

// Current Index
// Destructuring the current index
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
////////////////////////////

/*
// Lecture 104
// Enhanced Object literals

// ES6 Computing property name
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const [, , , , fir] = weekDays;
// console.log(fir);

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object (1)
  openingHours,

  // ES6 Writing methods (2)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  oderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:30', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
*/
// console.log(restaurant);
/////////////////////////////////

/*
// Lecture 105
// Optional Chaining (.?) ES2020

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH the Optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
// Optional chaining and Nullish coalescing operator
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day} we open at ${open}`);
}

// Methods
/*
Optional chaining does indeed also work for calling methods
We can check if a method actually exist before we can call it.
The ? will check is the .orderBugger method exits, 
if it doesn't it will immediately return undefine
*/

// console.log(restaurant.order?.(1, 0) ?? 'Method does not exist');
// console.log(restaurant.orderBugger?.(1, 0) ?? 'Method does not exist');

// Arrays
/*
The optional chaining also works on arrays. 
Basically we can use to check if an array is empty.
The optional chaining here test if the value on the left does exist.

NB:Get used to this optional chaining operator, which almost always get used 
together with the Nullish coalescing operator so that we can actually do something
incase we don't get the result from the object or from the array that is on the left 
hand side.
*/
/*
const users = [
  {
    name: 'Ziha',
    email: 'hola@ziha.io',
  },
];

console.log(users[0]?.name ?? 'User array empty!');

const users2 = [];
console.log(users2[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
*/
/////////////////////////////////////////////

// Go Up
