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

  it('makes tokens from string', () => {
    const program = '(add 2 2)';
    const tokens = tokenizer(program);

    const expectedTokens = [
      { type: 'paren', value: '(' },
      { type: 'name', value: 'add' },
      { type: 'number', value: '2' },
      { type: 'number', value: '2' },
      { type: 'paren', value: ')' },
    ];

    expect(tokens).toStrictEqual(expectedTokens);
  });
});
