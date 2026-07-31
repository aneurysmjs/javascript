export default function divisible(val: number) {
  return new Promise((resolve, reject) => {
    if (val % 5 === 0) {
      resolve('is divisible by 5');
    } else {
      reject('wrong');
    }
  });
}
