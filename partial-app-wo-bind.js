var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    const allArgs = slice.apply(arguments);
    allArgs.unshift(namespace);
    console.log.apply(null, allArgs);
  }
}

module.exports = logger