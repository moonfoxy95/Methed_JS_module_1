'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const getComputerFigure = (figures) => {
    const figureId = getRandomIntInclusive(0, 2);
    return figures[figureId];
  };

  const checkUserInput = (userInput) => {
    if (!(FIGURES_RUS.includes(userInput))) {
      return false;
    };
  };

  const getRoundWinner = (userFigure, computerFigure) => {
    if (userFigure === computerFigure) {
      return 'Ничья!';
    };

    if (userFigure === false) {
      return 'Продолжаем играть.';
    };

    if (checkUserInput(userFigure) === false) {
      return `Неверный ввод: ${userFigure}`;
    };

    if (userFigure === FIGURES_RUS[0] && computerFigure === FIGURES_RUS[1]) {
      return 'Победа!';
    } else if (userFigure === FIGURES_RUS[1] && computerFigure === FIGURES_RUS[2]) {
      return 'Победа!';
    } else if (userFigure === FIGURES_RUS[2] && computerFigure === FIGURES_RUS[0]) {
      return 'Победа!';
    } else {
      return 'Поражение!';
    };
  };

  const game = (language = 'ru') => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      let userInput = prompt('камень, ножницы, бумага?');

      const autoFillInput = () => {
        if (userInput.length >= 2) {
          const firstLetters = userInput.slice(0, userInput.length);
          for (const figure of FIGURES_RUS) {
            if (figure.startsWith(firstLetters)) {
              userInput = figure;
              return userInput;
            };
          };
        };
      };

      // выход
      if (userInput === null) {
        userInput = confirm('Точно хотите выйти?');
        if (userInput === true) {
          const entries = Object.entries(result);
          const finalText = `Итого: ${entries[0][0]} - ${entries[0][1]}, ${entries[1][0]} - ${entries[1][1]}`;
          console.log(finalText);
          alert(finalText);
          return;
        };
      };

      // процесс игры
      autoFillInput();
      checkUserInput(userInput);
      const computerInput = getComputerFigure(FIGURES_RUS);
      const roundWinner = getRoundWinner(userInput, computerInput);
      const resultWinner = `${roundWinner} (Player: ${userInput} | AI: ${computerInput})`;
      if (roundWinner === 'Победа!') {
        result.player += 1;
      } else if (roundWinner === 'Поражение!') {
        result.computer += 1;
      }

      console.log(resultWinner, result);
      alert(resultWinner, result);
      start();
    };
  };

  window.RPS = game;
})();
