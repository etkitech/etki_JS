const potatoes = require('./gzan.index.js');

test('totalWeight function exists', () => {
    expect(typeof totalWeight).toEqual('function');
});

describe('Arguments', () => {
    it('should fail if the amount of args is not 3', () => {
        try {
            potatoes(10)
        } catch (err) {
            expect(err.message).toBe('Wrong amount of args');
        }
    });

    it('should fail if not all args are integers', () => {
        try {
            potatoes(97, 34.5, 90);
        } catch (err) {
            expect(err.message).toBe('wrong type in args');
        }
    });
});

describe("Logic", function () {
    it("potatoes", function () {
        expect(potatoes(99, 100, 98).toEqual(50));
        expect(potatoes(82, 127, 80).toEqual(114));
        expect(potatoes(93, 129, 91).toEqual(100));
    });
});
