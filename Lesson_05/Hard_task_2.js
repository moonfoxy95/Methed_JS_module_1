'use strict';

const a = 8;
const b = 4;

const minFunc = (num1Original, num2Original) => {
  let num1 = num1Original;
  let num2 = num2Original;

  const result = num1 > num2;
  console.log(`${num1} больше ${num2}: ${result}`);
};

minFunc(a, b);