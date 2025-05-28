// Values

// Primitive Data Types (7)
// 1) Number: Floating point numbers. Used for decimals and integers
let age = 23;
let year = 2025;
let date = 24;
let month = 5;
// 2) String: Sequence of characters. Used for text
let firstName = 'Jonas';
let holiday = 'None';
// 3) Boolean (bool): Logical type that can only be true (1) or false (0). Used for taking decisions
let javascriptIsFun = true;
console.log('Is JavaScript Fun? ' + javascriptIsFun)
// 4) Undefined: Isn't yet defined ('empty value')
let children;
let weather;
// 5) Null: Also means 'empty value'
// 6) Symbol (ES2015): Unique value that cannot be changed [Not useful]
// 7) BigInt (ES2020): Larger integers than the Number type can hold

// typeof usage:
console.log(typeof javascriptIsFun); // boolean
console.log(typeof age); // number
console.log(typeof holiday); // string
console.log(typeof children); // undefined
console.log(typeof '$'); // string

// Reassigning the variable (NOT let javascriptIsFun)
javascriptIsFun = 'YES!'; // before: boolean, after: string.
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // string

console.log(typeof weather); // undefined
weather = 'Sunny'; // reassign
console.log(typeof weather); // string

console.log(typeof null); // object, bug in JS.
