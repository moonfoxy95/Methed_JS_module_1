'use strict';

const playGame = () => {
  let randomInt = Math.floor(Math.random() * 100) + 1; //[1-100]     
  let userGuess = prompt(`Введите число от 1 до 100: (загадано ${randomInt})`); 
  let state = true; 

  while (state) {
    if (isNaN(userGuess)) {
      userGuess = prompt(`Введите число, а не ${typeof(userGuess)} (загадано ${randomInt})`);      
    } else if (userGuess === null) {    
      state = false;
    } else if (userGuess > randomInt) {
      userGuess = prompt(`Число ${userGuess} больше загаданного. Давай еще раз. (загадано ${randomInt})`);      
    } else if (userGuess < randomInt) {
      userGuess = prompt(`Число ${userGuess} меньше загаданного. Давай еще раз. (загадано ${randomInt})`);      
    } else if (userGuess = randomInt) {
      alert('Правильно!');
      state = false;
    }; 
  };
};

playGame();