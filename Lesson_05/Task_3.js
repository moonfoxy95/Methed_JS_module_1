'use strict';

const modifyStr = (str) => {
  let strCopy = str;
  strCopy = strCopy.split('').reverse().join('');
  return strCopy;
}

console.log(modifyStr('Темная ночь'));