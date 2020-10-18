const findHack = require('./gzan.index.js');

test('findHack', () => {
  expect(findHack).toBeDefined();
});

test('findHack', () => {
  expect(findHack([
    ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A", "A"]],
    ["name4", 140, ["B", "A", "A", "C", "A"]]
  ])).toEqual(["name2", "name4"]);
});

test('findHack 2', () => {
  expect(findHack([
    ["udo", 85, ["C", "D", "F", "B", "B", "A"]],
    ["jacqueline", 120, ["B", "B", "B", "B", "B"]],
    ["volkan", 110, ["A", "A", "A"]],
    ["judith", 200, ["A", "A", "A", "A", "A", "A"]],
    ["merve", 105, ["B", "D", "A", "A", "B"]]
  ])).toEqual(["volkan", "judith"]);
});

