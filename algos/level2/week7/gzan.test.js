const convert = require('./gzan.index.js')


test('convert', () => {
  expect(convert).toBeDefined();
});

test('example 1', () => {
  expect(convert('A')).toEqual(1);
});

test('example 2', () => {
  expect(convert('ABA')).toEqual(101);
});

test('codewars sample test 1', () => {
  expect(convert('CodeWars')).toEqual(10234567);
});

test('codewars sample test 2', () => {
  expect(convert('KATa')).toEqual(1020);
});

test('test 1', () => {
  expect(convert('JavaScript')).toEqual(1020345678);
});

test('test 2', () => {
  expect(convert('Hello')).toEqual(10223);
});

test('test 3', () => {
  expect(convert('World')).toEqual(10234);
});

test('test 4', () => {
  expect(convert('etki')).toEqual(1023);
});

test('test 5', () => {
  expect(convert('letter')).toEqual(102203);
});

