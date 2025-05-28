// 1. Create an arrow function calculateTotal to sum items sold in 4 categories.
// 2. Create variables totalStoreA and totalStoreB, assign results of calculateTotal with sales data.
// 3. Create function compareSales that compares totals and logs who sold more or if it's a tie.
// 4. Test compareSales with two data sets:
//    - Store A: 15, 30, 25, 10; Store B: 20, 20, 20, 20
//    - Store A: 40, 40, 40, 40; Store B: 50, 30, 20, 20

const calculateTotal = (a,b,c,d) => a + b + c + d;

const totalScoreA = calculateTotal(30,45,60,10);
const totalScoreB = calculateTotal(20,20,20,10);

const compareSales = function (storeA, storeB) {
    if (storeA > storeB) {
        console.log(`Store A sold more (${totalScoreA} vs. ${totalScoreB})`);
    } else if (storeA < storeB) {
        console.log(`Store B sold more (${totalScoreB} vs. ${totalScoreA})`);
    } else {
        console.log(`Both stores sold the same amount (${storeA})`);
    }
}

compareSales(totalScoreA, totalScoreB);