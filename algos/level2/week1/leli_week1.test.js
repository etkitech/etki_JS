const potatoes = require('./leli_week1')

describe('drying potatos', () => {
  test('example given', () => {
    expect(potatoes(99,100,98)).toBe(50)
  })
})