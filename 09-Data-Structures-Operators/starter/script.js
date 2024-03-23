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

/*
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

// Lecture 104
// Enhanced Object literals

// ES6 Computing property name
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const [, , , , fir] = weekDays;
console.log(fir);

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`Day-: ${4 + 2}`]: {
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

console.log(restaurant);
