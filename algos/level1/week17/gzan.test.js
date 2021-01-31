const maxChar = require('./gzan.index')

test('maxChar function exists', () => {
  expect(maxChar).toBeDefined();
});

test('maxChar finds the character that is most commonly used in the string', () => {
  expect(maxChar("abcccccccd")).toEqual("c");
  expect(maxChar("apple 1231111")).toEqual("1");
  expect(maxChar("klmnhhhhzukskakuk")).toEqual("k");
  expect(maxChar("12133333141")).toEqual("3");
});