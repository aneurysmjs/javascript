/**
 * @param {number[]} prices
 * @return {number}
 */
export default function maxProfit(prices) {
  // const day2 = 1;
  // const day5 = 4;

  // let stock;

  // let profit = 0;

  // if (prices.length < 2) {
  //     return 0
  // }

  // for (let i = 0; i < prices.length; i++) {
  //     if (i === day2) {
  //         stock = prices[i];
  //     }

  //     if (i === day5 && stock) {
  //         profit = prices[i] - stock;
  //     }

  // }

  // if (profit <= stock) {
  //     return 0
  // }

  // return profit;

  let buy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    /// Update the buy variable if the current price is lower than the current buying price.
    if (prices[i] < buy) {
      buy = prices[i]; // basically we try to keep the lowest stock price
      // Update the profit if the difference between the current price and the buying price
      // is greater than the current profit.
    } else if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }

  return profit;
}
