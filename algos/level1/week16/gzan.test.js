const reverseInt = require('./gzan.index')



test('reverseInt function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('reverseInt reverses n integer', () => {
  expect(reverseInt(123)).toEqual(321);
  expect(reverseInt(-51)).toEqual(-15);
  expect(reverseInt(500)).toEqual(5);
  expect(reverseInt(-940000)).toEqual(-49);
});

//Source of the above solutions : The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy