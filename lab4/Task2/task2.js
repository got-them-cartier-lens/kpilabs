'use strict';

const max = (matrix) => {
 let result = matrix[0][0];
 for (const row of matrix) {
    for (const value of row) {
        if (value > result) {
        result = value;
    }
  }
}
return result;
};
module.exports = { max };

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // ожидаем 9