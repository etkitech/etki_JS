const unluckyDays = require('./gzan.index.js');

describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof unluckyDays).toEqual('function');
  });
});

describe('Logic', function () {
  it('should find how many unlucky days in the given year', () => {
    expect(unluckyDays(2020)).toEqual(2);
    expect(unluckyDays(2019)).toEqual(2);
    expect(unluckyDays(2016)).toEqual(1);
    expect(unluckyDays(2015)).toEqual(3);
    expect(unluckyDays(1986)).toEqual(1);
    expect(unluckyDays(1985)).toEqual(2);
    expect(unluckyDays(1982)).toEqual(1);
    expect(unluckyDays(1957)).toEqual(2);
    expect(unluckyDays(1948)).toEqual(2);
    expect(unluckyDays(1001)).toEqual(3);
    expect(unluckyDays(2065)).toEqual(3);
    expect(unluckyDays(2021)).toEqual(1);
  });
});