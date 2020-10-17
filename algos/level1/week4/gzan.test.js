const litres = require('./gzan.index.js');

test('litres  function is defined', () => {
  expect(typeof litres).toEqual('function');
});

test('calculates the right amount of litres water from the hours given', () => {
  expect(litres(1.4)).toEqual(0);
  expect(litres(6.7)).toEqual(3);
  expect(litres(11.8)).toEqual(5);
  expect(litres(0.82)).toEqual(0);
  expect(litres(1787)).toEqual(893);
  expect(litres(12.3)).toEqual(6);
  expect(litres(0)).toEqual(0);
  expect(litres(12.3)).toEqual(6);
});


