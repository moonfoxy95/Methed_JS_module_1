'use strict';

/*
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min); // от min(вкл) до max(вкл)
};

console.log(getRandomInt(0, 5));
*/

const getRandomInt = (numberOfValues, min, max) => {
  let randomIntArray = []; 
  
  if (min > max) {
    [min, max] = [max, min];
  };

  let range = (max - min + 1); //от min(вкл) до max(вкл)
  
  for (let i = 0; i < numberOfValues; i++) {
    randomIntArray.push(Math.floor(Math.random() * range + min));
  };

  return randomIntArray
};

console.log(getRandomInt(5, 50, 60));