const songDecoder = require('./robert.index.js')

describe('To ensure correct behaviour of the \"songDecoder\" function',()=>{
    test('Function should be defined', () => {
        expect(songDecoder).toBeDefined();
    });
    test('that correct name is returned', () => {
        expect(songDecoder('WUBWUBIWUBBELIEVEWUBWUBIWUBCANWUBWUBFLY')).toEqual('I BELIEVE I CAN FLY')
        expect(songDecoder('WUBYOU\'REWUBWUBNEVERWUBFULLYWUBDRESSEDWUBWITHOUTWUBWUBWUBAWUBSMILE')).toEqual('YOU\'RE NEVER FULLY DRESSED WITHOUT A SMILE')
        expect(songDecoder('WUBWUBRADIOACTIVE')).toEqual('RADIOACTIVE')
        expect(songDecoder('NO WuB')).toEqual('NO WuB')
        expect(songDecoder('WUB')).toEqual('')
    })
})