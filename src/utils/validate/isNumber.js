
/**
 * Check if value is number.
 *
 * @memberof utils.validate
 * @param {*} value - Value to test.
 *
 * @example
 * isNumber(10);        // true
 * isNumber(438.34);    // true
 * isNumber(NaN);       // false
 * isNumber({});        // false
 * isNumber('124');     // false
 * isNumber(Infinity);  // false
 */
const isNumber = (value) => {
  return isFinite(value) && !isNaN(value) && typeof value === 'number';
};

module.exports = isNumber;