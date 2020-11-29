const findShortest = require('./gzan.index.js').findShortest;
const findShortestWordLength = require('./gzan.index.js').findShortestWordLength;

describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof findShortest).toEqual('function');
    expect(typeof findShortestWordLength).toEqual('function');
  });
});

describe('Logic', function () {
  it('should find the length of shortest word', () => {
    expect(findShortest("What is now proved was once only imagined")).toEqual(2);
    expect(findShortest("We are all in the gutter but some of us are looking at the stars")).toEqual(2);
    expect(findShortest("Lorem ipsum dolor consectetur adipiscing finibus metus varius")).toEqual(5);
  });
});

describe('Logic', function () {
  it('should find the length of shortest word', () => {
    expect(findShortestWordLength("Neque porro quisquam dolorem ipsum quia consectetur adipisci")).toEqual(4);
    expect(findShortestWordLength("consectetur adipiscing Quisque lacinia molestie gravida eleifend mauris libero dapibussagittis sagittis Maecenas")).toEqual(6);
    expect(findShortestWordLength("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Nemo enim ipsam voluptatem r")).toEqual(1);
  });
});