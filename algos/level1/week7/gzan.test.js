const validSpacing = require('./gzan.index.js');

test('validSpacing', () => {
  expect(validSpacing).toBeDefined();
});

test('empty space', () => {
  expect(validSpacing(' ')).toBeFalsy();
});
test('empty string', () => {
  expect(validSpacing('')).toBeTruthy();
});

test('2 words with 1 space in between', () => {
  expect(validSpacing('Hello World')).toBeTruthy();
});

test('Space in the wrong place but amount is correct', () => {
  expect(validSpacing('HelloW orld')).toBeTruthy();
});

test('meaningless letters', () => {
  expect(validSpacing('FIz hH jKS')).toBeTruthy();
});

test('space at the end', () => {
  expect(validSpacing('The world is a stage ')).toBeFalsy();
});

test('space at the beginning', () => {
  expect(validSpacing(' JavaScript is the world\'s most misunderstood programming language.')).toBeFalsy();
});
