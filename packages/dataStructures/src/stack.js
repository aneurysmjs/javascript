export default function createStack() {
  let stack = [];

  /**
   * @description Adds an item to the end of the stack.
   *
   * @template T
   * @returns T
   */
  const push = (item) => {
    stack = [...stack, item];
  };

  /**
   * @description Returns the last item of the stack.
   *
   * @template T
   * @returns T
   */
  const pop = () => {
    return stack.pop();
  };

  /**
   * @description Returns the amount of items in the stack.
   *
   * @returns number
   */
  const length = () => {
    return stack.length;
  };

  /**
   * @description Look at what's next to be removed.
   *
   * @template T
   * @returns T
   */
  const peek = () => {
    return stack[stack.length - 1];
  };

  /**
   * @description Checks whether the stack is empty.
   *
   * @returns boolean
   */
  const isEmpty = () => {
    return stack.length === 0;
  };

  return { push, pop, length, peek, isEmpty };
}
