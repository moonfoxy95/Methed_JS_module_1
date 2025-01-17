'use strict';

for (let y = 1; y <= 10; y++) { // блок
  console.log('-------------');

  for (let x = 1; x <= 10; x++) { // строка
    console.log(`${x} ^ ${y} = ${x ** y}`);
  }; 
};