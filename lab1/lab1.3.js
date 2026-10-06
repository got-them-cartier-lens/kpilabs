'use strict';

const number = {n:5}

const inc = (obj) => {
  if (typeof obj === 'object') 
    obj.n++;
    console.log(obj);
  
};

inc(number);

module.exports = { inc };
