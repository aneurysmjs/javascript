import parser from './parser.mjs';

describe('parser', () => {
  it('parse array of tokens into an AST', () => {
    const tokens = [
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

    const ast = parser(tokens);

    const expectedAST = {
      type: 'Program',
      body: [
        {
          type: 'CallExpression',
          name: 'add',
          arguments: [
            {
              type: 'NumberLiteral',
              value: '2',
            },
            {
              type: 'NumberLiteral',
              value: '2',
            },
          ],
        },
      ],
    };

    expect(ast).toStrictEqual(expectedAST);
  });
});
