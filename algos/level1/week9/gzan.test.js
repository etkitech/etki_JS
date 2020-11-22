const killerShort = require('./gzan.index.js').killerShort;
const killerLong = require('./gzan.index.js').killerLong;

describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof killerShort).toEqual('function');
    expect(typeof killerLong).toEqual('function');
  });
});

describe('Logic', function () {
  it('should find the correct killer', () => {
    expect(killerShort({ 'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle'] }, ['Lucas', 'Bill'])).toEqual('James');
    expect(killerShort({ 'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': [] }, ['Ben'])).toEqual('Megan');
    expect(killerShort({ 'Metin': ['Uwe', 'Khodor', 'Jale'], 'Natalie': ['Cem', 'Rafal', 'Kevin', 'Jale'], 'Agata': ['Jale'], 'Mehmet': ['Melissa', 'Lena'] }, ['Rafal', 'Jale', 'Cem'])).toEqual('Natalie');
  });
});

describe('Logic', function () {
  it('should find the killer', () => {
    expect(killerLong({ 'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle'] }, ['Lucas', 'Bill'])).toEqual('James');
    expect(killerLong({ 'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': [] }, ['Ben'])).toEqual('Megan');
    expect(killerLong({ 'Metin': ['Uwe', 'Khodor', 'Jale'], 'Natalie': ['Cem', 'Rafal', 'Kevin', 'Jale'], 'Agata': ['Jale'], 'Mehmet': ['Melissa', 'Lena'] }, ['Rafal', 'Jale', 'Cem'])).toEqual('Natalie');
  });
});