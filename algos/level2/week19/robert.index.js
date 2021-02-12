const {LinkedList} = require('../week18/gzan.index');

let midpoint = (list) =>{
let middleNode = list.head
let lastNode = list.head
while(lastNode.next && lastNode.next.next){
    middleNode = middleNode.next
    lastNode = lastNode.next.next
}
return {data: middleNode.data}
}

module.exports = midpoint
// const l = new LinkedList();
//    l.insertLast('a')
//    l.insertLast('b')
//    l.insertLast('c')
//    l.insertLast('d')
//    l.insertLast('e')
//    l.insertLast('f')
//    l.insertLast('g')
//    console.log(midpoint(l))