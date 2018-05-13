
/**
 * Check if value is proper file id.
 *
 * @memberof utils.validate
 * @param {*} value - Value to test.
 *
 * @example
 * isFile('File_1');  // true
 * isFile(null);      // false
 */
const isFile = (value) => {

  /*
   * TODO - better check
   */
  return typeof value === 'string' && Boolean(value);
};

module.exports = isFile;