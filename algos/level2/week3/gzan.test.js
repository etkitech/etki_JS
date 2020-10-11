const getScore = require('./gzan.index.js');

test('getScore', () => {
  expect(getScore).toBeDefined();
});

describe('getScore', function () {
  it('should get correct array', function () {
    expect(getScore([4, 2, 2, 3, 3, 4, 2])).toEqual(4900);
    expect(getScore([0, 1, 2, 3, 4])).toEqual(1640);
    expect(getScore([0, 1, 1, 3, 0, 2, 1, 2])).toEqual(620);
    expect(getScore([2, 0, 4, 2, 2, 3, 0, 0, 3, 3])).toEqual(3300);
    expect(getScore([0])).toEqual(0);
    expect(getScore([])).toEqual(0);

  })
})