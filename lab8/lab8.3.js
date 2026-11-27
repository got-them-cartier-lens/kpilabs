'use strict';

const contract = (fn, ...types) => {
  const resultType = types[types.length - 1];
  const argTypes = types.slice(0, -1);

  return (...args) => {
    for (let i = 0; i < argTypes.length; i++) {
      const expected = argTypes[i];
      const value = args[i];
      if (value === undefined || value === null || value.constructor !== expected) {
        throw new TypeError(`Argument ${i + 1} must be ${expected.name}`);
      }
    }

    const result = fn(...args);

    if (result === undefined || result === null || result.constructor !== resultType) {
      throw new TypeError(`Result must be ${resultType.name}`);
    }

    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.dir(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.dir(concatStrings('Hello ', 'world!'));

module.exports = { contract };