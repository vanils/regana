
module.exports = (Node, validNode) => {
  test('should work with magnitude of 0.5', () => {

    const node = new Node('node-example', '/path/to/file.js', {
      type: 'VariableDeclaration',
      start: 1,
      end: 28,
      loc: {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 4,
          column: 2
        }
      }
    });

    expect(node.parentId).toEqual('node-example');
    expect(node.file).toEqual('/path/to/file.js');
    expect(node.start).toEqual({
      line: 2,
      column: 0
    });
    expect(node.end).toEqual({
      line: 4,
      column: 2
    });
  });
};