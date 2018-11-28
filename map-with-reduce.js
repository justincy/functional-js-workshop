module.exports = function arrayMap(arr, fn) {
  return arr.reduce((newArray, val) => {
    newArray.push(fn(val));
    return newArray;
  }, []);
}