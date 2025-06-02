'use strict';

// for loop
for (let rep = 1; rep <= 10; rep++) {
    // console.log(`Lifting weights repetition ${rep} 🧘`);
}

// variable - while loop - to declare and use
let rep = 1;

// while rep <= 10, this code should be executed
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🧘`);
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    dice !== 6 ? console.log(`You rolled a ${dice}. Next...`) : console.log(`Win! You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
}