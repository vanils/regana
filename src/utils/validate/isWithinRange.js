
const isBetween = (value, min, max) => {
  return value >= min && value <= max;
};

/**
 * Check if values (start and end) are within range of another
 * @memberof utils.validate
 */
const isWithinRange = (xStart, xEnd, yStart, yEnd) => {
  return isBetween(xStart, yStart, yEnd) && isBetween(xEnd, yStart, yEnd);
};

module.exports = isWithinRange;