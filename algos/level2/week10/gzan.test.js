const tourneyRecursive = require('./gzan.index.js').tourneyRecursive;
const tourneyLoops = require('./gzan.index.js').tourneyLoops;

describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof tourneyRecursive).toEqual('function');
    expect(typeof tourneyLoops).toEqual('function');
  });
});

describe('Logic', function () {
  it('should find the correct results', () => {
    expect(tourneyRecursive([9, 5, 4, 7, 6, 3, 8, 2])).toEqual([[9, 5, 4, 7, 6, 3, 8, 2], [9, 7, 6, 8], [9, 8], [9]]);
    expect(tourneyRecursive([9, 5, 4, 7, 6, 3, 8])).toEqual([[9, 5, 4, 7, 6, 3, 8], [8, 9, 7, 6], [9, 7], [9]]);
    expect(tourneyRecursive([3, 5, 4, 6, 9, 3, 8, 7])).toEqual([[3, 5, 4, 6, 9, 3, 8, 7], [5, 6, 9, 8], [6, 9], [9]]);
  });
});

describe('Logic', function () {
  it('should find the same correct results', () => {
    expect(tourneyLoops([9, 5, 4, 7, 6, 3, 8, 2])).toEqual([[9, 5, 4, 7, 6, 3, 8, 2], [9, 7, 6, 8], [9, 8], [9]]);
    expect(tourneyLoops([9, 5, 4, 7, 6, 3, 8])).toEqual([[9, 5, 4, 7, 6, 3, 8], [8, 9, 7, 6], [9, 7], [9]]);
    expect(tourneyLoops([3, 5, 4, 6, 9, 3, 8, 7])).toEqual([[3, 5, 4, 6, 9, 3, 8, 7], [5, 6, 9, 8], [6, 9], [9]]);
  });
});