class Node {
    constructor(data, next){
        this.data = data;
        this.next = next ? next : null;
    }
}

class List {
    constructor(){
        this.head = null;
    }
  
    insertFirst(data){
        let current = this.head;
        let node = new Node(data);
      if(!current){
        this.head = node;
        return data;
      }else {
      node.next = current;
      this.head = node;
      }
      return data;
    }

    insertLast(data){
        let current = this.head;
        let node = new Node(data);
      if(!current){
        this.head = node;
        return data;
      }else {
       while(current.next){
        current = current.next
       }
       current.next = node
      }
      return data;
    }

      insertAt(data, index){
        let current = this.head
        let node = new Node(data)
        let previous;
        if(index === 0){
          return this.insertFirst(data)
        }
        for(let i = 0; i <= index - 1; i++){
         if(current.next){
             previous = current
             current = current.next
             continue;
            }else{
             current.next = node
             return data
            }      
        } 
        previous.next = node
        node.next = current
        return data
    }

    getFirst(){
       if(!this.head){
         return null
       }
     return this.head.data
    }

    getLast(){
        let current = this.head;
      while(current.next){
        current = current.next
        }
      return current.data
    }

    getAt(index){
        let current = this.head;
        let previous
     for(let i = 0; i <= index; i++){
         previous = current
         current = current.next ? current.next : current
        }
      return previous.data
    }

    removeFirst(){
        if(!this.head){
            return null
          }
        let removedNode = this.head.data
       this.head = this.head.next
       return removedNode
    }


  removeLast(){
        let current = this.head;
        let previous;
        while(current.next){
        previous = current
        current = current.next
        }
        previous.next = null
      return current.data
    }

    removeAt(index){
      let current = this.head
      let previous;
      let round = 0
      if(index === 0){
       return this.removeFirst()
      }
      while(round !== index){
        previous = current;
        current = current.next ? current.next : null;
        round++
        }
       previous.next = current.next ? current.next : null
      return current.data
  }

    size(){
        let current = this.head;
        let length = 1
        if(!this.head){
            return 0
        }
        while(current.next){
          current = current.next
          length = length + 1
         }
         return length
    }

    clear(){
        this.head = null
        return 'cleared!'
    }
}

module.exports = {
  Node, List
}