// Examples of Falsy and Truthy Values in JavaScript:

// Falsy Values
// 0, '', undefined, null, NaN (Not a Number)

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('False')); // true (non-empty string)
console.log(Boolean({})); // true (empty object)
console.log(Boolean('')); // false

const cash = 0;

// In an if-statement, JS coerces the value to Boolean:
// cash = 0 → falsy → else block runs
if (cash) {
    console.log(`Don't spend it all!`)
} else { // this will be executed
    console.log(`You should get a job!`)
}

let height;
console.log(typeof height); // undefined

if (height) { // height = undefined = falsy value
    console.log(`YAY! Height is defined!`);
} else { // this will be executed because 
    console.log(`Height is UNDEFINED!`);
}

height = 150;
console.log(typeof height); // number

if (height) {
    console.log(`YAY! Height is defined!`);
} else { // this won't be executed
    console.log(`Height is UNDEFINED!`);
}

height = 0;
console.log(typeof height); // number anyway

// >> if (height), where height = Boolean(height) = 0 = falsy value
if (height) { 
    console.log(`YAY! Height is defined!`);
} else { // this will be executed 
// because height is converted to boolean during the statement check 
    console.log(`Height is UNDEFINED!`);
}