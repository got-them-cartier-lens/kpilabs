'use strict'

let name = 'Ilya';
const birthYear = 2008;
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

greet(name);

module.exports = { greet }
