import { it } from '@jest/globals';
import stickCuttingSquare from './stickCuttingSquare.mjs';

describe('stickCuttingSquare', () => {
  it('given A = 10, B = 21, should return 7', () => {
    expect(stickCuttingSquare(10, 21)).toBe(7);
  });
});
