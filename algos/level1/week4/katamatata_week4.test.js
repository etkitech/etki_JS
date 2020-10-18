const calculateNumberOfLiters = require('./katamatata_week4.index'); 

describe('calculateNumberOfLiters', () => {
  test('function is defined', () => {
    expect(typeof calculateNumberOfLiters).toEqual('function');
  })
  test('calculate the number of liters rounded to the smallest value', () => {
    expect(calculateNumberOfLiters(3)).toEqual(1);
    expect(calculateNumberOfLiters(6.7)).toEqual(3);
    expect(calculateNumberOfLiters(11.8)).toEqual(5);
  });
});