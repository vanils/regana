
const Scope = require('../models/Scope');

const analyseVariable = require('./types/declarations/variable');
const analyseExportNamed = require('./types/modules/exports/exportNamed');

/**
 * Analyse a body block.
 *
 * @memberof analyse
 * @param {number} start - First character of this body.
 * @param {number} end - First character after this body.
 * @param {Array} body - Array of entities on this body.
 * @param {Scope} parentScope - Parent scope for this body.
 * @returns {Scope} Scope of this body block.
 *
 * @example
 * analyseBody(10, 56, [...], scope);  // returns analyse
 */
const analyseBody = (start, end, body, parentScope) => {

  const scope = new Scope(start, end, { parentScope });

  body.forEach(item => {
    switch (item.type) {
      case 'VariableDeclaration':
        return analyseVariable(item, scope);
      case 'ExportNamedDeclaration':
        return analyseExportNamed(item, scope);
      default:
        throw new Error(`Failed to parse, unknown entity type '${item.type}'`);
    }
  });

  return scope;
};

module.exports = analyseBody;