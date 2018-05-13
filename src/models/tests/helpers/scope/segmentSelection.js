
module.exports = (Scope) => {

  test('segment selection should work directly with scope', () => {

    const rootScope = new Scope(0, 100, { file: 'File_1' });
    rootScope.addSegment('Segment_1', 10, 50, { pointer: 'myPointer' });

    expect(rootScope.getSegmentIdByPointer('myPointer')).toEqual('Segment_1');
  });

  test('segment selection should work from parent scope', () => {

    const rootScope = new Scope(0, 100, { file: 'File_1' });
    rootScope.addSegment('Segment_1', 10, 50, { pointer: 'myPointer' });

    const childScope1 = new Scope(0, 100, { parentScope: rootScope });
    const childScope2 = new Scope(0, 100, { parentScope: childScope1 });

    expect(childScope2.getSegmentIdByPointer('myPointer')).toEqual('Segment_1');
  });

  test('segment selection should throw error when not found', () => {

    const rootScope = new Scope(0, 100, { file: 'File_1' });

    expect(() => {
      rootScope.getSegmentIdByPointer('myPointer');
    }).toThrowErrorMatchingSnapshot();
  });

  test('segment selection should throw error when not found from parent', () => {

    const rootScope = new Scope(0, 100, { file: 'File_1' });
    const childScope1 = new Scope(0, 100, { parentScope: rootScope });
    const childScope2 = new Scope(0, 100, { parentScope: childScope1 });

    expect(() => {
      childScope2.getSegmentIdByPointer('myPointer');
    }).toThrowErrorMatchingSnapshot();
  });
};