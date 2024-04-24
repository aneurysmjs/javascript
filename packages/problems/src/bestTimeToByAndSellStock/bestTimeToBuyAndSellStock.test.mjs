import bestTimeToBuyAndSellStock from './bestTimeToBuyAndSellStock.mjs';

describe('best time to buy and sell stock', () => {
  const cases = [
    [5, [7, 1, 5, 3, 6, 4]],
    [0, [7, 6, 4, 3, 1]],
  ];

  it.each(cases)('should return profit: %i', (profit, prices) => {
    expect(bestTimeToBuyAndSellStock(prices)).toBe(profit);
  });
});
