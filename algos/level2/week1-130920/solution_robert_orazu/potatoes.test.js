const functionImport = require("./index");

describe("total likes", () => {
  test("when the numbers are 2 and 3", () => {
    expect(functionImport.findValue(2, 3)).toBe(6);
  });
});
