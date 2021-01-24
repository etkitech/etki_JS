const Stack = require('./gzan.index');


test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

test('can push elements to a stack', () => {
  const s = new Stack();
  expect(() => {
    s.push(1);
  }).not.toThrow();
});

test('can remove elements from a Stack', () => {
  const s = new Stack();
  expect(() => {
    s.push(1);
    s.peek();
  }).not.toThrow();
});

test('can show the top element of a Stack', () => {
  const s = new Stack();
  expect(() => {
    s.push(1);
    s.pop();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.peek()).toEqual(3);
  expect(s.pop()).toEqual(3);
  expect(s.peek()).toEqual(2);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
  expect(s.pop()).toEqual(undefined);
});

//Source: The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy