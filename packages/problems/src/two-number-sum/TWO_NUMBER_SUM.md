# Two number sum

gives you an array of distinct integers values which are not repeated and also  
gives you a separate integer value that represents a target sum.

```javascript
[3, 5, -4, 8, 11, 1, -1, 6], 10;
```

what you have to do is to write a function that is going to find whether or not there's  
a pair of numbers in that array that sums up the **target sum**.

so there's two numbers in the array that sum up 10:

```javascript
[11, -1];
```

## First solution
Is to use two _for loops_ and traverse the array twice to find the sum.  
You can traverse the array once, going through each of the numbers individually.

```javascript
/**
 * this takes O(n^2) | O(1) space
 */
// go to the beforelast.
for (let i = 0; i < array.length - 1; i = +1) {
  const x = array[i];
  // important that `j` goes to the end of the array.
  for (let j = (i += 1); j < array.length; j = +1) {
    const y = array[j];

    if (x + y === 10) {
      [x, y];
    }
  }
}
```

but that's not optimal from a time point of view, that's gonna take O(n<sup>2</sup>) because you are
gonna be doing two _for loops_.

## Second solution

a better aproach is to use a **_hash table_**, it'll cost extra space but make the algorithm faster.  

so we can traverse the array a store each number in the hash table which will allow us  
to access this numbers in _constant_ time.

so we're gonna check if the number needed to sum up to the target value is stored in the hash table, in other words we have:

```javascript
targetSum = 10
// whenever we're traversing the array we got:
currentNum = x
```

so we're gonna find **_y_** such that
```javascript
x + y = 10
```
in other words we can isolate **_y_** 
```javascript
y = 10 - x
```

so as we traverse the array we have the value 10 which is **targetSum**, we have the value **_x_** which is the number we currently at and all we need to do is to apply this formula  _y = 10 - x_ to find **_y_** and then we say, if **_y_** is in our hash table, we just return **_x_** and **_y_**, otherwise we keep traversing the array and make sure we store **_x_** in the hash table.

this is how it looks:

```javascript
// we start we 3
[3, 5, -4, 8, 11, 1, -1, 6]
 ^
y = 10 - 3 = 7
```

is **_7_** in the hash table? No, is not, so we store **_x_** which in this case is **_3_**  

```javascript
{ '3': true }
```

```javascript
// so we move to the next number, 5
[3, 5, -4, 8, 11, 1, -1, 6]
    ^
y = 10 - 5 = 5
```
is **_5_** in the hash table? No, is not, so we store **_5_**

```javascript
{ '3': true, '5': true }
```

```javascript
// so we move to the next number, -4
[3, 5, -4, 8, 11, 1, -1, 6]
        ^
y = 10 - (-4) = 14
```

is **_14_** in the hash table? No, is not, so we store **_-4_**

```javascript
{ '3': true, '5': true, '-4': true }
```
```javascript
// so we move to the next number, 8
[3, 5, -4, 8, 11, 1, -1, 6]
           ^
y = 10 - 8 = 2
```
is **_2_** in the hash table? No, is not, so we store **_8_**

```javascript
{ '3': true, '5': true, '8': true, '-4': true }
```
```javascript
// so we move to the next number, 11
[3, 5, -4, 8, 11, 1, -1, 6]
               ^
y = 10 - 11 = -1
```

is **_-1_** in the hash table? No, is not, so we store **_11_**

```javascript
{ '3': true, '5': true, '8': true, '11': true, '-4': true }
```
```javascript
// so we move to the next number, 1
[3, 5, -4, 8, 11, 1, -1, 6]
                  ^
y = 10 - 1 = 9
```
is **_9_** in the hash table? No, is not, so we store **_1_**

```javascript
{ '1': true, '3': true, '5': true, '8': true, '11': true, '-4': true }
```
```javascript
// so now we move to the number we care about -1
[3, 5, -4, 8, 11, 1, -1, 6]
                      ^
y = 10 - (-1) = 11
```
because **_11_** is in our hash table, that means we've traversed the array
```javascript
{ '1': true, '3': true, '5': true, '8': true, '11': true, '-4': true }
                                                ^
```

so we just return **[_11, -1_]** and we've found our answer.

## Third solution

we can solve this without using a hash table by first sorting the array.  
once we've sorted the array, we set a **pointer** on the left and on the right of the array

```javascript
// left and right pointers
[-4, -1, 1, 3, 5, 6, 8, 11]
  ^                      ^
```
so what we can do is sum up the two numbers that **L** and **R** point to