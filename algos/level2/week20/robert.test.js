const { makeCircle, circular } = require('./robert.index')
const { List } = require('../week18/robert.index')

describe('Test that class and functions are imported/exported correctly', () => {
    test('Queue should be defined', () => {
        expect(makeCircle).toBeDefined();
        expect(circular).toBeDefined();
        expect(List).toBeDefined();
    });
})

describe('The circular function determines correctly if list is circular or not', () => {
    const list = new List()
    list.insertLast('a')
    list.insertLast('b')
    list.insertLast('c')
    list.insertLast('d')
    list.insertLast('e')
    list.insertLast('f')
    list.insertLast('g')
    test('when a list is not circular', () => {
        //A list with a last node pointing to null is not circular
        expect(list.getLast().next).toBe(null)
        expect(circular(list)).toBe(false);
    });
    test('when a list is circular', () => {
        makeCircle(list)
        expect(circular(list)).toBe(true)
    });
    test('when a list is empty', () => {
        list.clear()
        expect(list.size()).toBe(0)
        //An empty list is considered circular
        expect(circular(list)).toBe(true)
    });
})