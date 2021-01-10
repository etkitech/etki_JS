
class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    //add return to be able to work with remove method
    return this.data.pop();
  }

}

module.exports = Queue;

//Source: The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy