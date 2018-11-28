function reduce(arr, fn, initial) {
  if (arr.length === 0) return initial;
  const nextValue = fn(initial, arr[0], 0, arr);
  return reduce(arr.slice(1), fn, nextValue);
}

module.exports = reduce