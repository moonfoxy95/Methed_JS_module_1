'use strict';

const getRandomInt = (numberOfValues) => {
  let randomIntArray = [];  
  
  for (let i = 0; i < numberOfValues; i++) {
    randomIntArray.push(Math.floor(Math.random() * (101))); //от 0(вкл) до 100(вкл)    
  };
  return `Final array: ${randomIntArray}`
};

console.log(getRandomInt(5));