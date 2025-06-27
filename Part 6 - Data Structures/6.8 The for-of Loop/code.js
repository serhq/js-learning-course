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
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(`Ingredient: ${mainIngredient}`);
    if (!otherIngredients == '') {
      console.log('Other ingredients: NOT FOUND');
    } else {
      console.log(`Other ingredients: ${otherIngredients.join(', ')}`);
    }
  },

};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // merging arrays to create a new variable

  //================//
 // Looping Arrays //
//================//

for (const item of menu) {
  console.log(item);
};

// Structure: for (const item of arr) { };

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} // menu.entries()

// 
console.log(...menu.entries()); // contains the element and the index number of the original array /----> [0, "Focaccia"]