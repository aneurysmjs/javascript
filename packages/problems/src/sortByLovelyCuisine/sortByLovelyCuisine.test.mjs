import sortByLovelyCuisine from './sortByLovelyCuisine.mjs';

describe('Sort by lovely cuisine', () => {
  describe('2 cuisines', () => {
    const cuisines = ['italian', 'chinese', 'georgian', 'indian'];
    const expectedOrder = ['georgian', 'indian', 'chinese', 'italian'];

    it("should return ['georgian', 'indian', 'chinese', 'italian']", () => {
      expect([...cuisines].sort(sortByLovelyCuisine)).toStrictEqual(expectedOrder);
    });
  });

  describe('neat way', () => {
    const cuisinesToSort = ['italian', 'chinese', 'georgian', 'indian'];
    const expectedOrder = ['georgian', 'indian', 'chinese', 'italian'];

    const result = [...cuisinesToSort].sort((a, b) => {
      return expectedOrder.indexOf(a) - expectedOrder.indexOf(b);
    });

    it("should return  ['georgian', 'indian', 'chinese']", () => {
      expect(result).toStrictEqual(expectedOrder);
    });
  });
});
