const massMark = 78;
const heightMark = 1.69;
const massJohn = 90;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

/* 
1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
*/

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})! 🙊`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})! 🙊`)
}