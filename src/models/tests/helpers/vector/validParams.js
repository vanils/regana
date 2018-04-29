
module.exports = (Vector, validNode) => {
  test('should work with magnitude of 0.5', () => {
    const vector = new Vector(validNode, validNode, 0.5);
    expect(vector.fromNode).toEqual(validNode);
    expect(vector.toNode).toEqual(validNode);
    expect(vector.magnitude).toEqual(0.5);
  });
};