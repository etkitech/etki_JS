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
      return node;
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
             return node
            }      
        } 
        previous.next = node
        node.next = current
        // return {
        //   data: node.data,
        //   next: node.next.data
        // }
    }

    getFirst(){
       if(!this.head){
         return null
       }
     return this.head
    }

    getLast(){
        let current = this.head;
      while(current.next){
        current = current.next
        }
      return current
    }

    getAt(index){
      if(this.size() - 1 < index){
        return null
      }
        let current = this.head;
        let previous
     for(let i = 0; i <= index; i++){
         previous = current
         current = current.next ? current.next : current
        }
      return previous
    }

    removeFirst(){
        if(!this.head){
            return null
          }
       this.head = this.head.next
    }


  removeLast(){
    if(this.size() === 1 || this.size() === 0){
      this.head = null
      return 
    }
        let current = this.head;
        let previous;
        while(current.next){
        previous = current
        current = current.next
        }
        previous.next = null
      return current
    }

    removeAt(index){
      let current = this.head
      let previous;
      let round = 0
      if(index === 0){
       return this.removeFirst()
      }
      if(this.size() - 1 < index){
        return null
      }
      while(round !== index){
        previous = current;
        current = current.next ? current.next : null;
        round++
        }
       previous.next = current.next ? current.next : null
      // return{ data: current.data,
      //         next: current.next ? current.next.data : null
      // }
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