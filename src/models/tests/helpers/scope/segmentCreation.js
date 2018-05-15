
module.exports = (Scope) => {

  test('segment addment throw properly', () => {
    const rootScope = new Scope(10, 100, { file: 'File_1' });

    expect(() => rootScope.addSegment(null, 10, 50)).toThrowErrorMatchingSnapshot();
    expect(() => rootScope.addSegment('', 10, 50)).toThrowErrorMatchingSnapshot();
    expect(() => rootScope.addSegment(70, 10, 50)).toThrowErrorMatchingSnapshot();

    expect(() => rootScope.addSegment('Segment_1', null, 50)).toThrowErrorMatchingSnapshot();
    expect(() => rootScope.addSegment('Segment_1', NaN, 50)).toThrowErrorMatchingSnapshot();
    expect(() => rootScope.addSegment('Segment_1', '10', 50)).toThrowErrorMatchingSnapshot();

    expect(() => rootScope.addSegment('Segment_1', 50, null)).toThrowErrorMatchingSnapshot();
    expect(() => rootScope.addSegment('Segment_1', 50, NaN)).toThrowErrorMatchingSnapshot();
    expect(() => rootScope.addSegment('Segment_1', '50', 10)).toThrowErrorMatchingSnapshot();

    expect(() => rootScope.addSegment('Segment_1', 5, 95)).toThrowErrorMatchingSnapshot();
    expect(() => rootScope.addSegment('Segment_1', 15, 120)).toThrowErrorMatchingSnapshot();
    expect(() => rootScope.addSegment('Segment_1', 5, 120)).toThrowErrorMatchingSnapshot();
  });

  test('segment addment should work', () => {
    const rootScope = new Scope(0, 100, { file: 'File_1' });
    rootScope.addSegment('Segment_1', 10, 50);

    expect(rootScope.pointers).toEqual({});

    expect(rootScope.segments).toEqual({
      Segment_1: {
        end: 50,
        id: 'Segment_1',
        start: 10,
        uses: []
      }
    });

    expect(rootScope.exposes).toEqual({});
  });

  test('segment addment should work with pointer', () => {
    const rootScope = new Scope(0, 100, { file: 'File_1' });
    rootScope.addSegment('Segment_1', 10, 50, { pointer: 'myPointer' });

    expect(rootScope.pointers).toEqual({ myPointer: 'Segment_1' });

    expect(rootScope.segments).toEqual({
      Segment_1: {
        end: 50,
        id: 'Segment_1',
        start: 10,
        uses: []
      }
    });

    expect(rootScope.exposes).toEqual({});
  });

  test('segment addment should work with pointer and exposes', () => {
    const rootScope = new Scope(0, 100, { file: 'File_1' });

    rootScope.addSegment('Segment_1', 10, 50, { pointer: 'myPointer' });

    rootScope.addSegment('Segment_2', 60, 70, {
      usesPointers: ['myPointer'],
      exposes: ['myPointer']
    });

    expect(rootScope.pointers).toEqual({ myPointer: 'Segment_1' });

    expect(rootScope.segments).toEqual({
      Segment_1: {
        end: 50,
        id: 'Segment_1',
        start: 10,
        uses: []
      },
      Segment_2: {
        end: 70,
        id: 'Segment_2',
        start: 60,
        uses: ['Segment_1']
      }
    });

    expect(rootScope.exposes).toEqual({ myPointer: 'Segment_2' });
  });
};