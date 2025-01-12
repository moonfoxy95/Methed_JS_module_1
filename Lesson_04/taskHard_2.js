'use strict';

{
const userIncome = Number(prompt('Введите доход:'));
const taxRate13 = 0.13;
const taxRate20 = 0.2;
const taxRate30 = 0.3;
let taxBase13 = null;
let taxBase20 = null;
let taxBase30 = null;
let tax = null;
let finalMessage = '';

if (userIncome >= 50000) {  
  taxBase30 = userIncome - 50000;
  taxBase20 = 35000;
  taxBase13 = 15000;
  tax = taxBase13 * taxRate13 + taxBase20 * taxRate20 + taxBase30 * taxRate30;
  finalMessage = `Доход ${userIncome}; ставка ${taxRate13*100}% на ${taxBase13}, ${taxRate20*100}% на ${taxBase20}, ${taxRate30*100}% на ${taxBase30}, налог ${tax}`;
} else if (userIncome >= 15000 && userIncome < 50000) {
  taxBase20 = userIncome - 15000;
  taxBase13 = 15000;
  tax = taxBase13 * taxRate13 + taxBase20 * taxRate20;
  finalMessage = `Доход ${userIncome}; ставка ${taxRate13*100}% на ${taxBase13}, ${taxRate20*100}% на ${taxBase20}, налог ${tax}`;
} else if (userIncome < 15000) {
  taxBase13 = userIncome;
  tax = taxBase13 * taxRate13;
  finalMessage = `Доход ${userIncome}; ставка ${taxRate13*100}% на ${taxBase13}, налог ${tax}`;
} else {
  console.log('Непредвиденный случай.');
}

console.log(finalMessage);
}