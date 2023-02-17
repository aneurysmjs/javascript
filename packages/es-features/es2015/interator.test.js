/**
 * when using native ES Modules, jest is not a global object anymore
 * @see https://github.com/facebook/jest/issues/9430#issuecomment-616232029
 */
import { jest } from '@jest/globals';

import { makeRangeIterator, makeIteratorException } from './interator';

// make an iterator
const range = makeRangeIterator();

let myIterator;

beforeEach(() => {
  // console.log('beforeEach', beforeEach);
  // Calling an iterator explicitly
  myIterator = range[Symbol.iterator]();
});

describe('iterator', () => {
  it('basic use', () => {
    expect(myIterator).toHaveProperty('next');

    let iteratorResult = myIterator.next();

    expect(iteratorResult).toStrictEqual({ done: false, value: 1 });

    iteratorResult = myIterator.next();

    expect(iteratorResult).toStrictEqual({ done: false, value: 2 });

    iteratorResult = myIterator.next();

    expect(iteratorResult).toStrictEqual({ done: false, value: 3 });

    iteratorResult = myIterator.next();

    expect(iteratorResult).toStrictEqual({ done: false, value: 4 });

    iteratorResult = myIterator.next();
    // `done` is true when the iterator is exhausted;
    expect(iteratorResult).toStrictEqual({ done: true });
  });

  it('should throw an exception', () => {
    const exceptionIterator = makeIteratorException();

    let exception = exceptionIterator[Symbol.iterator]();

    expect(exception.next).toThrow();
  });
});
