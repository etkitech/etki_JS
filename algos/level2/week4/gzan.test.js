const findHack = require('./gzan.index.js').findCracker;

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

