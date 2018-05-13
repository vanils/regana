
/**
 * Check if value is undefined.
 *
 * @memberof utils.validate
 * @param {*} value - Value to test.
 *
 * @example
 * isUndefined();             // true
 * isUndefined(undefined);    // true
 * isUndefined('undefined');  // false
 * isUndefined(null);         // false
 */
const isUndefined = value => {
  return typeof value === 'undefined';
};

module.exports = isUndefined;