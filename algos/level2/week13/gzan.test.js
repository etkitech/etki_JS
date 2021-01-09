const customChristmasTree = require('./gzan.index.js')


describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof customChristmasTree).toEqual('function');
  });
});

describe('Logic', function () {
  it('should return a str without "WUB"s amnd multiple/trailing/heading spaces', () => {
    expect(customChristmasTree("123456789", 3)).toEqual('  1\n 2 3\n4 5 6\n  |');
    expect(customChristmasTree("1234", 6)).toEqual('     1\n    2 3\n   4 1 2\n  3 4 1 2\n 3 4 1 2 3\n4 1 2 3 4 1\n     |\n     |');
    expect(customChristmasTree("*@o", 3)).toEqual('  *\n @ o\n* @ o\n  |');
    expect(customChristmasTree("*@o", 6)).toEqual('     *\n    @ o\n   * @ o\n  * @ o *\n @ o * @ o\n* @ o * @ o\n     |\n     |');
    expect(customChristmasTree("ruck", 17)).toEqual('                r\n               u c\n              k r u\n             c k r u\n            c k r u c\n           k r u c k r\n          u c k r u c k\n         r u c k r u c k\n        r u c k r u c k r\n       u c k r u c k r u c\n      k r u c k r u c k r u\n     c k r u c k r u c k r u\n    c k r u c k r u c k r u c\n   k r u c k r u c k r u c k r\n  u c k r u c k r u c k r u c k\n r u c k r u c k r u c k r u c k\nr u c k r u c k r u c k r u c k r\n                |\n                |\n                |\n                |\n                |');
    expect(customChristmasTree("*\\", 5)).toEqual('    *\n   \\ *\n  \\ * \\\n * \\ * \\\n* \\ * \\ *\n    |');
    expect(customChristmasTree("tjllsj", 7)).toEqual('      t\n     j l\n    l s j\n   t j l l\n  s j t j l\n l s j t j l\nl s j t j l l\n      |\n      |');
    expect(customChristmasTree("ZFRPC", 8)).toEqual('       Z\n      F R\n     P C Z\n    F R P C\n   Z F R P C\n  Z F R P C Z\n F R P C Z F R\nP C Z F R P C Z\n       |\n       |');
  });
});