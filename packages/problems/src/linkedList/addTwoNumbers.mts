/**
 * @description You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 */

export interface ListNode {
  val: number;
  next: ListNode | null;
}

function listNode(val?: number, next?: ListNode | null): ListNode {
  return {
    val: val === undefined ? 0 : val,
    next: next === undefined ? null : next,
  };
}

export function makeLinkedList(arr: number[]): ListNode {
  const head = listNode(arr[0]);
  let current: ListNode = head;

  for (let i = 1; i < arr.length; i += 1) {
    const node = listNode(arr[i]);
    current.next = node;

    current = node;
  }

  return head;
}

export function getLinkedListValues(linkedList: ListNode | null): number[] {
  //  console.log('linkedList', linkedList);
  let current = linkedList;
  let values: number[] = [];

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
}

function numberArrayToNumber(arr: number[]): number {
  return parseInt(arr.join(''), 10);
}

function reversedNum(num: number): number {
  return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}

function numberToNumberArray(num: number): number[] {
  return `${num}`.split('').map(Number);
}

// oxlint-disable-next-line no-unused-vars -- alternative implementation kept for reference
function addTwoNumbers_BAD(l1: ListNode, l2: ListNode): ListNode {
  const l1Values = getLinkedListValues(l1).reverse();
  const l2Values = getLinkedListValues(l2).reverse();
  const sumResult = numberArrayToNumber(l1Values) + numberArrayToNumber(l2Values);
  const reversedSum = numberToNumberArray(reversedNum(sumResult));
  return makeLinkedList(reversedSum);
}

export default function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
  function iter(
    n1: ListNode | undefined | null,
    n2: ListNode | undefined | null,
    rest = 0,
  ): ListNode | null {
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
