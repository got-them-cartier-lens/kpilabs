'use strict'

const range = (start,end) => {
    const result = [];
for (let num = start; num <= end; num++) {
    result.push(num)
}
return result;
};
console.log(range(15, 30));

module.exports = { range };