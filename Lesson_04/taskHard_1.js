'use strict';

{
const userIncome = Number(prompt('Введите доход:'));
let taxRate = null;

/*
//Решение через if else
if (userIncome < 15000) {  
  taxRate = 13;
} else if (userIncome >= 15000 && userIncome < 50000) {   
  taxRate = 20; 
} else {  
  taxRate = 30;  
};
*/

//Решение через switch case
switch(true) {
  case (userIncome < 15000):    
    taxRate = 13;
    break;
  case (userIncome >= 15000 && userIncome < 50000):    
    taxRate = 20;
    break;
  case (userIncome >= 50000):    
    taxRate = 30;
    break;
  default:
    console.log('Что-то не так.');
    break;
};

const tax = ((userIncome * taxRate)/100).toFixed(2);
let finalMessage = `При доходе ${userIncome} налог при ставке ${taxRate}% составляет ${tax}`;
console.log(finalMessage);
}