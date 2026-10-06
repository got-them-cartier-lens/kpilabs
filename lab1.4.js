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
const counters = {number:0, string:0, boolean:0};
for (const element of data) {
  const type = typeof element;
  counters[type]++;
}
console.log(counters);