'use strict';

// Stored in call stack
const primitives = [
    'number', ' string', ' boolean',
    ' undefined', ' null', ' symbol',
    ' bigint'
]

console.log(`Primitives: ${primitives}`);

// Stored in heap
const objects = [
    'object literals', ' arrays',
    ' functions', ' many more...'
];

console.log(`Objects: ${objects}`);

// Object References in Practice (Shallow vs. Deep Copies)

const jessica1 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
};

const marriedJessica = marryPerson(jessica1, 'Davis'); // same as below

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

// jessica = {x: 23}; // assignment to constant variable, NOT ACCEPTABLE
// jessica.age = 30; // acceptable, reassigning

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'], // nested object, will create an object reference (mary, john)
};

// Shallow copy (mutating properties (arrays, objects, etc..))
const jessicaCopy = { ...jessica }; // copy ALL properties from old objects to the new one
jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary'); // as it's array, this will be changed in all objects
// jessicaCopy.family.push('John');

// console.log(jessica, jessicaCopy);

// Deep copy (deep clone)
const jessicaClone = structuredClone(jessica); // modern (deep clone)

// without being added to the original
jessicaClone.family.push('Mary');
jessicaClone.family.push('Bob');

console.log('Original: ', jessica)
console.log('Clone: ', jessicaClone);