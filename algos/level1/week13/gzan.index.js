function solve(stones) {
  let count = 0
  const length = stones.length
  for (let i = 1; i <= length; i++) {
    if (stones[i] === stones[i - 1]) count++
  }
  return count
}

const solveWithRegEx = stones => stones.length - stones.replace(/(\w)(?=\1)/g, ``).length

module.exports = { solve, solveWithRegEx };