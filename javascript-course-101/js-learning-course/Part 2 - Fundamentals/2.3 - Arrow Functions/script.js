
// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const dividing = (a,b) => a / b;
const inputs = dividing(12, 6);
console.log(inputs);

// Another example of arrow function
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

// If we have multiple variables, put them into paranthesis
const perimeterOfTheRectangle = (l, b) => {
    return 2 * (l + b);
}

console.log(perimeterOfTheRectangle(5, 10));
console.log(perimeterOfTheRectangle(0, 0)); 
