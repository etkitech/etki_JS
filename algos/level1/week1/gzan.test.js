const areaOrParameterShort = require('./gzan.index.js');

test('areaOrParameterShort  function is defined', () => {
    expect(typeof areaOrParameterShort).toEqual('function');
});

test('calculates the area for squares', () => {
    expect(areaOrParameterShort(4, 4)).toEqual(16);
    expect(areaOrParameterShort(6, 6)).toEqual(36);
    expect(areaOrParameterShort(16, 16)).toEqual(256);
});

test('calculates the parameter for rectangulars', () => {
    expect(areaOrParameterShort(6, 10)).toEqual(32);
    expect(areaOrParameterShort(10, 15)).toEqual(50);
    expect(areaOrParameterShort(80, 70)).toEqual(300);
});
