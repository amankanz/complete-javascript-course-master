'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
};

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

// Lecture 98
