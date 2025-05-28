/* 

      Operators
    +, -, *, %, /

*/

const now = 2037;

// Subtraction (-)
const ageMaria = now - 1991;
const ageSarah = now - 2018;
console.log(ageMaria, ageSarah); 

// Contraction (+)
console.log(ageSarah + 2); // now - 2018 and then the result adds 2
console.log(2 + 2); // output: 4;

// Multiplication (*)
console.log(2*128); // output: 256
console.log(ageMaria * 4); // now - 2018 => output * 4

// Division (/)
console.log(2/2); // output: 1
console.log(81/9) // output: 9
console.log(now / 97) // output: 21

// Exponentation (**)
let base = 5;
let exponent = 2;
console.log(base ** exponent); // output: 25, because 5 raised to the power of 2 equals to 25 (same as 5^2 = 25)
console.log(2**3); // result: 8, because 2 raised to the power of 3 equals to 8 (same as 2^3 = 8)

// Contraction with strings
const firstName = 'Max';
const lastName = 'Rodrigo';
console.log(firstName + lastName); // Output: MaxRodrigo
console.log(firstName + ' ' + lastName); // Output: Max Rodrigo

/* 

    Assignment Operators
      =, +=, *=, ++, --

*/

let x = 10 + 5; 
console.log(x); // 15

x += 10; // x = x + 10 (15 + 10)
console.log(x); // 25

x *= 4; // x = x * 4 (25 * 4)
console.log(x); // 100

x++; // x = x + 1;
console.log(x); // 101

x--; // x = x - 1;
console.log(x); // 100

/* 

    Comparison Operators
        >, <, >=, <=

*/

// if it's true, result = true; if it's false, then result = false; 
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18); // more and equals to...
console.log(ageJonas <= 18); // less and equals to...

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);