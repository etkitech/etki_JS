const arr = require('./gzan.index.js');

test('arr', () => {
  expect(arr).toBeDefined();
});

describe('arr', function () {
  it('should get correct array', function () {
    expect(arr(5)).toEqual([0, 1, 2, 3, 4]);
    expect(arr(0)).toEqual([]);
    expect(arr()).toEqual([]);
    expect(arr(14)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    expect(arr(1)).toEqual([0]);
    expect(arr(3)).toEqual([0, 1, 2]);
  })
})