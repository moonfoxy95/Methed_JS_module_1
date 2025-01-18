'use strict';

const a = 245;
const b = 315;

const nod = (num1Original, num2Original) => {
  let num1 = num1Original;
  let num2 = num2Original;
  let min_num = null;
  let max_num = null;

  if (num1 < num2) {
    min_num = num1;
    max_num = num2;
  } else {
    min_num = num2;
    max_num = num1;
  }; 

  for (let i = min_num; i > 0; i--) {
    if (min_num % i === 0) {
      if (max_num % i === 0) {
        console.log(`Наибольший общий делитель ${num1} и ${num2}: ${i}`);
        return
      };
    };
  };
};

nod(a, b);