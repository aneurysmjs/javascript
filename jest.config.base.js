module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['(__tests__/.*.mock).(js)$'],
  moduleFileExtensions: ['js'],
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  testEnvironment: 'jest-environment-node',
  testRegex: '(/__tests__/.*.(test|spec)).(jsx?|tsx?)$',
  transform: {},
  verbose: true,
};
