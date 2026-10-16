'use strict';

const iface = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

const introspect = (iface) => {
  const result = [];
  for (const key of Object.keys(iface)) {
    const value = iface[key];
    if (typeof value === 'function') {
      result.push([key, value.length]);
    }
  }
  return result;
};

console.log(introspect(iface));
// [ [ 'm1', 1 ], [ 'm2', 2 ], [ 'm3', 3 ] ]

module.exports = { introspect };