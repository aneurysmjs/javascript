Given an integer array `nums` sorted in **non-decreasing order**, remove some duplicates [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` _after placing the final result in the first_ `k` slots of `nums`.

Do not allocate extra space for another array. You must do this by modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with O(1) extra memory.

**Custom Judge:**

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;

for (int i = 0; i < k; i++) {
  assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

Example 1:

```
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

Example 2:

```
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

Constraints:

`1 <= nums.length <= 3 * 104`\
`-104 <= nums[i] <= 104`\
`nums` is sorted in **non-decreasing** order.

# Approach

The approach employs a two-pointer strategy. The variable `j` is used to keep track of the current position in the modified array where elements are being stored without violating the constraint. The loop iterates through the array, and for each element, it checks whether it is the same as the element two positions behind the current `j`. If it is, it means there are already two occurrences of this element in the modified array, and we should skip adding another one to adhere to the constraint. Otherwise, the element is added to the modified array at position `j`, and `j` is incremented.

## Explanation of Two-Pointer Approach

```javascript
let j = 1;

for (let i = 1; i < nums.length; i++) {
  if (j === 1 || nums[i] !== nums[j - 2]) {
    nums[j++] = nums[i];
  }
}

return j;
```

The two-pointer approach in this scenario involves using two pointers, `i` and `j`, where `i` iterates through the array, and `j` keeps track of the position where elements satisfying the constraint are being stored.

- __Initialization__: Initialize `j` to 1 since the first element (at index 0) is always considered part of the modified array.
- __Iteration__: Loop through the array starting from index 1 (i.e., `i = 1`). Compare the current element at index `i` with the element two positions behind at index `j` - 2. If they are the same, it means there are already two occurrences of this element in the modified array, so skip adding another. If they are different, add the current element to the modified array at position `j` and increment `j`.
- __Final Result__: The final length of the modified array is equal to `j`, and the modified array contains elements adhering to the constraint.
