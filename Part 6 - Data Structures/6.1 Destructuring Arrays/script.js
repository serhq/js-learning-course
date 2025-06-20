'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructuring assignment
console.log(x, y, z);
console.log(arr);

let [main, ,secondary] = restaurant.categories; // Italian Vegeterian because ', ,' skips the element
console.log(main, secondary);

// Switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(temp); // Italian
console.log(main, secondary); // switched

// Another solution
[main, secondary] = [secondary, main]; // Reassigning
console.log(main, secondary);

const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse,mainCourse);


// Nested array 
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested; // 2, [5, 6]
// console.log(i,j);

// Destructuring inside the destructuring
const [i, ,[j, k]] = nested;
console.log(i, j, k); // 2, 5, 6

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r); // r=1 as a default because it's originally undefined

