'use strict'

const average = (a,b) => (a+b) / 2
const square = (x) => x * x
const cube = (x) => x * x * x
const calculate = () => {
 const result = [];
 for (let num = 0; num <= 9; num++) {
    const NumberSquare = square(num);
    const NumberCube = cube(num);
    result.push(average(NumberSquare,NumberCube));
 }
 return result;
};

console.log(calculate())

module.exports = { square, cube, average, calculate };