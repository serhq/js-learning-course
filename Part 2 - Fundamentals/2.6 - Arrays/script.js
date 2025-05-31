'use strict';

// way to store friends by creating variables
const friend1 = 'Alex';
const friend2 = 'Maria';
const friend3 = 'Bob';

// arrays 
const friends = ['Alex','Maria','Bob'];
console.log(friends);

// another way to create an array
const years = new Array('2025', '2023', '2021', '2019');
console.log(years);

// outputs
console.log(friends[0]); // 'alex'
console.log(friends[0],friends[2]); // 'alex', 'bob'

console.log(friends.length); // get the exact amount of elements = 3
console.log(friends[friends.length - 1]); // get the last element from the array -> friends[2] = Bob

// replace the element in the array
friends[2] = 'Olivia';
console.log(friends);
// NOT friends = ['Bob','Jay']; = error

const firstName = 'Serhii';
const userData = [firstName, 'Yatsunenko', 2025-2007, 'student', friends];

console.log(userData);
console.log(userData.length); // 5

// Task
const calcAge = birthYear => 2037 - birthYear;
const listOfYears = [2025, 2023, 2022, 2018, 1964, 1998]

console.log(calcAge(listOfYears[0]), calcAge(listOfYears[1]), calcAge(listOfYears[listOfYears.length - 1])); // 12, 14, 39
// or
const age1 = calcAge(listOfYears[0]); // 12
const age2 = calcAge(listOfYears[1]); // 14
const age3 = calcAge(listOfYears[listOfYears.length - 1]); // 39
console.log(age1, age2, age3); // 12 14 39

const ages = [age1, age2, age3];
console.log(ages); // [12, 14, 39]
console.log(ages.length); // 3
console.log(ages[ages.length - 1]); // 39