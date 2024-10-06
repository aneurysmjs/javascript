import path from 'node:path';
import { promises as fs } from 'node:fs';

import getArgs from './getArgs.mjs';

/**
 *
 * @param {string} path
 * @param {string} folder
 * @returns {Promise<boolean>}
 */
async function hasFolder(path, folder) {
  try {
    const files = await fs.readdir(path);

    const has = files.includes(folder);

    const stat = await fs.stat(`${path}/${folder}`);

    return has && stat.isDirectory();
  } catch (err) {
    // throw
  }
}

function extension(element, extFilter = 'js') {
  const extName = path.extname(element);

  return extName === '.' + extFilter;
}

/**
 *
 * @param {string} path
 */
export default async function structureFolders(path) {
  try {
    const hasSrc = await hasFolder(path, 'src');
    const hasTests = await hasFolder(path, '__tests__');

    // const relativeTest = await path.relative(`${path}/src`, `${path}/__tests__`);
    // console.log('relativeTest', relativeTest);

    const extRegex = /\.(mjs|js)$/;

    if (hasSrc && hasTests) {
      const files = await fs.readdir(`${path}/src`);
      const filteredFiles = files.filter((file) => file.endsWith('.js') || file.endsWith('.mjs'));

      for (const file of filteredFiles) {
        try {
          // Check if folder exists
          await fs.access(file);
          // console.warn(`Folder ${kebabCase(item.title)} already exists`);
        } catch (error) {
          if (error.code === 'ENOENT') {
            console.log('error===', error);

            const fileName = file.replace(extRegex, '');

            await fs.mkdir(`${path}/src/${fileName}`);

            fs.rename(`${path}/src/${file}`);

            // for (const content of item.content) {
            //   const contentPath = path.resolve(sectionFolder, kebabCase(content.contentTitle));
            //   // console.log("contentPath", contentPath);

            //   await createSectionsFolderStructure(contentPath, content.contentList);
            // }
          }
        }
      }
    }

    for (const content of contents) {
    }
  } catch (err) {}
}

const args = getArgs();

await structureFolders(args.path);
