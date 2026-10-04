export default function permutationDifferenceBetweenTwoStrings(s: string, t: string): number {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let j = t.indexOf(s[i]);

    result += Math.abs(i - j);
  }

  return result;
}
