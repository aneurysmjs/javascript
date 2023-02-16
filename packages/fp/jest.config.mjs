import base from '../../jest.config.base.mjs';

export default {
  displayName: 'fp',
  ...base,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
