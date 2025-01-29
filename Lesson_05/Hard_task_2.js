'use strict';

const a = 0;
const b = -8;

const minFunc = (a, b) => {
  let arithmeticMean = (a + b) / 2;
  let diffirence = Math.abs(arithmeticMean - a);
  let maxNumber = arithmeticMean + diffirence;
  let minNumber = arithmeticMean - diffirence;

  console.log(`Значения: ${a} и ${b}`);  
  console.log(`Максимальное число: ${maxNumber}`);
  console.log(`Минимальное число: ${minNumber}`);
};

minFunc(a, b);