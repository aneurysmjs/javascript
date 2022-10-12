import reactive from './vueReactivity.mjs';

describe.only('vueReactivity', () => {
  it('does', () => {
    reactive();

    expect(1).toBe(1);
  });
});
