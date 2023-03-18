/*
Determine the total number of repetitions of words in a paragraph.

```
const paragraph = `The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is, by far, the most important source of energy for life on Earth.`;
```

console.log(count_repeated(paragraph)) // 11

"the" is seen 5 times (i.e. 4 repetitions)
"is" is seen 3 times (i.e. 2 repetitions)
"of" is seen 3 times (i.e. 2 repetitions)
"it" is seen 2 times (i.e. 1 repetition)
"a" is seen 3 times (i.e. 2 repetitions)

hence number of repetitions is 4+2+2+1+2 = 11
*/

/**
 *
 * @param {string} text
 * @returns
 */
export default function countRepeated(text) {
  /** @type {Object<string, number>} */
  // const wordsMap = {};
  // const words = text.split(' ').map((w) => w.replace(/([^\w ]|_)/g, '').toLowerCase());

  // words.forEach((word) => {
  //   if (!wordsMap[word]) {
  //     wordsMap[word] = 1;
  //   } else {
  //     wordsMap[word] += 1;
  //   }
  // });

  // return Object.values(wordsMap)
  //   .filter((value) => value > 1)
  //   .reduce((acc, cur) => {
  //     return acc + (cur - 1);
  //   }, 0);

  /* There are a few potential optimizations that can be made to this code:
   *
   * 1) Use for...of loop instead of forEach method:
   * forEach is a higher-order function and it creates a new execution context for each iteration. for...of is generally faster than forEach and it avoids the creation of new execution contexts for each iteration.
   *
   * 2) Use a for...in loop instead of Object.values:
   * Object.values creates a new array with the values of the object properties. A for...in loop iterates through the object's properties and retrieves their values, which avoids creating a new array.
   *
   * 3) Cache the length of the array instead of accessing it in each iteration:
   *
   * When iterating over an array, it's generally faster to cache the length of the array instead of accessing it in each iteration.
   */

  // const words = text.split(' ').map((w) => w.replace(/([^\w ]|_)/g, '').toLowerCase());

  // for (const word of words) {
  //   if (!wordsMap[word]) {
  //     wordsMap[word] = 1;
  //   } else {
  //     wordsMap[word] += 1;
  //   }
  // }

  // let count = 0;

  // for (const word in wordsMap) {
  //   if (wordsMap[word] > 1) {
  //     count += wordsMap[word] - 1;
  //   }
  // }

  // return count;

  /* there may be further optimizations that can be made depending on the specific use case and requirements.
   * Here are a few additional suggestions:
   *
   * 1) Use a Set to store unique words:
   * A Set is a data structure that only stores unique values.
   * This can be used to avoid processing duplicate words, which can improve performance.
   *
   * 2) Use a regular expression to split the text:
   * Splitting the text using a regular expression can be faster than using the split method.
   * For example, the regular expression /\b\w+\b/g can be used to split the text on word boundaries.
   *
   * 3) Use Object.entries instead of for...in loop:
   * Object.entries returns an array of a given object's own enumerable property pairs, which can be
   * used instead of a for...in loop to iterate over the properties and their values.
   */

  /** @type {Set<string>} */
  const wordsSet = new Set();
  /** @type {Object<string, number>} */
  const wordsMap = {};
  const wordRegex = /\b\w+\b/g;
  let count = 0;
  let match;

  while ((match = wordRegex.exec(text))) {
    const word = match[0].toLowerCase();

    if (wordsSet.has(word)) {
      wordsMap[word] += 1;
    } else {
      wordsSet.add(word);
      wordsMap[word] = 1;
    }
  }

  for (const [, frequency] of Object.entries(wordsMap)) {
    if (frequency > 1) {
      count += frequency - 1;
    }
  }

  return count;
}
