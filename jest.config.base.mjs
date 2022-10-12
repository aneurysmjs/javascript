export default {
  testEnvironment: 'jest-environment-node',
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,jsx,mjs,ts,tsx}',
    '<rootDir>/**/?(*.)(spec|test).{js,jsx,mjs,ts,tsx}',
  ],
  transform: {},
  verbose: true,
};
