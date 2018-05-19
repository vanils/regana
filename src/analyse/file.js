
const readFile = require('../utils/readFile');
const entitify = require('../utils/entitify');
const createId = require('../utils/createId');
const Scope = require('../models/Scope');
const fileStore = require('../store/files');
const analyseNode = require('./node');

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

  const id = createId('File');
  const content = readFile(fileSrc);
  const entities = entitify(content);
  const { body } = entities.program;
  const { start, end } = entities;

  fileStore.add({
    id,
    content,
    entities
  });

  const scope = new Scope(start, end, { file: id });

  body.forEach(item => analyseNode(item, scope));

  return scope;
};

module.exports = analyseFile;