'use strict';

// Use destructuring assignment to get the first and third players into variables named player1 and player3 (skip the second element).

const team = ['Messi', 'Ronaldo', 'Neymar', 'Modric'];

const [player1, , player3] = team;
console.log(player1, player3);

// Swap their values using destructuring assignment.

let countryA = 'France';
let countryB = 'Germany';
console.log(countryA, countryB);

[countryA, countryB] = [countryB, countryA];
console.log(countryA, countryB);

// Use destructuring assignment to get the following values into variables:

// The first number (num1)
// Skip the second number
// Get the third element (the inner array) and destructure its first and second numbers into num3a and num3b

const nestedNumbers = [10, 20, [30, 40]];

const [num1, ,[num3a, num3b]] = nestedNumbers;
console.log(num1, num3a, num3b);

// Use destructuring with default values to assign these to variables:
// 
// a gets the first element
// b gets the second element
// c is missing in the array, so it should get the default value 'default'

const smallArray = ['first', 'second'];
const defaultValue = 'default';

const [a, b, c = defaultValue] = smallArray;
console.log(a,b,c);

// Use destructuring to get id and name into variables.
const user = {
  id: 101,
  name: 'Alex',
  age: 25
};

const [id, name] = [user.id, user.name];
console.log(id, name);

// Use destructuring to get the second and fourth sports into variables named sport2 and sport4 (skip the first and third elements).
const sports = ['Football', 'Basketball', 'Tennis', 'Swimming'];

const [,sport2, ,sport4] = sports;
console.log(sport2, sport4);

// Use array destructuring to assign the following:

// gold gets the first element
// silver gets the second element
// bronze1 gets the first element of the nested array (inner first element)
// bronze2 gets the second element of the nested array, but if it is null, use the default value 'No Bronze'

const results = ['Gold', 'Silver', ['Bronze', null]];
const noBronzeMsg = 'No Bronze';

let [gold, silver, [bronze1, bronze2]] = results;
bronze2 = bronze2 !== null ? bronze2 : noBronzeMsg;
console.log(gold, silver, bronze1, bronze2);

