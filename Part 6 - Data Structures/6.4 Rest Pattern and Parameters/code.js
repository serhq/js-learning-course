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

  //==============//
 // Rest Pattern //
//==============//

// SPREAD (...[]), because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST (...var), because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu, 
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // skipped 2 element, but otherFood continues to display the food until the end

  //=================//
 // Rest in Objects //
//=================//

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays); // thu, fri (sat is skipped because it's already assigned to variable)

  //===================//
 // Rest in Functions //
//===================//

const add = function(...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
}

add(2, 3, 9, 14);
add(2, 9, 15, 583, 9385, 9544);
add(4, 0, 3, 1, 6, 9, 9);

const x = [23, 5, 7];
add(x); // 023,5,7
add(...x); // individually 23 + 5 + 7 = 35

  //=================//
 // Rest in project //
//=================//

restaurant.orderPizza('mushrooms', 'onions', 'spinach', 'olives');
restaurant.orderPizza('dough'); // dough, [] - empty array because we don't have otherIngredients

