'use strict';

// object has 5 properties
const userInfo = {
    userName: 'Olivia', // property of userName is the value 'Olivia'
    userLastName: 'Watson',
    age: 2025 - 1991,
    occupation: 'manager',
    hobbies: ['sports', 'art', 'piano']
} // object literal syntax

console.log(userInfo);

// dot notation
// only final property name
console.log(userInfo.age); // 34
console.log(userInfo.hobbies); // ['sports', 'art', 'piano']

// bracket notation
// we can put any expression
console.log(userInfo['occupation']); // manager

const nameKey = 'Name';
console.log(userInfo['user' + nameKey]); // ('user' + 'Name' = 'userName' = Olivia)
console.log(userInfo['userLast' + nameKey]); // Watson

// using prompt to get information that the user wants
const getInfo = prompt('What do you want to know about the user? Choose between userFirstName, userLastName, occupation, and hobbies')

if (userInfo[getInfo]) {
    console.log(userInfo[getInfo]); // display the info user requests
} else {
    console.log(`wrong request: the value ${getInfo} is not found in database`)
}

// adding new properties to the objects
userInfo.location = 'Denmark'; // dot notation
userInfo['discord'] = '@oliviawatson'; // bracket notation
console.log(userInfo);

// "Olivia has 3 hobbies, and her best hobby is art"

console.log(`${userInfo.userName} has ${userInfo['hobbies'].length} hobbies, and her best hobby is ${userInfo.hobbies[1]}`);//