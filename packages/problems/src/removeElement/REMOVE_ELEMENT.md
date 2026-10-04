Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array _nums_ such that the first _k_ elements of _nums_ contain the elements which are not equal to _val_. The remaining elements of nums are not important as well as the size of _nums_.
Return _k_.

Custom Judge:

The judge will test your solution with the following code:
```
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```
If all assertions pass, then your solution will be accepted.



Example 1:
```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
```
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
```
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
```
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).



Constraints:

    0 <= nums.length <= 100
    0 <= nums[i] <= 50
    0 <= val <= 100



## solution

```javascript
let k = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== val) {
    nums[k] = nums[i]
    k++;
  }
}
```

```let k = 0;``` creates a variable named k and initializes it to 0. This variable will keep track of the index where the next valid element (not equal to val) should be placed in the modified array.

### Checking for Matching Value:

```if (nums[i] !== val) { ... }```: Inside the loop, this condition checks if the current element at index _i_ in the _nums_ array ```(nums[i])``` is not equal to the value to be removed (val).

### Shifting Elements (if Not Matching):
If the condition is true _(element is not val)_:

```nums[k] = nums[i];```: This line copies the current element (nums[i]) to the index _k_ in the _nums_ array. Essentially, it shifts non-matching elements towards the beginning of the array, overwriting existing elements.
```k++;```: This line increments the _k_ variable by 1, preparing it for the next non-matching element to be placed in the correct position.

so this is what looks on every iteration.
```
// [3, 2, 2, 3]
// [2, 2, 2, 3]
// [2, 2, 2, 3]
// [2, 2, 2, 3]
```