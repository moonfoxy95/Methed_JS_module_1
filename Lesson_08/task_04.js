'use strict';

const getLeapYears = (minYear, maxYear) => {
  //функция из интернета
  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    };
    return false;
  };

  let leapYearsArray = []; 
  
  if (minYear > maxYear) {
    [minYear, maxYear] = [maxYear, minYear];
  }; 
  
  for (let i = minYear; i < maxYear; i++) {
    let calculation = isLeapYear(i);
    if (calculation) {
      leapYearsArray.push(i)
    };
  };

  return leapYearsArray;
};

console.log(getLeapYears(1870, 1930));