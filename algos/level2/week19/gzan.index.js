const List = require('./LinkedList')

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = midpoint;

//Source: The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy