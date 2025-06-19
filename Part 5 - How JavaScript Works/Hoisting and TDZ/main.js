'use strict';

// Functions
console.log(addDecl(2,3)); // 5
// console.log(addExpr(2,3)); // expressions can't be hoisted
// console.log(addArrow(2,3)); // undefined - is not a function

function addDecl(a,b) {
    return a + b;
};

const addExpr = function (a,b) {
    return a + b;
};

var addArrow = (a,b) => a + b;

// Example

console.log(numProducts); // undefined

if(!numProducts) deleteShoppingCart(); // it's not 10, it's undefined.

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products were deleted.');
};

/* 
Write clean code - exclude 'var' while declaring functions.
Can use function declaration before initializing (not recommended).
*/

var x = 1;
let y = 2;
const z = 3;
