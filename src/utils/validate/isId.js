
/**
 * Check if value is id
 * @memberof utils.validate
 */
const isId = (value) => {
  return typeof value === 'string' && value.length > 0;
};

module.exports = isId;