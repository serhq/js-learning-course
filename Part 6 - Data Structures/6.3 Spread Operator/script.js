'use script';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
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
            open: 0,
            close: 24,
        }
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
    }
};

const arr = ['banana', 'apple', 'blueberry'];
const badNewArr = ['coconut', 'mango', arr[0], arr[1], arr[2]]; // no spread operator
console.log(badNewArr);

// via the spread operator (...)
const newArr = ['coconut', 'mango', ...arr];
console.log(newArr);

console.log(...newArr); // every element individually

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // new array from scratch
console.log(newMenu);

// use cases of spread operator (...arr) 

// Copy array (Shallowing)
const mainMenuCopy = [...restaurant.mainMenu];

// 1) Merging arrays (Join)
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]; // 
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects (we can use spread operator on these iterables)

const str = 'Jonas';
const letters = [...str, ' ', 'S'];
console.log(letters);
console.log(...str);
// console.log(`${...str}`) - ERROR


// Real-world experiment
// const ingredients = [
//     prompt(`Let's make pasta! Ingredient 1?`), prompt(`Ingredient 2?`), 
//     prompt(`Ingredient 3?`)
// ];

// restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = {...restaurant,
    founder: 'Max',
    reviews: {
        monthly: 4.93,
        yearly: 4.76
    }
};

console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name, '/' ,restaurant.name);
