function repeat(operation, num) {
  operation();
  if (--num) {
    repeat(operation, num);
  }
}

// Do not remove the line below
module.exports = repeat