export default function createStack<T>() {
  let stack: T[] = [];

  /**
   * @description Adds an item to the end of the stack.
   */
  const push = (item: T): void => {
    stack = [...stack, item];
  };

  /**
   * @description Returns the last item of the stack.
   */
  const pop = (): T | undefined => {
    return stack.pop();
  };

  /**
   * @description Returns the amount of items in the stack.
   */
  const length = (): number => {
    return stack.length;
  };

  /**
   * @description Look at what's next to be removed.
   */
  const peek = (): T | undefined => {
    return stack[stack.length - 1];
  };

  /**
   * @description Checks whether the stack is empty.
   */
  const isEmpty = (): boolean => {
    return stack.length === 0;
  };

  return { push, pop, length, peek, isEmpty };
}
