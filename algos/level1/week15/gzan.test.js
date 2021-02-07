const palindrome = require('./gzan.index')


test('Check if function exists', () => {
  expect(palindrome).toBeDefined();
});

test('palindrome returns true if a string is a palindrome', () => {
  expect(palindrome('abba')).toBeTruthy();
  expect(palindrome('aba')).toBeTruthy();
  expect(palindrome('aba ')).toBeFalsy();
  expect(palindrome('abcdefg')).toBeFalsy();
  expect(palindrome('10000001')).toBeTruthy();
  expect(palindrome('Fish hsif')).toBeFalsy();
  expect(palindrome('pennep')).toBeTruthy();
});


//Source of the above solutions : The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy
