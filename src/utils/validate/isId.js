
/**
 * Check if value is valid id.
 *
 * @memberof utils.validate
 * @param {*} value - Value to test.
 *
 * @example
 * isId('File_10');  // true
 * isId(null);       // false
 */
const isId = (value) => {
  return typeof value === 'string' && value.length > 0;
};

module.exports = isId;