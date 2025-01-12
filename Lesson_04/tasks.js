'use strict';


{console.log('Задание 2');

const rain = Math.round(Math.random());

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else if (rain === 0) {
  console.log('Дождя нет!');
} else {
  console.log('Рак на горе свистнул.');
}
}


{console.log('Задание 3');

const mathPoints = Number(prompt('Введите кол-во баллов по математике:'));
const rusPoints = Number(prompt('Введите кол-во баллов по русскому языку:'));
const compsciPoints = Number(prompt('Введите кол-во баллов по информатике:'));
const overallPoints = mathPoints + rusPoints + compsciPoints;
let finalMessage = '';

if (isNaN(overallPoints)) {
  finalMessage = 'Нужно вводить только числа.';
} else if (overallPoints >= 265) {
  finalMessage = 'Поздравляю, вы поступили на бюджет!';
} else {
  finalMessage = 'Вы не прошли.';
}

console.log(finalMessage);
}


{console.log('Задание 4');

const userRequest = Number(prompt('Введите сумму для снятия в банкомате:'));
let finalMessage = '';

if (isNaN(userRequest)) {
  finalMessage = 'Введите число.';
} else if (userRequest < 100) {
  finalMessage = 'Сумма должна быть больше 100.';
} else if (userRequest % 100 !== 0) {
  const minSum = Math.floor(userRequest/100)*100;
  const maxSum = Math.ceil(userRequest/100)*100;
  finalMessage = `Банкомат сможет выдать Вам ${minSum} или ${maxSum}.`;
} else {
  finalMessage = `Вот ваши ${userRequest} бумажки.`;
}

console.log(finalMessage);
}