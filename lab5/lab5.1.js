'use strict';

const seq = (...fns) => (arg) => {
  if (typeof arg === 'number') {
    return fns.reduceRight((acc, fn) => fn(acc), arg);
  }
  return seq(...fns, arg);
};

module.exports = { seq };