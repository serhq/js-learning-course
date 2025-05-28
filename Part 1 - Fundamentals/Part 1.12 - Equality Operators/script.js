const age = '18';

if (age === 18) console.log('You just became an adult (strict) :D') 

/* 
== and === difference

== - loose equality (compares two values after performing type coercion, automatic)
=== - strict equality (true/false) , if both values are the same! (no type coercion)


*/

if (age == 18) console.log('You just became an adult (loose) :D')

console.log('1' === 1); // false
console.log('' == 0) // true ('' = false = 0)

const favouriteNumber = Number(prompt(`What's your age?`)); // convert to number to let === work properly

if (favouriteNumber === 23) {
    console.log(`Cool! ${favouriteNumber} is acceptable`)
} else if (favouriteNumber === 7) {
    console.log (`I'm not sure. ${favouriteNumber}... well...`)
} else if (favouriteNumber === 100){
    console.log(`YEAHH! ${favouriteNumber}, you're welcome!`)
} else {
    console.log('Number is not 23 or 7 or 100')
}

// != - not equals to

if (favouriteNumber != 10) console.log(`interesting... why not 10?`);
