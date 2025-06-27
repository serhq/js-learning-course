'use strict';

const workingHours = [...Array(25).keys()];
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const [index, hours] of workingHours.entries()) console.log(`${index}. ${hours}`);
// console.log(...workingHours);

// 1) We have object that outside of the object 
const openingHours = {
    [weekdays[3]]: { // instead of 'thu'
      open: workingHours[0],
      close: workingHours[22],
    },
    [weekdays[4]]: {
      open: workingHours[11],
      close: workingHours[23],
    },
    [weekdays[5]]: {
      open: workingHours[0], // Open 24 hours
      close: workingHours[24],
    },
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  openingHours,

  // ES6 Enhanced Object Literals (Functions)
  order (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  
  // ES6 Enhanced Object Literals (Functions)
  orderDelivery ({time='20:00', address, mainIndex=0, starterIndex=1}) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  
  // ES6 Enhanced Object Literals (Functions)
  orderPasta (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  
  // ES6 Enhanced Object Literals (Functions)
  orderPizza (mainIngredient, ...otherIngredients) {
    console.log(`Ingredient: ${mainIngredient}`);
    if (!otherIngredients == '') {
      console.log('Other ingredients: NOT FOUND');
    } else {
      console.log(`Other ingredients: ${otherIngredients.join(', ')}`);
    }
  },

};

// Looping over the object

const properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days per week: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// Entries method
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}