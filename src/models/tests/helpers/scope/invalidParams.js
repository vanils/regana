
module.exports = (Scope) => {

  const validStart = 10;
  const validEnd = 50;
  const validFile = 'File_1';

  const validScope = new Scope(validStart, validEnd, { file: validFile });

  test('should throw error when file not specified', () => {
    expect(() => new Scope(validStart, validEnd)).toThrowErrorMatchingSnapshot();
  });

  test('should throw error with invalid file', () => {
    expect(() => new Scope(validStart, validEnd, { file: '' })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { file: {} })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { file: [] })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { file: null })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { file: NaN })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { file: Infinity })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { file: new Date() })).toThrowErrorMatchingSnapshot();
  });

  test('should throw error with invalid start', () => {
    expect(() => new Scope('', validEnd, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope({}, validEnd, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope([], validEnd, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(null, validEnd, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(NaN, validEnd, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(Infinity, validEnd, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(new Date(), validEnd, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
  });

  test('should throw error with invalid end', () => {
    expect(() => new Scope(validStart, '', { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, {}, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, [], { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, null, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, NaN, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, Infinity, { parentScope: validScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, new Date(), { parentScope: validScope })).toThrowErrorMatchingSnapshot();
  });

  test('should throw error with invalid parent scope', () => {
    expect(() => new Scope(validStart, validEnd, { parentScope: '' })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { parentScope: {} })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { parentScope: [] })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { parentScope: null })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { parentScope: NaN })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { parentScope: 1 })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(validStart, validEnd, { parentScope: new Date() })).toThrowErrorMatchingSnapshot();
  });

  test('should throw error with parent scope with invalid start and end', () => {
    const parentScope = new Scope(100, 200, { file: validFile });
    expect(() => new Scope(95, 120, { parentScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(80, 90, { parentScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(120, 210, { parentScope })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(210, 400, { parentScope })).toThrowErrorMatchingSnapshot();
  });
};