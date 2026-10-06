'use strict';

const data = [
    42,
    'day',
    false,
    -54,
    true,
    'night',
    200,
    1.1478

];
const counters = {};
for (const element of data) {
  const type = typeof element;
  counters[type] = (counters[type] || 0) + 1;
}
console.log(counters);