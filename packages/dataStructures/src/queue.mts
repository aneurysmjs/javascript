export default function createQueue<T>() {
  const queue: T[] = [];

  /**
   * @description Adds a new item to the beggining of the array.
   */
  const enqueue = (item: T): void => {
    queue.unshift(item);
  };

  /**
   * @description Removes the last item in the array.
   */
  const dequeue = (): T | undefined => {
    if (queue.length === 0) {
      return undefined;
    }

    return queue.pop();
  };

  /**
   * @description Returns the item that's next to be removed.
   */
  const peek = (): T | undefined => {
    if (queue.length === 0) {
      return undefined;
    }

    return queue[queue.length - 1];
  };

  /**
   * @description Returns the amount of items in the array.
   */
  const length = (): number => queue.length;

  /**
   * @description Checks whether the queue is empty.
   */
  const isEmpty = (): boolean => queue.length === 0;

  return {
    enqueue,
    dequeue,
    peek,
    length,
    isEmpty,
  };
}
