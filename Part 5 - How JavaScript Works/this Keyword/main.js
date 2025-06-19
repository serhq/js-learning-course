'use strict';

// this keyword/variable

const currentYear = 2025;
const currentCountry = 'Ukraine';

const userData = {
    name: 'Maria',
    year: 2000,
    calcAge: function() {
        return currentYear - this.year;
    },
    country: 'Ukraine',
    isForeigner: function() {
        if (this.country == currentCountry) {
            console.log(`${this.name} is not foreigner. ${this.name} resides in ${this.country}`);
        } else {
            console.log(`${this.name} is foreigner. ${this.name} is from ${this.country}`);
        }
    }
};

userData.calcAge(); // 25
userData.isForeigner();

// Explaining 'this' keyword

console.log(this); // undefined (no function)

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // arrow function doesn't get this keyword. it's a window.
}

calcAgeArrow(1980);

// Object

const staffInfo = {
    year: 2005,
    calcAge: function() {
        console.log(this); // object that is calling the method (staffInfo object)
        return 2025 - this.year;
    },
};

staffInfo.calcAge(); // object and 46

const company = {
    year: 2020,
};

company.calcAge = staffInfo.calcAge; // method borrowing (don't have to write it in a duplicate way)
console.log(`The company was created ${company.calcAge()} years ago.`);

const f = staffInfo.calcAge;
f(); // undefined

