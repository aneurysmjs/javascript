import { findRoute } from './flights';

describe('flights', () => {
  describe('findRoute', () => {
    it('finds a route between 2 nodes', () => {
      expect(findRoute('ATL', 'LAX')).toBe(true);
    });
  });
});
