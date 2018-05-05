
'use strict';

const readFile = require('./utils/readFile');
const entitify = require('./utils/entitify');

/**
 * @file Expose out Analyser and other tools
 * @author Matti Mehtonen
 */

module.exports = {
  analyse: (entry) => {

    if (!entry || typeof entry !== 'string') {
      throw new Error('missing entry');
    }

    const content = readFile(entry);
    const entities = entitify(content);
    console.log(JSON.stringify(entities, null, 2));
  }
};