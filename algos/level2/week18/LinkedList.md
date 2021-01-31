### LINKED LISTS 

#### About the linked lists: 
- a linked list is an ordered collection of data. The collection contains a number of different nodes. 
Each node contains some amount of data along with a reference to the next node. The order is always maintained unless we change it.


#### Instructions: 

Implement classes Node and Linked Lists

- **Create a class instance to represent a node.**  The node should have two properties, 'data' and 'next'.  Accept both of these as arguments to the 'Node' constructor, then assign them to the instance as properties 'data' and 'next'. If 'next' is not provided to the constructor, then default its value to be 'null'.

-  **Create a class to represent a linked list.**  When created, a linked list should have *no* head node associated with it. The LinkedList instance will have one property, 'head', which is a reference to the first node of the linked list.  By default 'head' should be 'null'.

- add following methods to the linked list: insertFirst, insertLast, insertAt, getFirst, getLast, getAt, removeFirst, removeLast, removeAt, size, clear.
**insertFirst** creates a new node from argument 'data' and assigns the resultign node to the 'head' property. Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.
**insertLast** inserts a new node with provided data at the end of the chain
**insertAt** inserts a new node at provided index
**getFirst** returns the first node of the linked list
**getLast** returns the last node of the linked list
**getAt** returns the node at the provided index
**removeFirst** removes only the first node of the linked list. The list's head should now be the second element. 
**removeLast** removes only the last node of the chain.
**removeAt** removes node at the provided index.
**size** returns the number of nodes in the linked list.
**clear** empties the linked list of any nodes.

#### Example 

````
const n = new Node('There');
n.data // 'Hi'
n.next // null
const n2 = new Node('Hi', n);
n.next // returns n
````

````
const list = new LinkedList();
list.head // null

const list = new LinkedList();
list.insertFirst('a'); // List has one node
list.insertFirst('b')
list.insertFirst('c')
list.size(); // returns 3
list.removeFirst() //removes 'c'
list.removeLast() //removes 'a'
list.size() // returns 1
list.insertFirst('b')
list.insertLast('c')
list.getLast //returns 'c'
list.size() // returns 3
list.clear();
list.size(); // returns 0
````


#### Source: The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy 