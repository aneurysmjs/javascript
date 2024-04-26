You are given an array prices where `prices[i]` is the price of a given stock on the <code>i<sup>th</sup></code> day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Example 1:

```
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
```

### Example 2:

```
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
```

### Example 3:

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
```

# solution

## Approach

To solve this question we will use Greedy Algorithm.

**Now if you don't know anything about Greedy algorithm here is the small explanation of the Greedy.**

Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum solution. In these algorithms, decisions are made based on the information available at the current moment without considering the consequences of these decisions in the future. The key idea is to select the best possible choice at each step, leading to a solution that may not always be the most optimal but is often good enough for many problems.

## code explanation

Code Explanation

```javascript
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (buy < prices[i]) {
      profit += prices[i] - buy;
    }

    buy = prices[i];
  }

  return profit;
```

**Variable Initialization:**

```profit``` is initialized to 0. This variable will accumulate the maximum profit throughout the iteration.
```buy``` is initialized to ```prices[0]```, the price of the stock on the first day. This variable represents the buying price of the stock..

Iteration: A ```for``` loop iterates through the ```prices``` array starting from the second element (```i = 1```) to the end of the array (```i < len```). This loop is used to calculate the profit for each transaction.



Profit Calculation:

    Within the loop, there's an if statement checking if the current price (prices[i]) is greater than the buying price (start). If true, it indicates a potential profit opportunity.
    The difference between the current price and the buying price (prices[i] - start) is calculated and added to max. This step simulates selling the stock bought at start price, capturing the profit, and then considering the current price as a new buying price for potential future transactions.
    Regardless of whether a profit was made or not, the start is updated to the current price (prices[i]). This step prepares for the next iteration, considering the current day's price as the new buying price.


