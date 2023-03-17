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

/** @type {Object<string, number>} */
const wordsMap = {};

/**
 *
 * @param {string} text
 * @returns
 */
export default function countRepeated(text) {
  const words = text.split(' ').map((w) => w.replace(/([^\w ]|_)/g, '').toLowerCase());

  words.forEach((word) => {
    if (!wordsMap[word]) {
      wordsMap[word] = 1;
    } else {
      wordsMap[word] += 1;
    }
  });

  return Object.values(wordsMap)
    .filter((value) => value > 1)
    .reduce((acc, cur) => {
      return acc + (cur - 1);
    }, 0);
}
