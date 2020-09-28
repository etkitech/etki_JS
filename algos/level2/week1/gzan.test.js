const potatoes = require('./gzan.index.js');

test('totalWeight function exists', () => {
    expect(typeof potatoes).toEqual('function');
});

describe('Logic', function () {
    it('should find the correct result', () => {
        expect(potatoes(99, 100, 98)).toEqual(50);
        expect(potatoes(82, 127, 80)).toEqual(114);
        expect(potatoes(93, 129, 91)).toEqual(100);
    });
});
