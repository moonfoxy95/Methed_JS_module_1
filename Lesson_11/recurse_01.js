'use strict';

let userInt1 = Number(prompt('Введите первое число'));
let userInt2 = Number(prompt('Введите второе число'));
if (userInt1 > userInt2) {
  [userInt1, userInt2] = [userInt2, userInt1];
};
const randomInt = Math.floor(Math.random() * (userInt2 - userInt1 + 1) +
 userInt1); // от(вкл) до(вкл)

const userGuesses = [];
const totalInts = Math.abs(userInt1 - userInt2);
let maxAttempts = undefined;
(userInt1 === 50 && userInt2 === 100) ? maxAttempts = 15 : maxAttempts =
  Math.round(totalInts / 3);


const playGame = (attempt = 1) => {
  const userGuess = prompt(`${attempt}/${maxAttempts} Введите число от 
    ${userInt1} до ${userInt2} (загадано ${randomInt}):`);
  const foundGuesses = userGuesses.includes(userGuess);

  if (userGuess === null) {
    return;
  } else if (parseInt(userGuess) === randomInt) {
    alert(`${attempt}/${maxAttempts} Правильно! С ${attempt} попытки!`);
    return;
  } else if (isNaN(userGuess) || userGuess === '') {
    alert(`${attempt}/${maxAttempts} Введите число, а не 
      ${typeof(userGuess)}. Попытка не засчитана. (загадано ${randomInt})`);
  } else if (foundGuesses) {
    alert(`${attempt}/${maxAttempts} Число ${userGuess} уже 
      использовалось. Попытка не засчитана. (загадано ${randomInt})`);
  } else if (attempt >= maxAttempts) {
    alert(`${attempt}/${maxAttempts} Вы израсходовали все ${maxAttempts} 
      попыток и проигали.`);
    return;
  } else if (userGuess > randomInt) {
    userGuesses.push(userGuess);
    alert(`${attempt}/${maxAttempts} Число ${userGuess} больше 
      загаданного. Давай еще раз. (загадано ${randomInt})`);
    attempt += 1;
  } else if (userGuess < randomInt) {
    userGuesses.push(userGuess);
    alert(`${attempt}/${maxAttempts} Число ${userGuess} меньше
      загаданного. Давай еще раз. (загадано ${randomInt})`);
    attempt += 1;
  } else {
    alert('Непредвиденная ситуация');
    return;
  };

  return playGame(attempt);
};


playGame();
