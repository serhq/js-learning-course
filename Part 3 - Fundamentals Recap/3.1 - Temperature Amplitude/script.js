'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/* 
1) Understand the problem
— What is temp amplitude? Answer: difference between highest and lowest temp
— How to compute max and min temperatures:
— What's a sensor error? What to do?
*/

/*
2) Breaking up into sub-problems
— How to ignore errors?
— Find max and min values
— Subtract min from max and return it
*/

const calcTempAmplitude = function (temperatures) {

    let min = temperatures[0];
    let max = temperatures[0];

    for (let i = 0; i < temperatures.length; i++) {
        if (typeof temperatures[i] !== 'number') continue; // skip 'error'

        if (min > temperatures[i]) min = temperatures[i]; 
        if (max < temperatures[i]) max = temperatures[i];
    }
    console.log(max, min);
    return max - min;
};

console.log(calcTempAmplitude(temperatures));

// PROBLEM 2: MERGING 2 ARRAYS INTO ONE TO CALCULATE THE VALUE;

// 1) Understand the problem
// - Should we implement functionality twice? NO! Merge 2 arrays.

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1,t2) {

    const temps = t1.concat(t2);
    console.log(temps);

    let min = temps[0];
    let max = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== 'number') continue; // skip 'error'

        if (min > curTemp) min = curTemp; 
        // 3 > 3 = min = 3;
        // 3 > 5 = min = 3;
        // 3 > 1 = min = 1;
        // 1 > 9 = min = 1;
        // 1 > 0 = min = 0;
        // ...
        if (max < curTemp) max = curTemp;
        // 3 < 3 = max = 3;
        // 3 < 5 = max = 5;
        // 5 < 1 = max = 5;
        // 5 < 9 = max = 9;
        // ...

    }
    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3,5,1], [9,0,5]);
console.log(amplitudeNew);