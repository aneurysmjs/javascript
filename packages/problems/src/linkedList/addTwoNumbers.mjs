/**
 * @description You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 */

/**
 * @typedef {object} ListNode
 * @property {number} val
 * @property {ListNode | null} next
 */

/**
 * @param {number} val
 * @param {ListNode | null} [next]
 */
function listNode(val, next) {
  return {
    val: val === undefined ? 0 : val,
    next: next === undefined ? null : next,
  };
}

/**
 *
 * @param {number[] | string[]} arr
 * @returns
 */
export function makeLinkedList(arr) {
  const head = listNode(arr[0]);
  /** @type {ListNode} */
  let current = head;

  for (let i = 1; i < arr.length; i += 1) {
    const node = listNode(arr[i]);
    current.next = node;

    current = node;
  }

  return head;
}

/**
 *
 * @param {ListNode} linkedList
 * @returns
 */
export function getLinkedListValues(linkedList) {
  //  console.log('linkedList', linkedList);
  let current = linkedList;
  /** @type {number[]} */
  let values = [];

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
}

/**
 *
 * @param {number[]} arr
 * @returns
 */
function numberArrayToNumber(arr) {
  return parseInt(arr.join(''), 10);
}

/**
 *
 * @param {number} num
 * @returns
 */
function reversedNum(num) {
  return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}

/**
 *
 * @param {number} num
 * @returns
 */
function numberToNumberArray(num) {
  return `${num}`.split('').map(Number);
}

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns
 */
function addTwoNumbers2(l1, l2) {
  const l1Values = getLinkedListValues(l1).reverse();
  const l2Values = getLinkedListValues(l2).reverse();
  const sumResult = numberArrayToNumber(l1Values) + numberArrayToNumber(l2Values);
  const reversedSum = numberToNumberArray(reversedNum(sumResult));
  return makeLinkedList(reversedSum);
}

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
export default function addTwoNumbers(l1, l2) {
  /**
   *
   * @param {ListNode | undefined | null} n1
   * @param {ListNode | undefined | null} n2
   * @param {number} [rest]
   * @returns {ListNode | null}
   */
  function iter(n1, n2, rest = 0) {
    if (!n1 && !n2 && !rest) {
      return null;
    }

    const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
    const carriedOver = Math.floor(newVal / 10)
    const nextNode = iter(n1?.next, n2?.next, carriedOver);

    return listNode(newVal % 10, nextNode);
  }

  return iter(l1, l2);
}
