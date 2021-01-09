class Queue {
    constructor(arrayOfValues) {
     this.values = arrayOfValues ? arrayOfValues : []
    }
    add(value) {
        return this.values = [value, ...this.values]
    } 
    remove() {
    const valueToBeDeleted = this.oldest()
        this.values = this.values.slice(0, this.values.length - 1);
        return valueToBeDeleted
    } 
    oldest(){
     return this.values[this.values.length - 1]
    }
    newest(){
      return this.values[0]
    }
    size(){
        return this.values.length
    }
  }
module.exports = Queue;