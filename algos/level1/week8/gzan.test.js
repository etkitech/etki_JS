const uglifyWord = require('./gzan.index.js').uglifyWord;
const isLetter = require('./gzan.index.js').isLetter;

describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof uglifyWord).toEqual('function');
    expect(typeof isLetter).toEqual('function');
  });
});


describe('Logic', function () {
  it('should find the correct result', () => {
    expect(isLetter('j')).toBeTruthy();
    expect(isLetter('J')).toBeTruthy();
    expect(isLetter('&')).toBeFalsy();
    expect(isLetter('ü')).toBeFalsy();
    expect(isLetter('*')).toBeFalsy();
    expect(isLetter('3')).toBeFalsy();
    expect(isLetter('X')).toBeTruthy();
    expect(isLetter('b')).toBeTruthy();
    expect(isLetter('_')).toBeFalsy();
    expect(isLetter('«')).toBeFalsy();
    expect(isLetter('@')).toBeFalsy();
    expect(isLetter('T')).toBeTruthy();
    expect(isLetter('ß')).toBeFalsy();
    expect(isLetter('0')).toBeFalsy();
    expect(isLetter('O')).toBeTruthy();
    expect(isLetter('+')).toBeFalsy();
    expect(isLetter('>')).toBeFalsy();
    expect(isLetter('w')).toBeTruthy();
    expect(isLetter('.')).toBeFalsy();
    expect(isLetter('Z')).toBeTruthy();
  });
});

describe('Logic', function () {
  it('should find the correct result', () => {
    expect(uglifyWord("aaa")).toEqual("AaA")
    expect(uglifyWord("AAA")).toEqual("AaA")
    expect(uglifyWord("BbB")).toEqual("BbB")
    expect(uglifyWord("aaa-bbb-ccc")).toEqual("AaA-BbB-CcC")
    expect(uglifyWord("AaA-BbB-CcC")).toEqual("AaA-BbB-CcC")
    expect(uglifyWord("eeee-ffff-gggg")).toEqual("EeEe-FfFf-GgGg")
    expect(uglifyWord("EeEe-FfFf-GgGg")).toEqual("EeEe-FfFf-GgGg")
    expect(uglifyWord("qwe123asdf456zxc")).toEqual("QwE123AsDf456ZxC")
    expect(uglifyWord("Hello World")).toEqual("HeLlO WoRlD")
  });
});