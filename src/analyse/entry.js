
const analyseFile = require('./file');
const scopeStore = require('../store/scopes');

/**
 * Analyse a file and format into logical flow breakdown.
 *
 * @memberof analyse
 * @param {string} fileSrc - Path to file to analyse.
 *
 * @example
 * analyse('/path/to/file.js');  // returns all scopes
 */
const analyse = fileSrc => {
  analyseFile(fileSrc);

  return JSON.stringify(scopeStore.getAll(), null, 2);
};

module.exports = analyse;