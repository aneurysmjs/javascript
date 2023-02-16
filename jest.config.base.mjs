export default {
  testEnvironment: 'jest-environment-node',
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,jsx,mjs,mts,ts,tsx}',
    '<rootDir>/**/?(*.)(spec|test).{js,jsx,mjs,mts,ts,tsx}',
  ],
  transform: {},
};
