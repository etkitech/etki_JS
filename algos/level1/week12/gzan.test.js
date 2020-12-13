const duplicateSandwich = require('./gzan.index.js')


describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof duplicateSandwich).toEqual('function');
  });
});

describe('Logic', function () {
  it('should find the items in between the duplicated items', () => {
    expect(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])).toEqual([2, 3, 4, 5, 6]);
    expect(duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"])).toEqual(["Hello", "Example", "hello"]);
    expect(duplicateSandwich([0, 1, 2, 3, 4, 5, 3])).toEqual([4, 5]);
    expect(duplicateSandwich(["item1", "item2", "item3", "item4", "item2", "item5", "item6"])).toEqual(["item3", "item4"]);
    expect(duplicateSandwich([5, 3, 5, 6])).toEqual([3]);
  });
});
