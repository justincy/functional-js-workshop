function curryN(fn, n) {
  // SOLUTION GOES HERE
  if (typeof n !== 'number') n = fn.length;
  return function (param) {
    if (n === 1) {
      return fn(param);
    } else {
      return curryN(fn.bind(null, param), n-1);
    }
  }
}

module.exports = curryN