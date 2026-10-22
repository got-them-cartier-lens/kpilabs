'use strict';

const sum = (...args) => {
  const total = args.reduce((acc, value) => {
    return acc + value;
  }, 0);
  return total;
};

module.exports = { sum };

const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

console.log({ a, b, c, d, e });