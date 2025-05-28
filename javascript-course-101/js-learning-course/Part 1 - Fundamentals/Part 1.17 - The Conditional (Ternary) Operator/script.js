const age = 18;
// statement ? true : false;
age >= 18 ? console.log(`wine 🍷`) : console.log(`water 💧`); 

// const isDiscordLinked = true
// isDiscordLinked ? console.log(`You have already linked your Discord account 🧑🏻‍💻`) : console.log(`You didn't link your Discord account 😥`)

// briefly
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

// longer
let drink2;
if (age >= 18){
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}

console.log(drink2);

console.log(`I like drinking ${age >= 18 ? 'wine 🍷' : 'water 💧'}`); // ternary operators work inside the ${};

