const songDecoder = require('./gzan.index.js')


describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof songDecoder).toEqual('function');
  });
});

describe('Logic', function () {
  it('should return a str without "WUB"s amnd multiple/trailing/heading spaces', () => {
    expect(songDecoder("WUBAWUBBWUBC")).toEqual("A B C");
    expect(songDecoder("WUBAWUBBWUBCWUB")).toEqual("A B C");
    expect(songDecoder("AWUBWUBWUBBWUBWUBWUBC")).toEqual("A B C");
    expect(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")).toEqual("WE ARE THE CHAMPIONS MY FRIEND");
    expect(songDecoder("WUBWUBWUBANOTHERWUBONEWUBWUBBITESWUBTHEWUBWUBWUBDUST")).toEqual("ANOTHER ONE BITES THE DUST");
    expect(songDecoder("IWUBWUBWANTWUBTOWUBWUBWUBWUBBREAKWUBFREEWUBWUBWUB")).toEqual("I WANT TO BREAK FREE");
  });
});