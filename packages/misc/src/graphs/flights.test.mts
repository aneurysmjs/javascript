import { describe, expect, it } from 'vitest';

import { findRoute } from './flights.mjs';

describe('flights', () => {
  describe('findRoute', () => {
    it('finds a route between 2 nodes', () => {
      expect(findRoute('ATL', 'LAX')).toBe(true);
    });
  });
});
