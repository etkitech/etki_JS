function getScore(arr) {
  let score = 0;
  let level = 0;
  let totalLines = 0;

  for (let lines of arr) {
    if (lines !== 0) {
      switch (lines) {
        case 1:
          points = 40;
          break;
        case 2:
          points = 100;
          break;
        case 3:
          points = 300;
          break;
        case 4:
          points = 1200;
          break;
      }
      score += points * (level + 1)
      totalLines += lines
      if (totalLines >= 10) {
        level++
        totalLines -= 10
      }
    }
  }
  return score;
}

module.exports = getScore;