/**
 *
 * @param str
 * @returns *
 */
export default function findVowels(str: string): number {
  return (str.match(/[aeiou]/gi) ?? []).length;
}
