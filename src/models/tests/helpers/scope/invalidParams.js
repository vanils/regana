
module.exports = (Scope) => {

  const invalid1 = '';
  const invalid2 = {};
  const invalid3 = [];
  const invalid4 = null;
  const invalid5 = NaN;
  const invalid6 = 1;
  const invalid7 = new Date();

  test('should throw error with invalid parent scope', () => {
    expect(() => new Scope({ parentScope: invalid1 })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope({ parentScope: invalid2 })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope({ parentScope: invalid3 })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope({ parentScope: invalid4 })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope({ parentScope: invalid5 })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope({ parentScope: invalid6 })).toThrowErrorMatchingSnapshot();
    expect(() => new Scope({ parentScope: invalid7 })).toThrowErrorMatchingSnapshot();
  });
};