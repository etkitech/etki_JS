const encryptThis = require('./gzan.index.js')


test('encryptThis', () => {
  expect(encryptThis).toBeDefined();
});

test('gives the correct ascii code for the first letter', () => {
  expect(encryptThis('A')).toEqual('65');
});

test('returns empty when string is empty', () => {
  expect(encryptThis(' ')).toEqual(' ');
});

test('gives the correct code for one word', () => {
  expect(encryptThis('ABC')).toEqual('65CB');
});

test('gives correct result for a whole sentence', () => {
  expect(encryptThis('A wise old owl lived in an oak')).toEqual('65 119esi 111dl 111lw 108dvei 105n 97n 111ka');
});

test('ives correct result for a whole sentence 2', () => {
  expect(encryptThis('The less he spoke the more he heard')).toEqual('84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare');
});

test('gives correct result for a whole sentence 3', () => {
  expect(encryptThis('Why can we not all be like that wise old bird')).toEqual('87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri');
});

test('ives correct result for a whole sentence 4', () => {
  expect(encryptThis('Thank you Piotr for all your help')).toEqual('84kanh 121uo 80roti 102ro 97ll 121ruo 104ple');
});