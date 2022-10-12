export default {
  moduleFileExtensions: ['js', 'mjs'],
  testEnvironment: 'jest-environment-node',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs,ts,tsx}',
  ],
  transform: {},
  verbose: true,
};
