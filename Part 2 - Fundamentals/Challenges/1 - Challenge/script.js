// Write your code below

'use strict';

const calcAverage = (a,b,c) => (a + b + c) / 3;

const scoreDolphins = (calcAverage(85, 54, 41));
const scoreKoalas = (calcAverage(23, 34, 27));

const checkWinner = function (avgDolphins, avgKoalas) {
    console.log(`${scoreDolphins} and ${scoreKoalas}.`);
    
    if (scoreDolphins >= 2 * scoreKoalas) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner();

// i wrote this code 05.29.2025 (29 May, 2025) just to revise all information about functions.