const { Node, List } = require('./robert.index')

    describe('Test that classes are imported/exported correctly',()=>{
        test('Node and List classes should be defined', () => {
            expect(Node).toBeDefined();
            expect(List).toBeDefined();
        });
    })
        

    describe('The node class behaves as the question specifies', () =>{
        const node =  new Node('element');
        const node2 =  new Node('element', node);
       test('that a new node can be created when only the data parameter is passed', () => {
        expect(node.data).toEqual("element")
        expect(node.next).toEqual(null)
       })
        test('that a new node can be created when the data and next parameter are passed', () => {
            expect(node2.data).toEqual("element")
            expect(node2.next).toEqual(node)
       })
    })
    
   
    describe('The different Insert methods', () =>{
     test('that values can be added to the front of the list', () => {
        const list1 = new List()
        list1.insertFirst(4)
     expect(list1.head.data).toBe(4)
     })
      
     test('that values can be added to the end of the list', () => {
        const list2 = new List()
        list2.insertFirst(4)
        list2.insertLast('linked lists are cool')
        expect(list2.head.data).toBe(4)
        expect(list2.getLast()).toBe('linked lists are cool')
        })
       
    test('that values can be inserted into any index  of the list', () => {
        const list3 = new List()
        list3.insertFirst(4)
        list3.insertLast('linked lists are cool')
        list3.insertAt('5', 1)
        expect(list3.head.data).toBe(4)
        expect(list3.getAt(1)).toBe('5')
        expect(list3.getLast()).toBe('linked lists are cool')
        })
    })

    describe('The different remove methods', () =>{  
        const list4 = new List()
        list4.insertFirst(6)
        list4.insertFirst(5)
        list4.insertFirst(4)
        list4.insertFirst(3)
        list4.insertFirst(2)
        list4.insertFirst(1)
       test('that values can be removed from the start of the list', () => {
       const value = list4.removeFirst()
       expect(value).toEqual(1)
       expect(list4.getFirst()).toBe(2)
       expect(list4.size()).toBe(5)
       })
       test('that values can be removed from the end of the list', () => {
        const value = list4.removeLast()
        expect(value).toEqual(6)
        expect(list4.getFirst()).toBe(2)
        expect(list4.size()).toBe(4)
       })
       test('that values can be removed from any index the list', () => {
        const value = list4.removeAt(2)
        expect(value).toEqual(4)
        expect(list4.getFirst()).toBe(2)
        expect(list4.size()).toBe(3)
       })
    })

    const list5 = new List()
        list5.insertFirst('blob')
        list5.insertFirst('array')
        list5.insertFirst('string')
        list5.insertFirst('integer')
        list5.insertFirst('double')
        list5.insertFirst('bigint')
    describe('The different get methods', () =>{  
        
      test('that values can be gotten from the start of the list', () => {
        const value = list5.getFirst()
        expect(value).toBe('bigint')
      })
      test('that values can be gotten from the end of the list', () => {
        const value = list5.getLast()
        expect(value).toBe('blob')
      })
      test('that values can be gotten from any index in the list', () => {
        const value = list5.getAt(3)
        expect(value).toBe('string')
      })
    })

    describe('The size method', () =>{  
        test('that the method get the size of the list', () => {
          const value = list5.size()
        expect(value).toBe(6)
        })
      })

      describe('The clear method', () =>{  
        test('that the method returns an empty list', () => {
          const value = list5.clear()
          expect(value).toBe('cleared!')
          expect(list5.head).toBe(null)
        })
      })