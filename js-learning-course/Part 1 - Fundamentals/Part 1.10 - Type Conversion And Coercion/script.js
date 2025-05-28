// type conversion
const inputYear = '1991';

// we should convert manually to work with operations
console.log(Number(inputYear) + 18); // 1991 + 18 = 2009

// if we want to do any calculations, it won't work.
console.log(inputYear + 18); // '1991' + 18 = 199118

console.log(Number('Jonas')); // NaN (Not a Number)
console.log(typeof NaN); // number (invalid)

console.log(String(23), 23); // '23' - string conversion, 23 - number

// type coercion
console.log('I am ' + 23 + ' years old'); // string + number + string
// type number is converted to the string
console.log('23' - '10' - 3); // minus triggers, result: 10
console.log('23' + '10' + 3) // plus doesn't trigger, result: 23103
console.log('23' * '2') // converted to numbers, result: 46
console.log('23' / '2') // converted to numbers, result: 11.5