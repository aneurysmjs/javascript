import divisible from './divisible';

describe('divisible', () => {
  it('resolves when number is divisible by 5', async () => {
    const result = await divisible(15);

    expect(result).toBe('is divisible by 5');
  });

  it('resolves when number is divisible by 5 with helper', async () => {
    await expect(divisible(15)).resolves.toBe('is divisible by 5');
  });

  it('reject when number is NOT divisible by 5', async () => {
    try {
      await divisible(13);
    } catch (error) {
      expect(error).toEqual('wrong');
    }
  });

  it('reject when number is NOT divisible by 5 with Helper', async () => {
    await expect(divisible(13)).rejects.toEqual('wrong');
  });
});
