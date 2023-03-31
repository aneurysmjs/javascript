import addTwoNumbers, { makeLinkedList, getLinkedListValues } from './addTwoNumbers.mjs';

describe('addTwoNumbers', () => {
  it('works', () => {
    const l1 = makeLinkedList([2, 4, 3]);
    const l2 = makeLinkedList([5, 6, 4]);

    const linkedListSum = addTwoNumbers(l1, l2);
    const values = getLinkedListValues(linkedListSum);

    expect(values).toStrictEqual([7, 0, 8]);
  });
});
