
module.exports = (Scope) => {

  const invalid1 = '';
  const invalid2 = {};
  const invalid3 = [];
  const invalid4 = null;
  const invalid5 = NaN;
  const invalid6 = 1;
  const invalid7 = new Date();

  test('should throw error with invalid parent scope', () => {
    expect(() => new Scope(invalid1)).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(invalid2)).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(invalid3)).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(invalid4)).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(invalid5)).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(invalid6)).toThrowErrorMatchingSnapshot();
    expect(() => new Scope(invalid7)).toThrowErrorMatchingSnapshot();
  });
};