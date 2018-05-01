
module.exports = (Scope) => {
  test('should work without parent scope', () => {
    const scope = new Scope();
    expect(scope.parentScope).toEqual(null);
  });
  test('should work with parent scope', () => {
    const parentScope = new Scope();
    const childScope = new Scope(parentScope);
    expect(childScope.parentScope).toEqual(parentScope);
  });
};