import breakCamelCase from '../src/breakCamelCase';

describe('breakCamelCase', () => {
  it('breaks up camel casing, using a space between words', () => {
    const result = breakCamelCase('camelCasing');

    expect(result).toEqual('camel Casing');
  });
});
