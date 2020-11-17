// etki code camp algo week

// bus timer 

const calcTimeInMinutes = (h, min) => h * 60 + min

const intParse = (str) => parseInt(str, 10)


const busTimer = (time) => {
  // split the input 
  const [hStr, minStr] = time.split(":")
  // transform into int
  const h = intParse(hStr)
  const min = intParse(minStr)
  // checking the input
  if (h > 23 || h < 0 || min < 0 || min > 59) {
    return "You have to give a valid time"
  }
  // calculate the input in minutes plus traveling time 
  let timeInMinutes = calcTimeInMinutes(h, min) + 5
  // change if its after midnight
  if (timeInMinutes > 1440){
    timeInMinutes %= 1440
  }
  console.log(timeInMinutes)
  // if before the first bus
  if (timeInMinutes <= calcTimeInMinutes(6, 0)){
    return calcTimeInMinutes(6,0) - timeInMinutes
  }
  else {
    // if it is between 6:00 and 00:00 than the buses come every 15 min from ne full hour and modular is the 
    // best option to check for that. the second modular ist to get 0' instead of 15' when you have to leave now
    return (15 - timeInMinutes % 15)%15
  }
}

module.exports = busTimer