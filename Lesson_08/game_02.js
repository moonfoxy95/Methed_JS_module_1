'use strict';

const playGame = () => {
  let userInt1 = Number(prompt('Введите первое число'));
  let userInt2 = Number(prompt('Введите второе число'));
  if (userInt1 > userInt2) {
    [userInt1, userInt2] = [userInt2, userInt1];
  };
  let randomInt = Math.floor(Math.random() * (userInt2 - userInt1 + 1) + userInt1); // от(вкл) до(вкл) 

  let userGuesses = [];
  let totalInts = Math.abs(userInt1 - userInt2);
  let maxAttempts = undefined;
  (userInt1 === 50 && userInt2 === 100) ?  maxAttempts = 15 : maxAttempts = Math.round(totalInts / 3);
  let attempt = 1;    
  let userGuess = prompt(`${attempt}/${maxAttempts} Введите число от ${userInt1} до ${userInt2} (загадано ${randomInt}):`);    
    
  let state = true; 
  
  while (state) {   
    let foundGuesses = userGuesses.includes(userGuess);    

    if (userGuess === null) {    
      state = false;
    } else if (attempt > maxAttempts) {
      alert(`${attempt}/${maxAttempts} Вы израсходовали все ${maxAttempts} попыток и проигали.`);
      state = false;
    } else if (userGuess == randomInt) {      
      alert(`${attempt}/${maxAttempts} Правильно! С ${attempt} попытки!`);
      state = false;
    } else if (isNaN(userGuess)) {
      userGuess = prompt(`${attempt}/${maxAttempts} Введите число, а не ${typeof(userGuess)}. Попытка не засчитана. (загадано ${randomInt})`); 
    } else if (foundGuesses) {
      userGuess = prompt(`${attempt}/${maxAttempts} Число ${userGuess} уже использовалось. Попытка не засчитана. (загадано ${randomInt})`);
    } else if (userGuess > randomInt) {
      userGuesses.push(userGuess);   
      attempt += 1;   
      userGuess = prompt(`${attempt}/${maxAttempts} Число ${userGuess} больше загаданного. Давай еще раз. (загадано ${randomInt})`);                  
    } else if (userGuess < randomInt) {
      userGuesses.push(userGuess);    
      attempt += 1;
      userGuess = prompt(`${attempt}/${maxAttempts} Число ${userGuess} меньше загаданного. Давай еще раз. (загадано ${randomInt})`);                 
    } else {
      alert('Непредвиденная ситуация');
      state = false;
    };
  };
};

playGame();