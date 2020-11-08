const convert = require('./robert.index')

describe('Check that the function gives the correct output for different test cases', function () {
    test('Function should be defined', () => {
        expect(convert).toBeDefined();
    });
    test('should return the correct output for a string', () => { 
        expect(convert('HippoPoPtamus')).toEqual(1022323245678);
    });
    test('should return the correct output for an empty string', () => { 
        expect(convert('')).toEqual(0);
    });
    test('should return the correct output for a string with all characters uniform', () => { 
        expect(convert('cCc')).toEqual(111);
    });
    test('should return the correct output for a string with only one character', () => { 
        expect(convert('a')).toEqual(1);
    });
})