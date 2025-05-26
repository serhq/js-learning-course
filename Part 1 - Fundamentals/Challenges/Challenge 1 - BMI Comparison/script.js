/* 

CHALLENGE #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

*/

let massMark = 78;
let heightMark = 1.69;

let massJohn = 95;
let heightJohn = 1.98;

const BMIMark = (massMark / (heightMark * heightMark));
const BMIJohn = (massJohn / (heightJohn * heightJohn));

let markHigherBMI = BMIMark > BMIJohn;
console.log('Does Mark have a higher BMI than John?: ' + markHigherBMI);

console.log("Mark's BMI: " + BMIMark + ",", "John's BMI: " + BMIJohn);
