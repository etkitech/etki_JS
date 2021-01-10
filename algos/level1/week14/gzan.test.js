const reverseSolution1 = require('./gzan.index').reverseSolution1
const reverseSolution2 = require('./gzan.index').reverseSolution2
const reverseSolution3 = require('./gzan.index').reverseSolution3
const reverseSolution3Short = require('./gzan.index').reverseSolution3Short


test('Reverse function exists', () => {
  expect(reverseSolution1).toBeDefined();
  expect(reverseSolution2).toBeDefined();
  expect(reverseSolution3).toBeDefined();
  expect(reverseSolution3Short).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseSolution1(' abcd')).toEqual('dcba ');
  expect(reverseSolution2('reverse')).toEqual('esrever');
  expect(reverseSolution3('123456789')).toEqual('987654321');
  expect(reverseSolution3Short('etki Tech Network')).toEqual('krowteN hceT ikte');
});

