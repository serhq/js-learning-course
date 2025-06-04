'use strict';

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // C) FIX THE BUG
        // value: Number(prompt('Degrees celsius:')),
        value: 10,
    };

    // B) FIND THE BUG
    console.table(measurement); // nicely formatted table (helpful)

    const kelvin = measurement.value + 273;
    return kelvin;
}

// A) IDENTIFY THE BUG
console.log(measureKelvin());

// BUG #2 : using a debugger

const calcTempAmplitudeBug = function (t1,t2) {

    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== 'number') continue; // skip 'error'

        if (min > curTemp) min = curTemp; 
        if (max < curTemp) max = curTemp;

    }
    console.log(max, min);
    return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3,5,1], [9,4,5]);
console.log(amplitudeBug);