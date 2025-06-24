'use strict';

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

  order: function(
    starterMenuIndex, 
    mainMenuIndex,
  ) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  orderDelivery: function ({
    time='20:00', 
    address, 
    mainIndex=0, 
    starterIndex=1
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  }

};

  //===========================//
 // The Spread Operator (...) //
//===========================//

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // no spread operator

// Take values from 'arr' and write individually
const newArr = [1, 2, ...arr]; // ...arr = spread operator
console.log(newArr); // 1, 2, 7, 8, 9

// Log individually
console.log(...newArr); // same as below
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // new array from scratch, but spreading the restaurant.mainMenu
console.log(newMenu);

  //============//
 // Copy array //
//============//

const mainMenuCopy = [...restaurant.mainMenu];

  //==================//
 // Joining 2 arrays //
//==================//

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

   //==============================//
  // Iterables: arrays, strings,  //
 //    maps, sets, NOT OBJECTS   //
//==============================//

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ["J", "o", "n", "a", "s", " ", "S."]
console.log(...str); // J o n a s

// console.log(`${...str}`) // won't work. IMPORTANT!

const ingredients = [
  prompt(`Let's make pasta! Ingredient 1`),
  prompt(`Ingredient 2`),
  prompt(`Ingredient 3`),
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // isn't efficient
restaurant.orderPasta(...ingredients); // spread works better if you have more prompts/elements inside the array

  //=========//
 // Objects //
//=========//

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe'
};

console.log(newRestaurant);

  //==============================//
 // Shallowing (copying new one) //
//==============================//

const restaurantCopy = {...restaurant}; // creating new restaurant
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano