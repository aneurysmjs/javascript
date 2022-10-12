// @ts-nocheck
import swapProp from './swapProp.mjs';

describe('swapProp', () => {
  it('should swap a property with given keys', () => {
    const obj1 = {
      id: 1,
      name: 'jero',
      order: 0,
    };

    const obj2 = {
      id: 2,
      name: 'matthias',
      order: 1,
    };

    const result1 = {
      id: 1,
      name: 'jero',
      order: 1,
    };

    expect(swapProp(obj1, obj2, 'order')).toEqual(result1);
  });
});
