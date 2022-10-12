import jestConfigBase from './jest.config.base.js';

export default {
  ...jestConfigBase,
  projects: ['<rootDir>/packages/*'],
};
