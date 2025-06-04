'use strict';

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17°C in 1 days, 21°C in 2 days, 23°C in 3 days"

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// USE the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23];
// TEST DATA 2: [12, 5, -5, 0, 4];

// 1) Understand the problem
// - How to work with each element of the array?
// - How to take each element of the array?
// - How to input two values - temperature and days;

// 2) Solve the problem
// - Create a function with array 'arr'
// - Create a for loop for temperature
// - Calculate days inside this loop as well with ${i + 1}
// - Use template string ${} and such these inputs to complete the task.

// Write your code below 🎯

const data1 = [17,21,23];
const data2 = [12,5,-5,0,4];

const printForecast = function(arr) {

    let forecast = '';

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') continue;
        
        forecast += `${arr[i]}°C in ${i+1} days ... `;
    }

    console.log('...' + forecast);
}

printForecast(data1);
printForecast(data2);