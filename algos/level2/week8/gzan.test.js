const sortArray = require('./gzan.index.js').sortArray;
const sortArrayLong = require('./gzan.index.js').sortArrayLong;
const isOdd = require('./gzan.index.js').isOdd;
const addNumberSorted = require('./gzan.index.js').addNumberSorted;

describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof sortArray).toEqual('function');
    expect(typeof sortArrayLong).toEqual('function');
    expect(typeof isOdd).toEqual('function');
    expect(typeof addNumberSorted).toEqual('function');
  });
});

describe('Logic isOdd', function () {
  it('should find the correct result', () => {
    expect(isOdd(1)).toBeTruthy();
    expect(isOdd(-1)).toBeTruthy();
    expect(isOdd(127)).toBeTruthy();
    expect(isOdd(128)).toBeFalsy();
    expect(isOdd(0)).toBeFalsy();
    expect(isOdd(-4)).toBeFalsy();
  });
});

describe('Logic addNumberSorted', function () {
  it('should find the correct result', () => {
    expect(addNumberSorted(1, [2, 3])).toEqual([1, 2, 3]);
    // expect(addNumberSorted(4, [2, 3])).toEqual([2, 3, 4]);
    expect(addNumberSorted(3, [2, 4])).toEqual([2, 3, 4]);
    expect(addNumberSorted(21, [1, 2, 30])).toEqual([1, 2, 21, 30]);
    expect(addNumberSorted(51, [])).toEqual([51]);
    expect(addNumberSorted(51, [52])).toEqual([51, 52]);
    expect(addNumberSorted(5, [1, 2, 3, 4, 5, 7, 8, 9, 10, 11])).toEqual([1, 2, 3, 4, 5, 5, 7, 8, 9, 10, 11]);
  });
});

describe('Logic sortArray', function () {
  it('should find the correct result in both functions', () => {
    expect(sortArray([3, 9, 4, 5, 2, 7, 5, 12, 8])).toEqual([3, 5, 4, 5, 2, 7, 9, 12, 8])
    expect(sortArrayLong([3, 9, 4, 5, 2, 7, 5, 12, 8])).toEqual([3, 5, 4, 5, 2, 7, 9, 12, 8])
    expect(sortArray([87, 34, 56, 23, 43, 5, 63, 21])).toEqual([5, 34, 56, 21, 23, 43, 63, 87])
    expect(sortArrayLong([87, 34, 56, 23, 43, 5, 63, 21])).toEqual([5, 34, 56, 21, 23, 43, 63, 87])
  });
});