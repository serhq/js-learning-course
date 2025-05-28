'use strict';

// task 1:
// Write a function that takes one argument — a name — and returns the string: "Hello, [name]!"

function greeting(name) {
    return `Hello, ${name}!`;
}

console.log(greeting('Maria'));
console.log(greeting('Alex'));
console.log(greeting('Sabrina'));
console.log(greeting('Max'));


// task 2:
// Write a function that takes a number and returns its square (number × number).

function square(number) {
    return number ** 2;
}

console.log(square(4)); // 16
console.log(square(8)); // 64
console.log(square(5)); // 25
console.log(square(12)); // 144


// task 3:
// Write a function that converts a temperature from Celsius to Fahrenheit using the formula: F = C × 1.8 + 32.

function toFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

console.log(toFahrenheit(0));
console.log(toFahrenheit(25));
console.log(toFahrenheit(44));
console.log(toFahrenheit(11));

// task 4:
// Write a function that checks if a number is even. It should return true for even numbers and false for odd numbers.

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(88));
console.log(isEven(27));

// task 5:
// Write a function that takes a string and returns its first character.

function firstChar(word) {
    return word.charAt(0);
}

console.log(firstChar("bumyyy1"));
console.log(firstChar("euphoria"));
console.log(firstChar("eternalmirage"));


// task 6:
// Write a function that takes two numbers and returns their sum. If one or both are missing, use 0 as default.

function sum(a = 0, b = 0) {
    return a + b;
}

console.log(sum(44,95));
console.log(sum(-4,9));
console.log(sum(-86,-75));

// Add 10 to a Number
// Function that takes a number and returns the number plus 10.

function add10 (n) {
    return n + 10;
}

console.log(add10(5));    // Expected: 15
console.log(add10(0));    // Expected: 10
console.log(add10(-3));   // Expected: 7

// Check if Number is Positive

function isPositive(n) {
    return n > 0;
}

console.log(isPositive(10));   // Expected: true
console.log(isPositive(0));    // Expected: false
console.log(isPositive(-5));   // Expected: false

// Check if String is Empty

function isEmpty(s) {
    return s === '';
}

console.log(isEmpty(""));        // Expected: true
console.log(isEmpty("text"));    // Expected: false
console.log(isEmpty(" "));       // Expected: false (space is a character)

// Multiply Two Numbers

function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4));    // Expected: 12
console.log(multiply(0, 10));   // Expected: 0
console.log(multiply(-2, 5));   // Expected: -10

// Convert Minutes to Seconds

function minutesToSeconds(min) {
    return min * 60;
}

console.log(minutesToSeconds(5));    // Expected: 300
console.log(minutesToSeconds(0));    // Expected: 0
console.log(minutesToSeconds(1.5));  // Expected: 90
