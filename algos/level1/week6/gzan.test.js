const generateRange = require('./gzan.index.js');

test('generateRange', () => {
  expect(generateRange).toBeDefined();
});

test('generateRanges an arr with mixed integers', () => {
  expect(generateRange(2, 10, 2)).toEqual([2, 4, 6, 8, 10]);
});

test('generateRanges an arr with mixed integers', () => {
  expect(generateRange(1, 10, 5)).toEqual([1, 6]);
});

test('generateRanges an arr with mixed integers', () => {
  expect(generateRange(11, 44, 8)).toEqual([11, 19, 27, 35, 43]);
});

test('generateRanges an arr with mixed integers', () => {
  expect(generateRange(12, 130, 4)).toEqual([12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128]);
});