'use strict';

const compose = (...fns) => {
  const handlers = [];

  const f = (x) => {
    try {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    } catch (err) {
      for (const handler of handlers) {
        handler(err);
      }
      return undefined;
    }
  };

  f.on = (name, handler) => {
    if (name === 'error') {
      handlers.push(handler);
    }
  };

  return f;
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const bad = () => {
  throw new Error('Something went wrong');
};

const f = compose(twice, inc);
console.log(f(5)); 

const g = compose(twice, bad, inc);
g.on('error', (e) => console.log('Caught:', e.message));
console.log(g(5)); 

module.exports = { compose };