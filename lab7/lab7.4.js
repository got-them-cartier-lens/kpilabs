'use strict';

const difference = (array1, array2) => {
  const result = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
console.log(difference(array1, array2));

const cities1 = ['Beijing', 'Kiev'];
const cities2 = ['Kiev', 'London', 'Baghdad'];
console.log(difference(cities1, cities2));

module.exports = { difference };