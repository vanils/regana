
module.exports = (Node) => {

  const validParentId = 'node-example';
  const validFile = '/path/to/file.js';
  const validNodeInterface = {
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
  };

  const invalid1 = undefined;
  const invalid2 = '';
  const invalid3 = 1;
  const invalid4 = {};
  const invalid5 = [];
  const invalid6 = null;

  test('should throw error with invalid parentId', () => {
    expect(() => new Node(invalid1, validFile, validNodeInterface)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(invalid2, validFile, validNodeInterface)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(invalid3, validFile, validNodeInterface)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(invalid4, validFile, validNodeInterface)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(invalid5, validFile, validNodeInterface)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(invalid6, validFile, validNodeInterface)).toThrowErrorMatchingSnapshot();
  });

  test('should throw error with invalid file', () => {
    expect(() => new Node(validParentId, invalid1, validNodeInterface)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(validParentId, invalid2, validNodeInterface)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(validParentId, invalid3, validNodeInterface)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(validParentId, invalid4, validNodeInterface)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(validParentId, invalid5, validNodeInterface)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(validParentId, invalid6, validNodeInterface)).toThrowErrorMatchingSnapshot();
  });

  test('should throw error with invalid nodeInterface', () => {
    expect(() => new Node(validParentId, validFile, invalid1)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(validParentId, validFile, invalid2)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(validParentId, validFile, invalid3)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(validParentId, validFile, invalid4)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(validParentId, validFile, invalid5)).toThrowErrorMatchingSnapshot();
    expect(() => new Node(validParentId, validFile, invalid6)).toThrowErrorMatchingSnapshot();
  });
};