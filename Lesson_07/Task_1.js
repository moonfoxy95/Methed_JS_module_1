'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allOriginal, failedOriginal) => {
  const all = allOriginal.slice();
  const failed = failedOriginal.slice();
  const succeded = [];

  for (let student of all) {
    if (!(failed.includes(student))) {
      succeded.push(student);
    };
  };

  console.log(succeded);
};

filter(allStudents, failedStudents);