const busTimer = require('./gzan.index.js');

test('busTimer function exists', () => {
  expect(typeof busTimer).toEqual('function');
});

describe('Logic', function () {
  it('should find the correct result', () => {
    expect(busTimer('00:00')).toEqual(355);
    expect(busTimer('06:10')).toEqual(0);
    expect(busTimer('23:57')).toEqual(358);
    expect(busTimer('05:59')).toEqual(11);
    expect(busTimer('00:15')).toEqual(340);
    expect(busTimer('04:30')).toEqual(85);
    expect(busTimer('08:00')).toEqual(10);
    expect(busTimer('10:06')).toEqual(4);
    expect(busTimer('13:33')).toEqual(7);
    expect(busTimer('18:57')).toEqual(13);
    expect(busTimer('20:05')).toEqual(5);
    expect(busTimer('05:22')).toEqual(33);
    expect(busTimer('23:48')).toEqual(7);
    expect(busTimer('09:29')).toEqual(11);
    expect(busTimer('11:01')).toEqual(9);
    expect(busTimer('05:41')).toEqual(14);
  });
});
