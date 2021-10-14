export default {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['(__tests__/.*.mock).(js|mjs)$'],
  moduleFileExtensions: ['js', 'mjs'],
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  testEnvironment: 'jest-environment-node',
  testRegex: '(/__tests__/.*.(test|spec)).(js|mjs)$',
  transform: {},
  verbose: true,
};
