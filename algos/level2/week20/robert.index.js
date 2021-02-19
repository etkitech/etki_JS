const { List, Node } = require('../week18/robert.index')

//this funtion takes a normal linked list and makes it circular by pointing the last node to the first one
const makeCircle = (list) =>{
 let last = list.getLast()
last.next = list.head
}
  

const circular = (list) =>{
    if(list.head === null){
        return true
    }
    if(list.head.next === null){
        return false
    }
    let currentNode = list.head.next
    while (currentNode !== list.head && currentNode.next !== null){
       currentNode = currentNode.next
    }
    if(currentNode.next === null){
        return false
    }
    if(currentNode === list.head){
        return true
    }
   }

   module.exports = {
    makeCircle, circular
  }