
/* eslint-disable no-plusplus */

let index = 0;

/**
 * Create unique ids for segments. We want id generator which will always give
 * same output.
 * @memberof utils
 */
const createId = (prefix = 'Undefined') => `${prefix}_${index++}`;

module.exports = createId;