import removeElement from './removeElement.mjs';

describe('remove element', () => {
  const nums = [3,2,2,3];

  const k = removeElement(nums, 3);

  it('should return [1,2,2,3,5,6]', () => {
    expect(k).toBe(2);
  });
});
