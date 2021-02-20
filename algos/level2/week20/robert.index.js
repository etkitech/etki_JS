
const circular = (list) =>{
    if(!list.head){
        return false
    }
    let slowPointer = list.head
    let fastPointer = list.head
    while(fastPointer.next && fastPointer.next.next){
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
        if(slowPointer === fastPointer){
            return true
        }
    }
        return false
   }

   module.exports = {
    circular
   }