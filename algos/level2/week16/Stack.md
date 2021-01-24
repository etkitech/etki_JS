### THE STACK

#### About the stack: 
- a data structure based on FILO Principle (**F**irst **I**n **L**ast **O**ut)
- **pushing:** adding a new record to the the Stack (first index)
- **popping:** removing the top record in the Stack(last added)

#### Instructions: 

Create a stack data structure (class Stack)

- The Stack should be a class with methods 'push', 'pop' and 'peek'
- Push method should add a record to the stack
- Pop method should remove the "top" record in the stack (top record = the last added record)
- Peek method should return the "top" record without popping it
- Adding an element to the stack should store it until it is removed

#### Example 

````
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s) //returns [1,2,3]
s.pop(); // returns 3
console.log(s) //returns [1,2]
s.peek(); // returns 3
console.log(s) //returns [1,2]
````

#### Here is the basic structure of the class for you to fill in:  
````
class Stack {
  constructor() {
   
  }

  push(record) {
    
  }

  pop() {
  
  }

  peek() {
  
  }

}
````

#### Source: The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy 
