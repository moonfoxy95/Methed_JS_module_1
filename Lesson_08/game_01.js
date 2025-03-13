'use strict';

const playGame = () => {
  let randomInt = Math.floor(Math.random() * 100) + 1; //1-100
  let state = true;

  while (state) {
    let userGuess = prompt(`Введите число от 1 до 100: (загадано ${randomInt})`); 

    if (isNaN(userGuess)) {
      console.log(`Введите число, а не ${typeof(userGuess)}`);      
    } else if (userGuess === null) {    
      state = false;
    } else if (userGuess > randomInt) {
      console.log(`Число ${userGuess} больше загаданного. Давай еще раз.`);      
    } else if (userGuess < randomInt) {
      console.log(`Число ${userGuess} меньше загаданного. Давай еще раз.`);      
    } else if (userGuess = randomInt) {
      console.log('Правильно!');
      state = false;
    }; 
  };
};

playGame();