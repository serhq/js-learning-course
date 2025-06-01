'use strict';

const userData = [
    'Olivia',
    'Rodman',
    2025 - 2001,
    'manager',
    ['sports', 'art', 'music']
];

const types = [];

for(let i = 0; i < userData.length; i++) {
    // reading from userData array
    console.log(`${userData[i]} => ${typeof userData[i]}`);

    // filling types array
    // types[i] = typeof userData[i];
    types.push(typeof userData[i]);
}

console.log(types);

const years = [2001, 1996, 1978, 1984];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break statements
console.log(`--- ONLY STRINGS HERE`);
for(let i = 0; i < userData.length; i++) {
    if(typeof userData[i] !== 'string') continue;
    // reading from userData array
    console.log(`${userData[i]} => ${typeof userData[i]}`);
}

console.log(`--- BREAK STATEMENT`);
for(let i = 0; i < userData.length; i++) {
    if(typeof userData[i] === 'number') break;
    
    console.log(`${userData[i]} => ${typeof userData[i]}`);
}