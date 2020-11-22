const loneliest = require('./gzan.index.js')

describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof loneliest).toEqual('function');
  });
});

describe('Logic loneliest', function () {
  it('should give an array of letters with the max distance in boths sides ignoring leading and trailing spaces', () => {
    expect(loneliest('abc d   ef  g   h i j      ')).toEqual(['g'])
    expect(loneliest('  abc  d  z    f gk s ')).toEqual(['z'])
    expect(loneliest('a   b   c ')).toEqual(['b'])
    expect(loneliest('a  b  c  de  ').sort()).toEqual(['b', 'c'])
    expect(loneliest('abc').sort()).toEqual(['a', 'b', 'c'])
  });
});
