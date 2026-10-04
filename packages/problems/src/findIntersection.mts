export default function findIntersection(strArr: string[]): string | false {
  const numbersArr: string[] = [];
  const duplicates: string[] = [];

  for (const subStr of strArr) {
    const numbers = subStr.split(', ');

    for (const num of numbers) {
      if (numbersArr.includes(num)) {
        duplicates.push(num);
      } else {
        numbersArr.push(num);
      }
    }
  }

  if (duplicates.length === 0) {
    return false;
  }

  return duplicates.sort((a, b) => Number(a) - Number(b)).join(',');
}
