const Queue = require('./gzan.queue');

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  //iterate as long as one of the queues able to return an element
  while (sourceOne.peek() || sourceTwo.peek()) {
    //check if there is still element in the q through peek method
    //if yes, get the element at the beginning of the sourceOne queue and add it to the q 
    //do the same for the source two
    if (sourceOne.peek()) q.add(sourceOne.remove())
    if (sourceTwo.peek()) q.add(sourceTwo.remove())
  }
  return q;
}


module.exports = weave;

//Source: The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy