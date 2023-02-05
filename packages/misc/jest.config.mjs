// Jest configuration for api
import base from '../../jest.config.base.mjs';

export default {
  ...base,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  displayName: 'misc',
};
