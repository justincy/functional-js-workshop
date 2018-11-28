function Spy(target, method) {
  const data = { count: 0};
  const fn = target[method];
  target[method] = function() {
    data.count++;
    return fn.apply(target, arguments);
  };
  return data;
}

module.exports = Spy