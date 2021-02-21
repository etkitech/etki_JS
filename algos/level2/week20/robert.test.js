const { circular } = require('./robert.index')
const { List, Node } = require('../week18/robert.index')

describe('Test that class and functions are imported/exported correctly', () => {
    test('Classes and function should be defined', () => {
        expect(Node).toBeDefined();
        expect(circular).toBeDefined();
        expect(List).toBeDefined();
    });
})

describe('The circular function determines correctly if list is circular or not', () => {
    test('when a list is not circular', () => {
        const l = new List();
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        l.head = a;
        a.next = b;
        b.next = c;
        c.next = null;
        //A list with a last node pointing to null is not circular
        expect(l.getLast().next).toBe(null)
        expect(circular(l)).toBe(false);
    });
    test('when a list is circular', () => {
        const l = new List();
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        l.head = a;
        a.next = b;
        b.next = c;
        c.next = b;
        expect(circular(l)).toBe(true)
    });
    test('when a list is empty', () => {
        const l = new List();
        expect(l.size()).toBe(0)
        //An empty list is considered not circular
        expect(circular(l)).toBe(false)
    });
})