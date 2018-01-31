/**
 * Returns the score for the given array of words or word.
 * The score is the amount of unique letters in the word, or
 * all concatenated words. Only lowercase letters are considered.
 * All punctuation, spaces, and other symbols are ignored.
 * @example score('foo') => 2
 * @example score('bar') => 3
 * @example score(['foo', 'bar']) => 5
 * @param {Array<string>|string} arr array of words or word
 * @return {number} the calculated score
 */
const score = arr => {
  if (!Array.isArray(arr)) {
    arr = [arr];
  }

  return new Set(
    arr
      .join('')
      .replace(/\W|\d|_/gi, '')
      .toLowerCase()
      .split('')
  ).size;
};

/**
 * Returns an array with the minimum amount of words containing all
 * letters a through z.
 * @param {Array<string>} words array of words
 * @param {number} [uniqueLetters=0] number of unique letters in the current solution
 * @param {Array<string>} selected array with current solution
 * @return {Array<string>|null} optimal solution, or null if no solution is possible
 */
const minSubset = (words, uniqueLetters = 0, selected = []) => {
  // the solution was found, selected contains all 26 letters
  if (score(selected) === 26) {
    return selected;
  }

  // next word that adds unique letters to the selected array
  let nextWord = null;

  words.forEach(word => {
    // concatenate the next word with the previous selected
    const currentScore = score([...selected, word]);

    // if it has more unique letters, save it
    if (uniqueLetters < currentScore) {
      uniqueLetters = currentScore;
      nextWord = word;
    }
  });

  // no more unique letters were found, the array of words
  // does not contain all letters a through z
  if (nextWord === null) {
    return null;
  }

  // continues the search for unique letters
  return minSubset(words, uniqueLetters, [...selected, nextWord]);
};

module.exports = minSubset;
