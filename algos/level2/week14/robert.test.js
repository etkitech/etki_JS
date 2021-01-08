const Queue = require('./robert.index')

    describe('Test that class is imported correctly',()=>{
        test('Queue should be defined', () => {
            expect(Queue).toBeDefined();
        });
    })
        const emptyQueue =  new Queue();
        const queueWithOneValue = new Queue([1]);
        const queueWithSeveralTypes =  new Queue([2,3,'etki', true, 5, '2021']);

    describe('The class construction is working well', () =>{
       test('that the queues initial values are as they are expected to be', () => {
        expect(emptyQueue.values).toEqual(expect.arrayContaining([]))
        expect(queueWithOneValue.values).toEqual(expect.arrayContaining([1]))
        expect(queueWithSeveralTypes.values).toEqual(expect.arrayContaining([2,3,'etki', true, 5, '2021']))
       })
    })
    
   
    describe('The add method', () =>{
       emptyQueue.add('move')
       queueWithOneValue.add(2)
       queueWithSeveralTypes.add(1)
     test('that values can be added to the queues', () => {
     expect(emptyQueue.values).toEqual(expect.arrayContaining(['move']))
     expect(queueWithOneValue.values).toEqual(expect.arrayContaining([2,1]))
     expect(queueWithSeveralTypes.values).toEqual(expect.arrayContaining([1,2,3,'etki', true, 5, '2021']))
     })
    })

    describe('The remove method', () =>{  
       test('that values can be removed from end of the queue', () => {
        emptyQueue.remove()
        queueWithOneValue.remove()
        queueWithSeveralTypes.remove()
       expect(emptyQueue.values).toEqual(expect.arrayContaining([]))
       expect(queueWithOneValue.values).toEqual(expect.arrayContaining([2]))
       expect(queueWithSeveralTypes.values).toEqual(expect.arrayContaining([1,2,3,'etki', true, 5,]))
       })
    })

    describe('The Oldest method', () =>{  
      test('that the method returns the first value in the queue', () => {
      expect(emptyQueue.oldest()).toBe(undefined)
      expect(queueWithOneValue.oldest()).toBe(2)
      expect(queueWithSeveralTypes.oldest()).toBe(5)
      })
    })

    describe('The Newest method', () =>{  
       test('that the method returns the last value in the queue', () => {
       expect(emptyQueue.newest()).toBe(undefined)
       expect(queueWithOneValue.newest()).toBe(2)
       expect(queueWithSeveralTypes.newest()).toBe(1)
      })
    })

    describe('The Size method', () =>{  
       test('that the method returns the size of the queue', () => {
       expect(emptyQueue.size()).toBe(0)
       expect(queueWithOneValue.size()).toBe(1)
       expect(queueWithSeveralTypes.size()).toBe(6)
      })
    })