export default function createQueue() {
  const queue = [];

  /**
   * @description Adds a new item to the beggining of the array.
   * @template T
   * @param {T} item
   * @returns void
   */
  const enqueue = (item) => queue.unshift(item);

  /**
   * @description Removes the last item in the array.
   *
   * @template T
   * @param {T} item
   * @returns void | T
   */
  const dequeue = () => {
    if (queue.length === 0) {
      return undefined;
    }

    return queue.pop();
  };

  /**
   * @description Returns the item that's next to be removed.
   *
   * @template T
   * @returns T
   */
  const peek = () => {
    if (queue.length === 0) {
      return undefined;
    }

    return queue[queue.length - 1];
  };

  /**
   * @description Returns the amount of items in the array.
   *
   * @returns number
   */
  const length = () => queue.length;

  /**
   * @description Checks whether the queue is empty.
   * @returns boolean
   */
  const isEmpty = () => queue.length === 0;

  return {
    enqueue,
    dequeue,
    peek,
    length,
    isEmpty,
  };
}
