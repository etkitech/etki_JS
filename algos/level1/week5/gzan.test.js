const invert = require('./gzan.index.js');

test('invert', () => {
  expect(invert).toBeDefined();
});

test('inverts an arr with mixed integers', () => {
  expect(invert([-1, 5, 10, -20, 30])).toEqual([1, -5, -10, 20, -30]);
});

test('inverts an arr with mixed integers 2', () => {
  expect(invert([-100, -25, 0, 13])).toEqual([100, 25, 0, -13]);
});

test('zero is returned as zero', () => {
  expect(invert([0])).toEqual([0]);
});

test('empty arr is returned also as empty', () => {
  expect(invert([])).toEqual([]);
});


