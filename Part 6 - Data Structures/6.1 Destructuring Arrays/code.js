'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },

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
};

// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring array (assignments)
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4
console.log(arr); // 2, 3, 4

const [first, second] = restaurant.categories;
console.log(first, second);

const [fir, , third] = restaurant.categories; // skip the second element
console.log(fir,third);

  //===================//
 // Swapping elements //
//===================//

let [main, , secondary] = restaurant.categories;

// Basic swap by declaring temp variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Better approach to swap elements
[main, secondary] = [secondary, main];

console.log(restaurant.order(2, 0)); // Garlic Bread, Pizza

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

  //===============//
 // Nested Arrays //
//===============//

const nested = [2, 4, [5, 6]];
const [i, ,j] = nested; // 2, [5, 6]

console.log(i,j);

// Destructuring inside of destructuring
const [num1, ,[num2, num3]] = nested;
console.log(num1,num2,num3); // 2 5 6

  //================//
 // Default values //
//================//

const [fruit1, fruit2, fruit3='none'] = ['banana', 'orange']; 
console.log(fruit1,fruit2,fruit3); // banana orange none (because we don't have the third fruit)

