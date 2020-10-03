function busTimer(time) {
  const hour = parseInt(time[0] + time[1])
  console.log("hour: " + hour)
  const minutes = parseInt(time[3] + time[4])
  console.log("minutes: " + minutes)
  const arr = [15, 30, 45, 60]
  let hourDiff = 0;
  let minuteDiff = 15 - minutes % 15;
  console.log("minuteDiff: " + minuteDiff)
  if (minuteDiff == 0) minuteDiff += 15
  if (hour >= 0 && hour < 6) {
    hourDiff = 6 - hour
    minuteDiff = 60 - minutes
  }
  console.log("hourDiff: " + hourDiff)
  return hourDiff * 60 + minuteDiff - 5
}