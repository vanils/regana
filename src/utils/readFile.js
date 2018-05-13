
const fs = require('fs');

/**
 * Reads file by using src path. This will handle adding file extensions for
 * imports.
 *
 * @memberof utils
 * @param {string} fileSrc - Path to file to read.
 *
 * @example
 * readFile('/path/to/file');  // returns file content as utf8
 */
const readFile = fileSrc => {
  return fs.readFileSync(withExtension(fileSrc), { encoding: 'utf8' });
};

const withExtension = fileSrc => {
  const stats = fs.statSync(fileSrc);

  if (stats.isFile()) {
    return fileSrc;
  }

  throw new Error(new Error(`file does not exist '${fileSrc}'`));
};

module.exports = readFile;