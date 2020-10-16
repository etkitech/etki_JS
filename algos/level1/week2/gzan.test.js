const weatherInfo = require('./gzan.index.js').weatherInfo;
const convertToCelsius = require('./gzan.index.js').convertToCelsius;

test('weatherInfo exists', () => {
  expect(weatherInfo).toBeDefined();
});

test('convertToCelsius exists', () => {
  expect(convertToCelsius).toBeDefined();
});

describe('weatherInfo', function () {
  it('should get correct answer', function () {
    expect(convertToCelsius(50)).toEqual(10);
    expect(convertToCelsius(23)).toEqual(-5);
  })
})

describe('weatherInfo exists', function () {
  it('should get correct answer', function () {
    expect(weatherInfo(50)).toEqual('10 is above freezing temperature');
    expect(weatherInfo(23)).toEqual('-5 is freezing temperature');
    expect(weatherInfo(95)).toEqual('35 is above freezing temperature');
  })
})