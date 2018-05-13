
const readFile = require('../utils/readFile');
const entitify = require('../utils/entitify');
const createId = require('../utils/createId');
const Scope = require('../models/Scope');
const analyseBody = require('./body');

/**
 * Analyse a file and format into logical flow breakdown.
 *
 * @memberof analyse
 * @param {string} fileSrc - Path to file to analyse.
 *
 * @example
 * analyseFile('/path/to/file.js');  // return analyse
 */
const analyseFile = fileSrc => {

  const content = readFile(fileSrc);
  const entities = entitify(content);
  const { body } = entities.program;
  const { start, end } = entities;
  const rootScope = new Scope(start, end, { file: createId('File') });
  const scope = analyseBody(start, end, body, rootScope);

  return JSON.stringify(scope, null, 2);
};

module.exports = analyseFile;