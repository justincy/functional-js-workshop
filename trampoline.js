function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return
  operation()
  return function() {
    repeat(operation, --num)
  }
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  let next = fn;
  while(next) {
    next = next();
  }
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(repeat.bind(null, operation, num));
}
