import { jest } from '@jest/globals';

import createQueue from '../src/queue';

let queue = [];

beforeEach(() => {
  queue = createQueue();
});

const user = {
  name: 'Miro',
  special: 'Flash grenade',
};

describe('queue', () => {
  test("has the queue's proper methods", () => {
    expect(queue).toHaveProperty('enqueue');
    expect(queue).toHaveProperty('dequeue');
    expect(queue).toHaveProperty('peek');
    expect(queue).toHaveProperty('length');
    expect(queue).toHaveProperty('isEmpty');
  });
  test('adds a new item', () => {
    const mockEnqueue = jest.spyOn(queue, 'enqueue');
    const user = {
      name: 'Miro',
      special: 'Flash grenade',
    };

    expect(queue.length()).toBe(0);
    expect(mockEnqueue).toHaveBeenCalledTimes(0);

    queue.enqueue(user);

    expect(queue.length()).toBe(1);
    expect(mockEnqueue).toHaveBeenCalledTimes(1);
  });

  test('queue', () => {
    const mockEnqueue = jest.spyOn(queue, 'enqueue');

    expect(queue.length()).toBe(0);
    expect(mockEnqueue).toHaveBeenCalledTimes(0);

    queue.enqueue(user);

    expect(queue.length()).toBe(1);
    expect(mockEnqueue).toHaveBeenCalledTimes(1);

    queue.enqueue(user);

    expect(queue.length()).toBe(2);
    expect(mockEnqueue).toHaveBeenCalledTimes(2);
  });

  describe('dequeue', () => {
    test('dequeues an item', () => {
      const mockDequeue = jest.spyOn(queue, 'dequeue');

      queue.enqueue(user);
      expect(queue.length()).toBe(1);
      expect(mockDequeue).toHaveBeenCalledTimes(0);

      queue.dequeue();

      expect(queue.length()).toBe(0);
      expect(mockDequeue).toHaveBeenCalledTimes(1);
    });

    test('dequeues returns `undefined` when queue is empty', () => {
      expect(queue.dequeue()).toBe(undefined);
    });
  });
});
