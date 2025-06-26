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

  //==================//
 // Short Circuiting //
//==================//

console.log('---- OR ----')

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas'); // If the first value is truthy, it returns the first value

console.log('' || 'Jonas');  // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' ||'Hello' || 23 || null); // 'Hello'

const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests); // doesn't exist, 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10, doesn't exist

console.log('--- AND ---');
console.log(0 && 'Jonas'); // When the first value is false (0)
console.log( 7 && 'Jonas'); // When everything is true, the last element displays ('Jonas')

console.log('Hello' && 23 && null && 'jonas'); // null (falsy value)

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// if restaurant.orderPizza doesn't exist => SKIP, otherwise if restaurant.orderPizza exists => RETURN VALUE ('mushrooms', 'spinach')
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

