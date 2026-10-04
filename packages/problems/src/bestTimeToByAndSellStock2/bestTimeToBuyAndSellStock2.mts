export default function maxProfit(prices: number[]): number {
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (buy < prices[i]) {
      profit += prices[i] - buy;
    }

    buy = prices[i];
  }

  return profit;
}
