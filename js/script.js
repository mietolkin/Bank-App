'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 500],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');





///////////////////////////////// SHOWING CURRENT BALANCE

const calcDisplayBalance = function (movements) {

    const balance = movements.reduce((acc, mov) => acc + mov, 0);

    labelBalance.textContent = `${balance} EUR`
}

calcDisplayBalance(account1.movements)

///////////////////////////////////////////////////////////////


//////////////////////////////// Showing transitions 
const displayMovements = function (movements) {

    containerMovements.innerHTML = ""; // clear list

    movements.forEach(function (mov, i) {

        const type = mov > 0 ? 'deposit' : 'withdrawal'


        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type} ">${i + 1} ${type} deposit</div>
                <div class="movements__date">24/01/2037</div>
                <div class="movements__value">${mov}</div>
            </div >
    `;

        containerMovements.insertAdjacentHTML('afterbegin', html)

        // console.log(html); 
    })



};

displayMovements(account1.movements);

////////////////////////////////////////////////////////////////////////

const calcDisplaySummary = function (movements) {
    console.log(movements);

    ///////// Calc functions
    const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov);
    const withdrawls = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov);
    console.log(incomes, withdrawls);

    ////Display
    labelSumIn.textContent = `${incomes} EUR`;
    labelSumOut.textContent = `${Math.abs(withdrawls)} EUR`;

    const interest = movements.filter(mov => mov > 0).map(deposit => (deposit * 1.2) / 100).reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${Math.round(interest)} EUR`

}

calcDisplaySummary(account1.movements)
































// const max = account3.movements.reduce((acc, cur) => acc < cur ? acc = cur : acc = acc);
// console.log(max);




// // const username = 'Anton Vitalievich Mietolkin';
// const createUsernames = function (accs) {

//     accs.forEach(function (acc) {
//         acc.username = acc.owner.toLowerCase().split(' ').map((word) => word[0]).join('');
//         // return acc.username;
//     })

//     // const username = accs.toLowerCase().split(' ').map((word) => word[0]).join('');
//     // return username;
// }


// console.log(createUsernames(accounts));

// console.log(accounts);


// /////////////////////////////////////////////////

// const deposits = account1.movements.filter(function (mov) {
//     return mov > 0;
// })

// console.log(account1.movements);
// console.log(deposits);

// const withdrawls = account1.movements.filter((mov) => mov < 0);

// console.log(withdrawls);


//////////////////////////////////////////////////

// const balance = account1.movements.reduce((acc, cur) => acc + cur, 0)

// console.log(balance);

// const displayBalance = function (bal) {
//     labelBalance.insertAdjacentHTML('afterbegin', `${bal} EUR `)
// };

// // ((bal) => labelBalance.text(`${bal}`));

// displayBalance(balance);






/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// const eurToUsd = 1.1;

// const movementsConverted = account1.movements.map((mov) => mov * eurToUsd * 10);


// console.log(account1.movements);

// console.log(movementsConverted);

// const movementsUsdfor = [];

// for (const mov of account1.movements) movementsUsdfor.push(mov * eurToUsd + 1);

// console.log(movementsUsdfor);

// account1.movements.map((mov, i, arr) => {})

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// const eurToUds = 1.1;

// movements.map(function (cur, i, arr) {
//     let usd = cur * eurToUds;
//     console.log(`Trans: ${i} is ${usd} usd`);

// })

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// const dogsJulia = [3, 5, 2, 12, 7];

// const dogsKate = [9, 16, 6, 8, 3];
// // const correctDogsJulia = dogsJulia.splice(1, 3);

// const dogs = dogsJulia.splice(1, 3).concat(dogsKate);

// console.log(dogs);

// dogs.forEach(function (dog, i) {
//     if (dog < 5) {
//         console.log(`Dog №${i + 1} is still puppy, it is ${dog} year's old`)
//     } else {
//         console.log(`Dog №${i + 1} is an adult, it is ${dog} year's old`)
//     }
// })

// // const checkDogs = function() {

// // }