const palindrome = require('./gzan.index')

test('Check if function exists', () => {
  expect(palindrome).toBeDefined();
});

test('Returns true if a string is a palindrome', () => {
  expect(palindrome('abba')).toBeTruthy();
  expect(palindrome('abcdefg')).toBeFalsy();
});