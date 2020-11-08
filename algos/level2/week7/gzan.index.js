function convert(s) {
  if (s === '') return 0
  const lowerS = s.toLowerCase()
  const letterMap = {}
  let nextDigit = 1;
  let result = ''
  for (let letter of lowerS) {
    if (letterMap[letter] !== undefined) {
      result += letterMap[letter]
    }
    else {
      letterMap[letter] = nextDigit
      result += nextDigit
      if (nextDigit !== 1 && nextDigit !== 0) nextDigit++
      else if (nextDigit === 1) nextDigit = 0
      else if (nextDigit === 0) nextDigit = 2
    }

  }
  return parseInt(result)

}
module.exports = convert