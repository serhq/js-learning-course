'use strict';

// information about user
// NOT DECLARATION, ONLY EXPRESSION

const user = {
    firstName: 'Helen',
    lastName: 'Abrams',
    birthYear: 2002,
    job: 'artist',
    kids: ['Ann', 'John', 'Taylor'],
    hasCertificate: true,
    // function value to calcuate the exact age 
    // calcAge: function () {
    //     // console.log(this); // this => object where object = user
    //     return 2025 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasCertificate ? 'a' : 'no'} certificate.`;
    }
};

console.log(user.calcAge());

console.log(user.age);

// console.log(age); // 23
// console.log(user['calcAge'](2002)); // 23

// Challenge:
// "Jonas is a 46-year old teacher, and he has a certificate."

console.log(user.getSummary()); // 