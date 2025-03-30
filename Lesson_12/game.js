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
    const figureId = getRandomIntInclusive(0, FIGURES_RUS.length - 1);
    return figures[figureId];
  };

  const checkUserInput = (str) => {
    if (!(FIGURES_RUS.includes(str))) {
      return false;
    } else {
      return true;
    };
  };

  const getRoundWinner = (userFigure, computerFigure) => {
    if (userFigure === computerFigure) {
      return 'Ничья!';
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

      const autoFill = (word) => {
        for (const figure of FIGURES_RUS) {
          // word.length на случай если ввод пустой ('')
          if (word.length >= 1 && figure.startsWith(word.toLowerCase())) {
            return figure;
          };
        };
        return word;
      };

      const pointCounter = (gameResult) => {
        if (gameResult === 'Победа!') {
          result.player += 1;
        } else if (gameResult === 'Поражение!') {
          result.computer += 1;
        }
      };

      const showResults = (roundWinner, answer, computerInput) => {
        const resultWinner = `${roundWinner} (Player: ${answer} | AI: ${computerInput})`;

        console.log(resultWinner, result);
        alert(resultWinner, result);
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
      const answer = autoFill(userInput); // автозаполнение ввода
      const computerInput = getComputerFigure(FIGURES_RUS); // ход AI

      // определение результата; есть ли answer в массиве фигур [FIGURES_RUS]
      let roundWinner = undefined;
      if (checkUserInput(answer) === true) {
        roundWinner = getRoundWinner(answer, computerInput);
      } else if (answer === false) {
        roundWinner = 'Продолжаем играть.'; // если отменить отмену игры
      } else {
        roundWinner = `Неверный ввод: ${answer}`;
      };

      pointCounter(roundWinner); // добавление очков
      showResults(roundWinner, answer, computerInput); // вывод результата

      start();
    };
  };

  window.RPS = game;
})();
