const solve = require('./gzan.index.js').solve;
const solveWithRegEx = require('./gzan.index.js').solveWithRegEx;

describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof solve).toEqual('function');
    expect(typeof solveWithRegEx).toEqual('function');
  });
});

describe('Logic', function () {
  it('should find how many chars should be removed', () => {
    expect(solve('RRGGBB')).toEqual(3);
    expect(solve("RGBRGB")).toEqual(0);
    expect(solve("BGRBBGGBRRR")).toEqual(4);
    expect(solve("GBBBGGRRGRB")).toEqual(4);
    expect(solve("GBRGGRBBBBRRGGGB")).toEqual(7);
  });
});

describe('Logic', function () {
  it('should find how many chars should be removed', () => {
    expect(solveWithRegEx('RRGGBB')).toEqual(3);
    expect(solveWithRegEx("RGBRGB")).toEqual(0);
    expect(solveWithRegEx("BGRBBGGBRRR")).toEqual(4);
    expect(solveWithRegEx("GBBBGGRRGRB")).toEqual(4);
    expect(solveWithRegEx("GBRGGRBBBBRRGGGB")).toEqual(7);
  });
});