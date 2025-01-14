'use strict'

const modifyString = (inputString) => {
  let inputStringCopy = inputString.toLowerCase();  
  inputStringCopy = inputStringCopy.replace(inputStringCopy[0], inputStringCopy[0].toUpperCase());
  
  return inputStringCopy;
}

console.log(modifyString('hElLo'));