'use strict'

const convertMoney = (euro) => {
  const euroDollarCourse = 1.2; // евро в доллар 
  const dollarRoubleCourse = 73; // доллар в рубль
  
  const roubles = euro * euroDollarCourse * dollarRoubleCourse;
  return roubles;
}

console.log(convertMoney(1))