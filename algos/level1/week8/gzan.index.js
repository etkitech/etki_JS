function uglifyWord(s) {
  let flag = true;
  let uglified = ''
  for (let char of s) {
    if (isLetter(char)) {
      uglified += flag ? char.toUpperCase() : char.toLowerCase()
      flag = !flag
    } else {
      uglified += char
      flag = true
    }
  }
  return uglified
}

function isLetter(char) {
  return (/[a-zA-Z]/).test(char)
}

console.log(uglifyWord("aaa")) // AaA
console.log(uglifyWord("AAA")) //AaA
console.log(uglifyWord("BbB"))  //BbB
module.exports = { uglifyWord, isLetter }