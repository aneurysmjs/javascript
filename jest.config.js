// @see https://stackoverflow.com/a/61652773/5378393
export default {
  transform: {},
  testMatch: ['**/__tests__/**/*.?(m)js?(x)', '**/?(*.)(spec|test).?(m)js?(x)'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'],
  moduleFileExtensions: ['js', 'mjs'],
  testEnvironment: 'jest-environment-node',
};
