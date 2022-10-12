// Jest configuration for api
import base from '../../jest.config.base.mjs';

/**
 * @see https://kulshekhar.github.io/ts-jest/docs/guides/esm-support#support-mts-extension
 */
export default {
  ...base,
  preset: 'ts-jest/presets/js-with-ts-esm',
  resolver: '<rootDir>/mjs-resolver.ts',
  displayName: 'theory',
  moduleFileExtensions: ['js', 'mjs', 'ts', 'mts'],
};
