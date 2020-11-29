const tourneyLoops = array => {
  let allResults = []
  allResults.push(array)
  let current = array
  //const condition = allResults.length <= (array.length + 1) / 2
  while (true) {
    let result = []
    let length = current.length
    for (let i = 0; i < length; i += 2) {
      if (i === length - 1) result.unshift(current[i])
      else { result.push(Math.max(current[i], current[i + 1])) }
    }
    allResults.push(result)
    if (result.length === 1) return allResults
    current = result
  }
}

const tourneyRecursive = array => {
  if (array.length === 1)
    return [array];

  let next = array.length % 2 ? array.slice(-1) : [];
  for (let i = 0; i < array.length - 1; i += 2)
    next.push(Math.max(array[i], array[i + 1]));

  return [array].concat(tourneyRecursive(next));
}

module.exports = { tourneyLoops, tourneyRecursive }