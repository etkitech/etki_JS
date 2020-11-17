const busTimer = require('./leli_week2')

describe("week2: bus timer", () => {
  test("5:00 => 55", () => {
    expect(busTimer("05:00")).toBe(55)
  })
  test("10:00 => 10", () => {
    expect(busTimer("10:00")).toBe(10)
  })
  test("12:10 => 0", () => {
    expect(busTimer("12:10")).toBe(0)
  })
  test("12:11 => 14", () => {
    expect(busTimer("12:11")).toBe(14)
  })
  test("23:55 => 0", () => {
    expect(busTimer("23:55")).toBe(0)
  })
  test("23:56 => 359", () => {
    expect(busTimer("23:56")).toBe(359)
  })
  test("34:44", () =>{
    expect(busTimer("34:44")).toBe("You have to give a valid time")
  })
})