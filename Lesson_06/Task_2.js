'use strict';

const isPrime = (number) => {  
  for (let i = 1, check = 0; i <= number; i++) {        
    if (number % i  === 0) {
      check += 1;           
    };
    if (check >= 3 || number === 1) {
      break;
    } else if (i === number && check < 3) {
      console.log(`Число ${number} простое`);
      return
    };
  };
  console.log(`Число ${number} сложное`);
};

isPrime(151);