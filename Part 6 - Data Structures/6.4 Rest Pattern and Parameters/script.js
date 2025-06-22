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
    },

    orderPizza: (mainIngredient, ...otherIngredients) => {
        console.log(mainIngredient);
        console.log(...otherIngredients);
    }
};

// 1) Destructions

// SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on the LEFT side of =
const [a, b, ...others] =  [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu, 
    ...restaurant.starterMenu
]; // ...otherFood must be the last on the array

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays} = restaurant.openingHours; // only fri, thu will be displayed
console.log(weekdays);

// 2) Functions
const add = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        console.log(sum);
    }
};

add(2, 3, 5);
add(2, 3, 5, 7, 9, 15);

const x = [23, 5, 7];

add(x); // won't work, only 023,5,7
add(...x); // 23 + 5 + 7 = 35

// Restaurant 
restaurant.orderPizza('mushrooms', 'spinach', 'olives', 'onion'); // as expected
restaurant.orderPizza('mushrooms'); // mushrooms, []