
/* eslint-disable no-plusplus */

let index = 0;

/**
 * Create unique ids for segments.
 *
 * @memberof utils
 * @param {string} prefix - Prefix for id.
 *
 * @example
 * createId('VariableDeclaration');  // VariableDeclaration_1
 * createId();                       // Undefined_2
 */
const createId = (prefix = 'Undefined') => `${prefix}_${index++}`;

module.exports = createId;