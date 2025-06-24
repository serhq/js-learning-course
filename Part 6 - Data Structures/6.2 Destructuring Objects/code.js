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
  }

};

   //========================================//
  // Passing arguments through the function //
 //========================================//

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2, starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
})

//========================//
// Destructuring Objects //
//======================//

const { name, openingHours, categories } = restaurant; // Specifying the elements from the object "restaurant"
console.log(name, openingHours, categories);

const {
  name: restaurantName, // new var name
  openingHours: hours,
  categories: tags,
} = restaurant; // object
console.log(restaurantName, hours, tags);

  //================//
 // Default values //
//================//

const { 
  menu = [], // default value
  starterMenu: starters = [],
} = restaurant;
console.log(menu, starters);

  //====================//
 // Mutating variables //
//====================//

let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};

// {a, b} = obj; // expects a code block, won't work

({a, b} = obj);

  //=================//
 // Nested objects //
//================//

const { fri } = openingHours;
console.log(fri); // restaurant.openingHours{fri};

const { fri: {open: o, close: c},
} = openingHours; 
console.log(o,c);

