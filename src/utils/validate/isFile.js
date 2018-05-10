
/**
 * Check if value is proper file id
 * @memberof utils.validate
 */
const isFile = (value) => {

  /*
   * TODO - better check
   */
  return typeof value === 'string' && Boolean(value);
};

module.exports = isFile;