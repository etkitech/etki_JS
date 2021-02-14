const midpoint = require('./robert.index')
const { List } = require('../week18/robert.index')

describe('Test that class and fuunction are imported/exported correctly', () => {
    test('Queue should be defined', () => {
        expect(midpoint).toBeDefined();
        expect(List).toBeDefined();
    });
})

describe('The midpoint function finds the correct middle node in different lists', () => {
    const list = new List()
    list.insertLast('a')
    list.insertLast('b')
    list.insertLast('c')
    list.insertLast('d')
    list.insertLast('e')
    list.insertLast('f')
    list.insertLast('g')
    test('the midpoint in an odd number sized list is found', () => {
        expect(list.size()).toBe(7)
        expect(midpoint(list)).toEqual({data: 'd'});
        //element at the third index is the one at the middle and should be same data
        expect(list.getAt(3).data).toBe('d')
    });
    test('the midpoint in an even number sized list is found', () => {
        list.removeLast()
        expect(list.size()).toBe(6)
        expect(midpoint(list)).toEqual({data: 'c'});
        //element at the second index is the one at the middle and should be same data
        expect(list.getAt(2).data).toBe('c')
    });
    test('the function returns null when an empty list is passed to it', () => {
        list.clear()
        expect(list.size()).toBe(0)
        expect(midpoint(list)).toEqual(null);
    });
})



