import bestTimeToBuyAndSellStock2 from './bestTimeToBuyAndSellStock2.mjs';

describe('best time to buy and sell stock 2', () => {
  const cases = [
    [7, [7, 1, 5, 3, 6, 4]],
    [4, [1, 2, 3, 4, 5]],
    [0, [7, 6, 4, 3, 1]],
  ];

  it.each(cases)('should return profit: %i', (profit, prices) => {
    expect(bestTimeToBuyAndSellStock2(prices)).toBe(profit);
  });
});
