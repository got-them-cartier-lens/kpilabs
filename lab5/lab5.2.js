'use strict';

const array = () => {
  const data = [];

  const self = (i) => data[i];

  self.push = (value) => {
    data.push(value);
  };

  self.pop = () => data.pop();

  return self;
};

const a = array();
a.push(10);
a.push(20);
a.push(30);
console.log(a(0));    // 10
console.log(a(2));    // 30
console.log(a.pop()); // 30
console.log(a(2));    // undefined

module.exports = { array };