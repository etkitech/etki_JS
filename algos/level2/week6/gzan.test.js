const midtownNav = require('./gzan.index.js')


test('midtownNav', () => {
  expect(midtownNav).toBeDefined();
});

test('gives the correct direction', () => {
  expect(midtownNav('8th Ave and W 38th St', '7th Ave and W 36th St')).toEqual('Walk 2 blocks south, and 1 blocks east');
});

test('gives the correct direction', () => {
  expect(midtownNav('5th Ave and W 46th St', '7th Ave and E 58th St')).toEqual('Walk 12 blocks north, and 2 blocks west');
});

test('gives the correct direction', () => {
  expect(midtownNav('3th Ave and W 212th St', '11th Ave and W 200th St')).toEqual('Walk 12 blocks south, and 8 blocks west');
});

test('gives the correct direction', () => {
  expect(midtownNav('9th Ave and W 23th St', '6th Ave and E 25th St')).toEqual('Walk 2 blocks north, and 3 blocks east');
});