'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'paper', 'scissors'];
  const FIGURES_DEU = ['schere', 'stein', 'papier'];
  const TEXT_RUS =
  ['камень, ножницы, бумага?',
    'Победа!',
    'Поражение!',
    'Игрок',
    'Компьютер',
    'Точно хотите выйти?',
    'Итого',
    'Продолжаем играть.',
    'Неверный ввод',
    'Ничья!',
  ];
  const TEXT_ENG =
  ['rock, paper, scissors?',
    'Win!',
    'Defeat!',
    'Player',
    'Computer',
    'Are you sure you want to leave?',
    'Result',
    'Continue playing.',
    'Incorrect input',
    'Draw!',
  ];
  const TEXT_DEU =
  ['schere, stein, papier?',
    'Sieg!',
    'Verlust!',
    'Spieler',
    'Computer',
    'Möchten Sie wirklich gehen?',
    'Ergebnis',
    'Weiterspielen.',
    'Falsche Eingabe',
    'Unentschieden!',
  ];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const getComputerFigure = (langFigures) => {
    const figureId = getRandomIntInclusive(0, langFigures.length - 1);
    return langFigures[figureId];
  };

  const checkUserInput = (str, langFigures) => {
    if (!(langFigures.includes(str))) {
      return false;
    } else {
      return true;
    };
  };

  const getRoundWinner = (userFigure, computerFigure, langText, langFigures) => {
    if (userFigure === computerFigure) {
      return langText[9];
    };

    if (userFigure === langFigures[0] && computerFigure === langFigures[1]) {
      return langText[1];
    } else if (userFigure === langFigures[1] && computerFigure === langFigures[2]) {
      return langText[1];
    } else if (userFigure === langFigures[2] && computerFigure === langFigures[0]) {
      return langText[1];
    } else {
      return langText[2];
    };
  };

  const game = (language = 'ru') => {
    const result = {
      player: 0,
      computer: 0,
    };

    let langFigures = FIGURES_RUS;
    let langText = TEXT_RUS;
    language = language.toLowerCase();
    if (language === 'en' || language === 'eng') {
      langFigures = FIGURES_ENG;
      langText = TEXT_ENG;
    } else if (language === 'de' || language === 'deu') {
      langFigures = FIGURES_DEU;
      langText = TEXT_DEU;
    };

    return function start() {
      let userInput = prompt(langText[0]);

      const autoFill = (word) => {
        for (const figure of langFigures) {
          // word.length на случай если ввод пустой ('')
          if (word.length >= 1 && figure.startsWith(word.toLowerCase())) {
            return figure;
          };
        };
        return word;
      };

      const pointCounter = (gameResult) => {
        if (gameResult === langText[1]) {
          result.player += 1;
        } else if (gameResult === langText[2]) {
          result.computer += 1;
        }
      };

      const showResults = (roundWinner, answer, computerInput) => {
        const resultWinner = `${roundWinner} (${langText[3]}: ${answer} | ${langText[4]}: ${computerInput})`;

        console.log(resultWinner, result);
        alert(resultWinner, result);
      };

      // выход
      if (userInput === null) {
        userInput = confirm(langText[5]);
        if (userInput === true) {
          const entries = Object.entries(result);
          const finalText = `${langText[6]}: ${langText[3]} - ${entries[0][1]}, ${langText[4]} - ${entries[1][1]}`;
          console.log(finalText);
          alert(finalText);
          return;
        };
      };

      // процесс игры
      const answer = autoFill(userInput); // автозаполнение ввода
      const computerInput = getComputerFigure(langFigures); // ход AI

      // определение результата; есть ли answer в массиве фигур [FIGURES_RUS]
      let roundWinner = undefined;
      if (checkUserInput(answer, langFigures) === true) {
        roundWinner = getRoundWinner(answer, computerInput, langText, langFigures);
      } else if (answer === false) {
        roundWinner = langText[7]; // если отменить отмену игры
      } else {
        roundWinner = `${langText[8]}: ${answer}`;
      };

      pointCounter(roundWinner); // добавление очков
      showResults(roundWinner, answer, computerInput); // вывод результата

      start();
    };
  };

  window.RPS = game;
})();
