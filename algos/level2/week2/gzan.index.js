function busTimer(time) {
  let [hours, minutes] = time.split(':').map(Number)
  let minuteDiff = 15 - minutes % 15
  if (hours < 6) {
    if (hours === 5 && minutes > 55) {
      return minuteDiff + 15 - 5
    }
    return (6 - hours) * 60 - minutes - 5
  }
  if (hours === 23 && minutes > 55) {
    return 6 * 60 + minuteDiff - 5
  }
  if (minuteDiff < 5) minuteDiff += 15
  return minuteDiff - 5
}

module.exports = busTimer 
