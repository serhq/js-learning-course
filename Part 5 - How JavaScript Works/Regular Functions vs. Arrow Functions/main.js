'use strict';

const currentYear = 2025;

// var firstName = 'Max'; // avoid using var

const info = {
    firstName: 'Serhii',
    year: 2007,
    calcAge: function() {
        // console.log(this); // object review
        console.log(currentYear - this.year); // 18


    // SOLUTION 1
    //     const self = this; // self or that
    //     const isMillenial = function() {
    //         console.log(self);
    //         console.log(self.year >= 1981 && self.year == 1996);
    //     };

    //     isMillenial();
    // },        
    
    // SOLUTION 2
    //'THIS' from his parent scope (info)
    // Arrow functions don't have their 'this' keyword.
    const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year == 1996);
    };

    isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey, ${this.firstName}`);
    }, 
}; // object literal

info.greet();
info.calcAge();

const addExpr = function (a,b) {
    console.log(arguments);
    return a + b;
};

addExpr(2,5);
addExpr(2,9,6,8,9,3,7,5);

var addArrow = (a,b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2,5,8); // arguments is not definedat addArrow