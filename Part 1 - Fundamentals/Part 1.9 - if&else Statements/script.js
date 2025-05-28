const firstName = `Kyle`;
const age = 12;

if (age >= 18) {
    console.log(`Yes! ${firstName} can start driving license 🚘`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Unfortunately, ${firstName} cannot start driving license 
Wait another ${yearsLeft} years 😊`)
}

/* 

    control structure

if (){

} else {
    
}

*/

let century; // declare IS IMPORTANT!
const birthYear = 2025;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);