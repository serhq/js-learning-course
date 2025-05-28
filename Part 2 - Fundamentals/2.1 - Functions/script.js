'use strict';

/* Function Structure

function name(parameters) {
    your code...
    return;
}

name(parameters);

*/

const userLocation = 'Berlin, Germany';

function logger() {
    console.log(`You're from ${userLocation}. Welcome! 🇩🇪`)
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges 🧃`; // the process of producing
    return juice; // returning juice we produced
}

const appleJuice = fruitProcessor(144, 286); // arguments (144 apples and 286 oranges)
console.log(appleJuice); 
// or
console.log(fruitProcessor(245,5994));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
