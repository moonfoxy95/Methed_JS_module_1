'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const getBotGuess = () => {
    const botGuessInt = getRandomIntInclusive(0, 1);
    let botGuess = undefined;
    if (botGuessInt === 0) {
      botGuess = 'Бот загадал четное';
    } else {
      botGuess = 'Бот загадал нечетное';
    };

    console.log(botGuess);
    alert(botGuess);

    return botGuess;
  };

  const checkUserInput = (userInput, marbles) => {
    if (userInput === null) {
      return null;
    };

    // Введено не не-число
    if (!(isNaN(userInput))) {
      // Введено число в правильных пределах
      if (userInput >= 1 && userInput <= marbles) {
        return Number(userInput);
      };
    };

    const text = `Введите число от 1 до ${marbles}!`;
    console.log(text);
    alert(text);

    return false;
  };

  const checkExitConditions = (playerMarbles, botMarbles) => {
    const textPlayerLost = 'Вы проиграли! Конец игры.';
    const textBotLost = 'Вы победили бота! Конец игры.';

    if (playerMarbles <= 0) {
      console.log(textPlayerLost);
      alert(textPlayerLost);
      return true;
    } else if (botMarbles <= 0) {
      console.log(textBotLost);
      alert(textBotLost);
      return true;
    } else {
      return false;
    };
  };

  const playAgain = () => {
    const text = 'Сыграть еще?';
    console.log(text);
    const playAgain = confirm(text);
    return playAgain;
  };

  const game = () => {
    const result = {
      player: 5,
      bot: 5,
    };

    const getRoundResult = (userInput, botGuess) => {
      // если задать текст здесь, то при выводе значения после пересчета
      // не обновятся, и выведутся старые
      let textBotWins = undefined;
      let textPlayerWins = undefined;

      if ((botGuess === 'Бот загадал четное' && userInput % 2 === 0) ||
        (botGuess === 'Бот загадал нечетное' && userInput % 2 !== 0)) {
        result.player -= userInput;
        result.bot += userInput;

        textBotWins = `[Игрок: ${result.player}, Бот: ${result.bot}]\n` +
          `Бот забирает себе шарики: ${userInput}.`;

        console.log(textBotWins);
        alert(textBotWins);
      } else {
        result.player += userInput;
        result.bot -= userInput;

        textPlayerWins = `[Игрок: ${result.player}, Бот: ${result.bot}]\n` +
          `Игрок забирает себе шарики: ${userInput}.`;

        console.log(textPlayerWins);
        alert(textPlayerWins);
      };
    };

    return function start() {
      const userInput = prompt(
        `[Игрок: ${result.player}, Бот: ${result.bot}]\n` +
        `Введите количество шариков (от 1 до ${result.player}): `,
      );

      const checkedUserInput = checkUserInput(userInput, result.player); // проверка ввода пользователя

      // выход через "отмена"
      if (checkedUserInput === null) {
        const wantToQuit = confirm('Действительно хотите выйти?');
        if (wantToQuit === true) {
          return;
        };
      };

      // верный ввод пользователя
      if (checkedUserInput) {
        const botGuess = getBotGuess(); // загадывание чет/нечет бота
        getRoundResult(checkedUserInput, botGuess); // определение результата раунда
        const exitCondition = checkExitConditions(result.player, result.bot); // определение наличия шариков

        // если шариков недостаточно
        if (exitCondition === true) {
          if (playAgain() === true) {
            result.player = 5;
            result.bot = 5;
          } else {
            return;
          }
        };
      };

      start();
    };
  };

  window.marbles = game;
})();
