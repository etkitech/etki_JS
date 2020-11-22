//long way
function killerLong(suspectInfo, dead) {
  let suspects = Object.keys(suspectInfo)
  let countDead = dead.length
  let countMatch = 0
  for (let suspect of suspects) {
    if (suspectInfo[suspect].length > 0) {
      for (let name of dead) {
        if (suspectInfo[suspect].indexOf(name) === -1) {
          break
        } else {
          countMatch++
        }
      }
    }
    if (countDead === countMatch) return suspect
  }
}

// short way
function killerShort(suspectInfo, dead) {
  return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
}



module.exports = { killerShort, killerLong } 
