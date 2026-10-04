export default function getLongestNonRepeatedChar(chars: string): string {
  let chunks: string[][] = [];

  let j = 0;

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (!chunks[j]) {
      chunks[j] = [char];
    } else {
      chunks[j]?.push(char);
    }

    // if next char is the same, increment j to make a new chunk.
    if (char === chars[i + 1]) {
      j++;
    }
  }

  let largest = 0;

  let result: string[] = [];

  for (const sub of chunks) {
    if (sub?.length > largest) {
      largest = sub?.length;
      result = sub;
    }
  }

  return result.join('');
}
