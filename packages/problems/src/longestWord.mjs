/**
 *
 * @param {string} sen
 * @returns
 */
export default function longestWord(sen) {
  // split byb space then remove punctuation
  const strs = sen.split(' ').map((str) => str.replace(/[^\w]|_/g, ''));

  const wordsMap = {
    length: 0,
    word: '',
  };

  strs.forEach((str) => {
    if (str.length > wordsMap.length) {
      wordsMap.length = str.length;
      wordsMap.word = str;
    }
  });

  return wordsMap.word;
}
