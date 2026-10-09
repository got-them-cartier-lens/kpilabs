'use strict'

const rangeOdd = (start, end) => {
    const result = [];
for (let num = start; num <= end; num++) {
    if (num % 2 !== 0)
    result.push(num)
}
return result;
};
console.log(rangeOdd(15, 30));

module.exports = { rangeOdd };