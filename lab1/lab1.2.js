'use strict';

const inc = (x) => ++x;
const a = 10;
const b = inc(a);
console.log(a , b)

module.exports = { inc };