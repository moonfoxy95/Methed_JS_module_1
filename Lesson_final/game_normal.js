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
    let textBotGuess = undefined;

    if (botGuessInt === 0) {
      textBotGuess = 'Бот загадал четное';
      botGuess = true;
    } else {
      textBotGuess = 'Бот загадал нечетное';
      botGuess = false;
    };

    console.log(textBotGuess);
    alert(textBotGuess);

    return botGuess;
  };

  const getBotTurn = (marbles) => {
    const botChoose = getRandomIntInclusive(1, marbles);
    const text = `Бот загадал количество шариков! (${botChoose})`;
    console.log(text);
    return botChoose;
  };

  const checkUserInput = (userInput, marbles) => {
    console.log('Введено:', userInput);

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

    const getRoundResult = (playerTurn, input, guess) => {
      // если задать текст здесь, то при выводе значения после пересчета
      // не обновятся, и выведутся старые
      let textBotWins = undefined;
      let textPlayerWins = undefined;

      // ход игрока
      if (playerTurn === true) {
        if ((guess === true && input % 2 === 0) ||
        (guess === false && input % 2 !== 0)) {
          result.player -= input;
          result.bot += input;

          textBotWins = `[Игрок: ${result.player}, Бот: ${result.bot}]\n` +
            `Бот угадал! Он забирает себе шарики: ${input}.`;

          console.log(textBotWins);
          alert(textBotWins);
        } else {
          result.player += input;
          result.bot -= input;

          textPlayerWins = `[Игрок: ${result.player}, Бот: ${result.bot}]\n` +
            `Бот не угадал! Игрок забирает себе шарики: ${input}.`;

          console.log(textPlayerWins);
          alert(textPlayerWins);
        };
      } else { // ход бота
        if ((guess === true && input % 2 === 0) ||
        (guess === false && input % 2 !== 0)) {
          result.player += input;
          result.bot -= input;

          textPlayerWins = `[Игрок: ${result.player}, Бот: ${result.bot}]\n` +
            `Правильно! Игрок забирает себе шарики: ${input}.`;

          console.log(textPlayerWins);
          alert(textPlayerWins);
        } else {
          result.player -= input;
          result.bot += input;

          textBotWins = `[Игрок: ${result.player}, Бот: ${result.bot}]\n` +
            `Неверно! Бот забирает себе шарики: ${input}.`;

          console.log(textBotWins);
          alert(textBotWins);
        };
      };
    };

    let askAboutFirstMove = true;
    let playerTurn = undefined;

    return function start() {
      let firstMove = undefined;
      let exitCondition = undefined;

      // ход игрока
      const turnPlayer = () => {
        const userInput = prompt(
          `[Игрок: ${result.player}, Бот: ${result.bot}]\n` +
          `Введите количество шариков (от 1 до ${result.player}), затем бот угадает, четное или нечетное это число. `,
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
          getRoundResult(playerTurn, checkedUserInput, botGuess); // определение результата раунда
          exitCondition = checkExitConditions(result.player, result.bot); // определение наличия шариков
        } else {
          turnPlayer();
        };

        playerTurn = false;
      };

      // ход бота
      const turnBot = () => {
        const botTurn = getBotTurn(result.bot);
        const playerGuess = confirm(`[Игрок: ${result.player}, Бот: ${result.bot}]\n` +
          `Бот загадал количество шариков! (${botTurn}). Число чётное?`);
        getRoundResult(playerTurn, botTurn, playerGuess);

        exitCondition = checkExitConditions(result.player, result.bot);
        playerTurn = true;
      };

      // НАЧАЛО ИГРЫ
      // определение чей первый ход
      if (askAboutFirstMove === true) {
        firstMove = confirm('Хотите ходить первым?');
        askAboutFirstMove = false;
        if (firstMove === true) {
          playerTurn = true;
        } else {
          playerTurn = false;
        };
      };

      if (playerTurn === true) {
        turnPlayer();
      } else {
        turnBot();
      };

      // если шариков недостаточно
      if (exitCondition === true) {
        if (playAgain() === true) {
          result.player = 5;
          result.bot = 5;
          askAboutFirstMove = true;
          playerTurn = undefined;
        } else {
          return; // выход
        };
      };

      start();
    };
  };

  window.marbles = game;
})();
