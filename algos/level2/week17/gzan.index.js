const Stack = require('../week16/gzan.index');


class Queue {
  constructor() {
    this.first = new Stack()
    this.second = new Stack()
  }

  add(record) {
    this.first.push(record)
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop())
    }

    const removed = this.second.pop()

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }
    return removed
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop())
    }
    const record = this.second.peek()
    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }
    return record
  }
}

module.exports = Queue

// Source: The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy