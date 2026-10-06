'use strict';

const number = {num:5}

const inc = (obj) => {
  if (typeof obj === 'object') 
    obj.n++;
    console.log(obj);
  
};

inc(number);

module.exports = { inc };