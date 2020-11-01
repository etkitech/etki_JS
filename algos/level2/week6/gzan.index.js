// more readable
function midtownNav(start, end) {
  const startArr = start.split(' ')
  const endArr = end.split(' ')
  const streets = [parseInt(startArr[4]), parseInt(endArr[4])]
  const avenues = [parseInt(startArr[0]), parseInt(endArr[0])]
  const stCount = Math.abs(streets[0] - streets[1])
  const avCount = Math.abs(avenues[0] - avenues[1])
  const stDirection = streets[0] > streets[1] ? 'south' : 'north'
  const avDirection = avenues[0] > avenues[1] ? 'east' : 'west'
  return `Walk ${stCount} blocks ${stDirection}, and ${avCount} blocks ${avDirection}`
}

module.exports = midtownNav
