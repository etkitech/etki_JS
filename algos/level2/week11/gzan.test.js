const partsSums = require('./gzan.index.js');

describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof partsSums).toEqual('function');
  });
});

describe('Logic', function () {
  it('should find the correct results', () => {
    expect(partsSums([0, 1, 3, 6, 10])).toEqual([20, 20, 19, 16, 10, 0]);
    expect(partsSums([])).toEqual([0]);
    expect(partsSums([1, 2, 3, 4, 5, 6])).toEqual([21, 20, 18, 15, 11, 6, 0]);
    expect(partsSums([3, 5, 15])).toEqual([23, 20, 15, 0]);
  });
});