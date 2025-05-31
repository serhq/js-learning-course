const calcTip = function(bills) {
    if (bills >= 50 && bills <= 300) {
        return bills * 0.15;
    } else {
        return bills * 0.20;
    }
}

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);