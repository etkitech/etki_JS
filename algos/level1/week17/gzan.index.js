function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    //if the next char already exits in charMap then increase its value by 1
    //if not, then assign 1 as its value
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar

//Source of the above solutions : The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy