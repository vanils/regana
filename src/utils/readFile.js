
const fs = require('fs');

/**
 * Read a file in a safe manner. Supports module extension addment according to
 * configurations.
 * @memberof utils
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