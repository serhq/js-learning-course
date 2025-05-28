// Function declaration
const age1 = calcAge1(1991);

function calcAge1 (birthYear) { 
    return 2037 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) { // an expression, anonymous function, produces a value.
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

/* 

Function declaration —> we can call it before defining (not recommended though), but function expression —> NO!   

*/
