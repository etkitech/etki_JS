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
  peek() {
    return this.data[this.data.length - 1];
  }

}

const uzu = new Queue()
uzu.add(10);
uzu.add(20);
uzu.add(30);
console.log(uzu.peek()) //10
console.log(uzu) // [30,20,10]

module.exports = Queue;

//Source: The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy