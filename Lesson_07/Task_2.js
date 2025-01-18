'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arrNumbers) => {
  let sumArrNumbers = 0;

  for (let number of arrNumbers) {
    sumArrNumbers += number;
  };

  const averageValue = sumArrNumbers / arrNumbers.length;
  console.log(Math.floor(averageValue));
};

getAverageValue(allCashbox);