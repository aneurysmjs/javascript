import { jest } from '@jest/globals';
import { vol } from 'memfs';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import structureFolders from './structureFolders';

import fs from 'fs/promises';

export const dirname = fileURLToPath(new URL('.', import.meta.url));

//
jest.mock('fs/promises');

describe('structureFolders', () => {
  beforeEach(async () => {
    vol.reset();

    //fs.readdirSync(process.cwd());

    // console.log('promises => ', await promises.rm('foo'));
  });

  // afterEach(async () => {
  //   console.log('dirname', dirname);

  //   console.log('promises => ', await promises.rm('foo'));
  // });

  it('moves files', async () => {
    structureFolders('path/foo');

    vol.fromJSON({
      '../packages/foo/__tests__/bar.test.mjs': 'bar test',
      '../packages/foo/src/bar.mjs': 'bar',
    });

    const files = await fs.readdir(path.resolve(dirname, '../packages'));
    console.log('files', files);

    console.log('dirname', dirname);
    // console.log('fs => ', await fs.mkdir('foo'));

    expect(1).toBe(1);
  });
});
