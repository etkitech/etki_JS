### UNDERWATER QUEUE WEAVING

#### About the queue: 
- a data structure based on FIFO Principle (**F**irst **I**n **F**irst **O**ut)
- **enqueuing:** adding a new record to the beginning of the Queue (first index)
- **dequeuing:** removing the oldest record from the Queue (last index)

#### Instructions: 

1. Implement a 'peek' method in the below Queue class. Peek should return the last element (the next one to be returned) from the queue **without** removing it.

2. Implement the 'weave' function. Weave receives two queues as arguments and combines the contents of each into a new, third queue. The third queue should contain the **alternating** content of the two queues The function should handle queues of **different lengths** without inserting 'undefined' into the new one. **Do not** access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions. 

#### Example 

````
const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
queueOne.add(3);
queueOne.peek(); // returns 1
console.log(queueOne); // returns [3,2,1]
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
const q = weave(queueOne, queueTwo);
q.remove() //returns 1
q.remove() //returns 'Hi'
q.remove() //returns 2
q.remove() //returns 'There'
````

#### Here is the basic structure of the class for you to fill peek method:  
````
class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    return this.data.pop();
  }
  peek(){

  }

}
````

#### Here is a file example with weave function for you to fill in:  
````
const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  
}

module.exports = weave;
````

#### Source: The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy 