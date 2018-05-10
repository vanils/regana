
/**
 * Check if value is number
 * @memberof utils.validate
 */
const isNumber = (value) => {
  return isFinite(value) && !isNaN(value) && typeof value === 'number';
};

module.exports = isNumber;