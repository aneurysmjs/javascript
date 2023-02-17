let current;
let last;

export function makeRangeIterator(from = 0, to = 3) {
  current = from;
  last = to;

  return {
    [Symbol.iterator]() {
      // called once, in the beginning of for..of
      return {
        next() {
          // called every iteration, to get the next value
          if (current <= last) {
            return { done: false, value: (current += 1) };
          }

          return { done: true };
        },
      };
    },
  };
}

export function makeIteratorException() {
  return {
    [Symbol.iterator]() {
      // called once, in the beginning of for..of
      return {
        next() {
          throw new Error('some problem');
        },
      };
    },
  };
}
