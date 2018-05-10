
/**
 * Check if value is instance of certain class
 * @memberof utils.validate
 */
const isInstance = (value, Class) => {
  return value instanceof Class;
};

module.exports = isInstance;