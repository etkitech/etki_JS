const get_score = (arr = [4, 2, 2, 3, 3, 4, 2]) => {
	score = 0
	level = 0
	lineCounter = 0
	basePoints = [40, 100, 300, 1200]

	for (let line of arr) {
		score += basePoints[line - 1] * (level + 1)
		lineCounter += line
		if (lineCounter >= 10) {
			lineCounter -= 10
			level++
		}
	}
	return score
}
get_score()

module.exports = { get_score }
