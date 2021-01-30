
class Stack {
    constructor(){
        this.values = []
    }
}

class Queue {
    constructor() {
       const stackA = new Stack
       const stackB = new Stack
     this.values = stackA.values.concat(stackB.values)
    }

    add(value) {
       return this.values.unshift(value)
    } 
    remove() {
       return this.values.pop()
    } 
    peek(){
       return this.values[this.values.length - 1]
    }
}

module.exports = Queue;

