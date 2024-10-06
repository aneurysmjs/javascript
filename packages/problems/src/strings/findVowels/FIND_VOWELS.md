given a string `s`, count the vowels it has.

## Example 1:

Input: s = 'cow'

Output: 2

Explanation:

for `s = 'cow'` it has only one vowel, `o`

## Example 2:

Input: s = 'airplane'

Output: 4

Explanation:

for `s = 'airplane'` it has only `a` two times, `i`,

## Solution 1:

### Iteratively

```javascript
function findVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}
```

## Solution 2:

### Using regex

```javascript
function findVowels(str) {
  return (str.match(/[aeiou]/gi) ?? []).length;
}
```
