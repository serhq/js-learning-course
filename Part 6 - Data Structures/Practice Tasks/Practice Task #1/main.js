const accounts = [
  {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  },
  {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },
  {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  },
];

// Destructure the first account to get the owner's name and movements.
const [firstAccount] = accounts;
const { 
  owner, movements
} = firstAccount;
console.log(owner, movements);

// Find the account of 'Jessica Davis' using array methods.
const secondAccount = accounts.find(accounts => accounts.owner === 'Jessica Davis');
console.log(secondAccount);

// Add a new movement (+200) to her account using the spread operator.

const newMovements = [...secondAccount.movements, 200];
console.log(newMovements);

// Create a function that returns the sum of movements, using rest parameters.

const sumOfMovements = ([...rest]) => {
  let sum = 0;

  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  };

  console.log(`Sum of movements equals to ${sum}`);

  return sum;
}

sumOfMovements(secondAccount.movements);

// Use a for-of loop to print all movements for each account.

let allMovements = [];

for (const account of accounts) {
  for (const move of account.movements) {
    allMovements.push(move);
  };
};

console.log(allMovements);

// BONUS: Sum them up
sumOfMovements(allMovements);

// Use optional chaining to get the first movement of each account.

for (const acc of accounts) {
  console.log(
    acc.movements?.[0] ?? `No movements`
  );
};

// Set balance to 0 if nullish
for (const acc of accounts) {
  acc.balance = acc.balance ?? 0;
} 

console.log(...accounts);

// Find the highest value
const max = Math.max(...allMovements);
console.log(max);

// or

const findingMaxValue = () => {
  let maxValue = allMovements[0];

  for (let i = 0; i < allMovements.length; i++) {
    if (allMovements[i] > maxValue) maxValue = allMovements[i];
  };

  return maxValue;
};

console.log(`MAXIMUM: ` + findingMaxValue());