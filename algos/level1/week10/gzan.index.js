//solution 1
function findShortestWordLength(str) {
  const words = str.split(' ')
  let min = 0
  let length = 0
  for (let word of words) {
    length = word.length
    if (length < min || min === 0) min = length
  }
  return min
}

//solution 2

function findShortest(str) {
  return Math.min.apply(null, str.split(' ').map(word => word.length));
}

module.exports = { findShortestWordLength, findShortest }