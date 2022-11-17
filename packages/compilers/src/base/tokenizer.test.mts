import tokenizer from './tokenizer.mjs';

describe('tokenizer', () => {
  it('makes a opening paren token', () => {
    const program = '(';
    const expectedTokens = [{ type: 'paren', value: '(' }];

    expect(tokenizer(program)).toStrictEqual(expectedTokens);
  });

  it('makes a closing paren token', () => {
    const program = ')';
    const expectedTokens = [{ type: 'paren', value: ')' }];

    expect(tokenizer(program)).toStrictEqual(expectedTokens);
  });

  it('makes a name token', () => {
    const program = 'foo';
    const expectedTokens = [{ type: 'name', value: 'foo' }];

    expect(tokenizer(program)).toStrictEqual(expectedTokens);
  });

  it('makes a number token', () => {
    const program = '123';
    const expectedTokens = [{ type: 'number', value: '123' }];

    expect(tokenizer(program)).toStrictEqual(expectedTokens);
  });

  it('makes a string token from double quotes', () => {
    const program = '"I have double quotes"';
    const expectedTokens = [{ type: 'string', value: 'I have double quotes' }];

    expect(tokenizer(program)).toStrictEqual(expectedTokens);
  });

  it('makes a string token from single quotes', () => {
    const program = "'I have single quotes'";
    const expectedTokens = [{ type: 'string', value: 'I have single quotes' }];

    expect(tokenizer(program)).toStrictEqual(expectedTokens);
  });

  it('makes tokens from string', () => {
    const program = '(add 2 (subtract 4 2))';
    const tokens = tokenizer(program);

    const expectedTokens = [
      { type: 'paren', value: '(' },
      { type: 'name', value: 'add' },
      { type: 'number', value: '2' },
      { type: 'paren', value: '(' },
      { type: 'name', value: 'subtract' },
      { type: 'number', value: '4' },
      { type: 'number', value: '2' },
      { type: 'paren', value: ')' },
      { type: 'paren', value: ')' },
    ];

    expect(tokens).toStrictEqual(expectedTokens);
  });

  it('throws when does noot recognize character', () => {
    const program = '#';

    expect(() => {
      tokenizer(program);
    }).toThrow();
  });
});
