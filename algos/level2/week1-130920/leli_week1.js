/*
algoweek etki 
leli
*/

const potatoes = (p0, w0, p1) => {
  // percent in decimal numbers
  const waterPercent0 = p0 / 100
  const waterPercent1 = p1 / 100
  const dirtPercent0 = 1 - waterPercent0
  const dirtPercent1 = 1 - waterPercent1

  // weight of the water and dirt seperatly for beginning
  const waterWeight0 = w0 * waterPercent0
  const dirtWeight = w0 * dirtPercent0

  // the dirtweight stays the same since we only evaporate water
  // at the end the same amount of dirt makes up a larger percentage of the weight
  const weight1 = w0 * dirtPercent0 / dirtPercent1
  
  return weight1
}

const potatoesWithoutComments = (p0, w0, p1) => Math.round(w0 * (100 - p0) / (100 - p1))
module.exports = potatoes