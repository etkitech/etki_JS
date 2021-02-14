let midpoint = (list) =>{
    if(!list.head){
    return null
    }
let middleNode = list.head
let lastNode = list.head
while(lastNode.next && lastNode.next.next){
    middleNode = middleNode.next
    lastNode = lastNode.next.next
}
return {data: middleNode.data}
}

module.exports = midpoint
