
module.exports = (Vector, validNode) => {

  const validMagnitude = 0.5;

  const invalid1 = undefined;
  const invalid2 = '';
  const invalid3 = {};
  const invalid4 = [];
  const invalid5 = null;
  const invalid6 = NaN;
  const invalid7 = 1;
  const invalid8 = new Date();

  test('should throw error with invalid parentId', () => {
    expect(() => new Vector(invalid1, validNode, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(invalid2, validNode, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(invalid3, validNode, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(invalid4, validNode, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(invalid5, validNode, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(invalid6, validNode, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(invalid7, validNode, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(invalid8, validNode, validMagnitude)).toThrowErrorMatchingSnapshot();
  });

  test('should throw error with invalid file', () => {
    expect(() => new Vector(validNode, invalid1, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, invalid2, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, invalid3, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, invalid4, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, invalid5, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, invalid6, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, invalid7, validMagnitude)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, invalid8, validMagnitude)).toThrowErrorMatchingSnapshot();
  });

  test('should throw error with invalid nodeInterface', () => {
    expect(() => new Vector(validNode, validNode, invalid1)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, validNode, invalid2)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, validNode, invalid3)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, validNode, invalid4)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, validNode, invalid5)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, validNode, invalid6)).toThrowErrorMatchingSnapshot();
    expect(() => new Vector(validNode, validNode, invalid8)).toThrowErrorMatchingSnapshot();
  });
};