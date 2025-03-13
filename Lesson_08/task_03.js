'use strict';

const getRandomInt = (numberOfValues, min, max, option) => {
  let randomIntArray = []; 
  
  if (min > max) {
    [min, max] = [max, min];
  };

  let range = (max - min + 1); //от min(вкл) до max(вкл)
  
  for (let i = 0; i < numberOfValues; i++) {
    let randomInt = Math.floor(Math.random() * range + min);

    if (option == 'even') {
      if (randomInt % 2 == 0) {
        randomIntArray.push(randomInt);
      } else {
        i -= 1;        
      };
    } else if (option == 'odd') {
      if (randomInt % 2 != 0) {
        randomIntArray.push(randomInt);
      } else {
        i -= 1;        
      };
    } else {
      randomIntArray.push(randomInt);
    };    
  };   

  return randomIntArray;
};

console.log(getRandomInt(5, 5, -5, 'odd'));