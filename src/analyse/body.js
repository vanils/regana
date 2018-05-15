
const Scope = require('../models/Scope');

const analyseNode = require('./node');

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

  body.forEach(item => analyseNode(item, scope));

  return scope;
};

module.exports = analyseBody;