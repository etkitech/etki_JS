const Queue = require('./robert.index')

    describe('Test that class is imported/exported correctly',()=>{
        test('Queue should be defined', () => {
            expect(Queue).toBeDefined();
        });
    })
        const queue =  new Queue();

    describe('The class construction is working well', () =>{
       test('that the queues initial values are as they are expected to be', () => {
        expect(queue.values).toEqual(expect.arrayContaining([]))
       })
    })
    
   
    describe('The add method', () =>{
       queue.add(1)
       queue.add(2)
     test('that values can be added to the queues', () => {
     expect(queue.values).toEqual(expect.arrayContaining([2,1]))
     })
    })

    describe('The peek method', () =>{  
       test('that the method peek returns the first value of the queue', () => {
      const value = queue.peek()
       expect(value).toEqual(1)
       })
    })

    describe('The remove method', () =>{  
      test('that the method removes the first value in the queue', () => {
        const value = queue.remove()
      expect(value).toBe(1)
      expect(queue.values).toEqual(expect.arrayContaining([2]))
      })
    })

    describe('Another remove method', () =>{  
        test('that the method removes the first value in the queue', () => {
          const value = queue.remove()
        expect(value).toBe(2)
        expect(queue.values).toEqual(expect.arrayContaining([]))
        })
      })
