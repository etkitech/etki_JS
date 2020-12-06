function partsSums(ls) {
  let sum = ls.reduce((a, b) => a + b, 0)
  console.log("sum", sum)
  let sums = []
  sums.push(sum)
  let length = ls.length
  for (let i = 0; i < length; i++) {
    sum = sum - ls[i]
    sums.push(sum)
    console.log("sum", sum)
  }
  return sums
}

module.exports = partsSums
