function getScore(arr) {
  let score = 0;
  let level = 0;
  let totalLines = 0;
  let points = { "0": 0, "1": 40, "2": 100, "3": 300, "4": 1200 }

  for (let lines of arr) {
    score += points[lines] * (level + 1)
    totalLines += lines
    if (totalLines >= 10) {
      level++
      totalLines -= 10
    }
  }
  return score;
}

module.exports = getScore;