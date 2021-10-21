import { jest } from '@jest/globals';

import createStack from '../src/stack';

let stack = [];

beforeEach(() => {
  stack = createStack();
});

describe('queue', () => {
  test("has the stack's proper methods", () => {
    expect(stack).toHaveProperty('push');
    expect(stack).toHaveProperty('pop');
    expect(stack).toHaveProperty('peek');
    expect(stack).toHaveProperty('length');
    expect(stack).toHaveProperty('isEmpty');
  });

  test('push - adds items in order', () => {
    const mockPush = jest.spyOn(stack, 'push');
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');

    expect(mockPush.mock.calls).toEqual([['a'], ['b'], ['c'], ['d']]);
    mockPush.mockRestore();
  });

  test('length - gets the length of the stack', () => {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');

    expect(stack.length()).toEqual(4);
  });

  test("peek - Look at what's next to be removed", () => {
    stack.push('a');
    expect(stack.peek()).toEqual('a');

    stack.push('b');
    expect(stack.peek()).toEqual('b');

    stack.push('c');
    expect(stack.peek()).toEqual('c');
  });

  test('pop - removes last item from the stack', () => {
    stack.push('a');
    stack.push('b');
    stack.push('c');

    expect(stack.pop()).toEqual('c');
    expect(stack.pop()).toEqual('b');
    expect(stack.pop()).toEqual('a');
  });

  test('isEmpty - whether the stack is empty', () => {
    expect(stack.isEmpty()).toEqual(true);

    stack.push('a');

    expect(stack.isEmpty()).toEqual(false);
  });
});
