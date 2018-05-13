
/**
 * Check if value is instance of class.
 *
 * @memberof utils.validate
 * @param {*} value - Value to test.
 * @param {Class} Class - Class to check if value is instance of.
 *
 * @example
 * isInstance(scope, Scope); // true
 */
const isInstance = (value, Class) => {
  return value instanceof Class;
};

module.exports = isInstance;