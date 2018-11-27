function countWords(inputWords) {
  return inputWords.reduce((total, word) => {
    if (!total[word]) {
      total[word] = 0;
    }
    total[word]++;
    return total;
  }, {});
}

module.exports = countWords