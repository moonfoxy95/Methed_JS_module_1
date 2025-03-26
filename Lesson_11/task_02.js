'use strict';


const myFunc = (arr = []) => {
  const randInt = Math.floor(Math.random() * 11); // [0-10]
  arr.push(randInt);

  const sumArr = arr.reduce((acc, item) => acc + item);

  if (sumArr < 50) {
    return myFunc(arr);
  } else {
    console.log(`Сумма массива: ${sumArr}`, arr);
    return arr;
  };
};

myFunc();
