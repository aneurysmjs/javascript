// Jest configuration for api
import base from '../../jest.config.base.mjs';

export default {
  ...base,
  preset: 'ts-jest/presets/js-with-ts-esm',
  displayName: 'theory',
};
