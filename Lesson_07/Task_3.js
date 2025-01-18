'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arrNames, prefix) => {
  const prefixedNames = [];

  for (let personName of arrNames) {
    let prefixedName = `${prefix} ${personName}`;
    prefixedNames.push(prefixedName);
  };
  
  console.log(prefixedNames);
};

addPrefix(names, 'Mr.');