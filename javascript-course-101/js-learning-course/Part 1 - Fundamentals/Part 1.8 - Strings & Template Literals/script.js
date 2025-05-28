const firstName = 'Mark'; // string
const job = 'student'; // string
const birthYear = 2006; // number
const year = 2025; // number

// easier, but not efficient way
const mark = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old'+ ', a ' + job + '!';
console.log(mark);

// `` - template string
// to declare — ${name}
// fastest and efficient way.
const markNew = `I'm ${firstName}, a ${year - birthYear} years old, a ${job}!`
console.log(markNew);

// you can use `` in every case you want to type a string
console.log(`Just a regular string...`);

// one string, but with more lines: \n\ - space
console.log('String with \n\
multiple \n\
lines');

// easier way!! `` - template string
console.log(`String with
multiple
lines`)
