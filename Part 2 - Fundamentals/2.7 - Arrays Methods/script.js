'use strict';

const products = ['eggs', 'milk', 'butter', 'bread'];

// add the element (.push)
products.push('cheese');
console.log(products); // [ "eggs", "milk", "butter", "bread", "cheese" ]

// new length
const newLength = products.push('chicken');
console.log(products); // [ "eggs", "milk", "butter", "bread", "cheese", "chicken" ]
console.log(newLength); // 6

// add the first element (.unshift)
products.unshift('cucumber');
console.log(products) // [ "cucumber", "eggs", "milk", "butter", "bread", "cheese", "chicken" ]

// remove the element (.pop)
products.pop(); // last element
const popped = products.pop();
console.log(popped); // "cheese"
console.log(products); // [ "cucumber", "eggs", "milk", "butter", "bread" ]

// remove the first element (.shift)
products.shift();
console.log(products); // [ "eggs", "milk", "butter", "bread" ]

// check the index of the element in the array
console.log(products.indexOf('butter')); // 2
console.log(products.indexOf('tomato')); // no element there (-1)

// includes in the array
products.push(14)
console.log(products.includes('butter')); // true
console.log(products.includes('watermelon')); // false
console.log(products.includes(14)); // true

products.includes('butter') ? console.log(`yes`) : console.log(`naaah`); // 'yes'

products.includes('cucumber') ? console.log(`yes`) : console.log(`naaah`); // 'naaah'
//