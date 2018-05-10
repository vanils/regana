
module.exports = (Scope) => {

  const validStart = 10;
  const validEnd = 50;

  test('should work without parent scope', () => {
    const scope = new Scope(validStart, validEnd, { file: 'File_1' });
    expect(scope.parentScope).toEqual(null);
  });
  test('should work with parent scope', () => {
    const parentScope = new Scope(validStart, validEnd, { file: 'File_1' });
    const childScope = new Scope(validStart, validEnd, { parentScope });
    expect(childScope.parentScope).toEqual(parentScope);
    expect(childScope.file).toEqual('File_1');
  });
};