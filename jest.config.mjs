import fs from 'node:fs';
import path from 'node:path';

import { PACKAGES_DIR } from './config/paths.mjs';
import jestConfigBase from './jest.config.base.mjs';

const packages = fs.readdirSync(PACKAGES_DIR).filter((name) => {
  return fs.lstatSync(path.join(PACKAGES_DIR, name)).isDirectory();
});

const projects = packages.map((pkg) => {
  return `<rootDir>/packages/${pkg}/jest.config.mjs`;
});

export default {
  ...jestConfigBase,
  projects,
};
