'use strict';

const store = (value) => () => value;

const read = store(5);
const result = read();
console.log(result);

module.exports = { store };