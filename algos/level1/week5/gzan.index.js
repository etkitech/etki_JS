function invert(array) {
  //if number is zero return the number as itself if not multiply it with minus one
  return array.map(num => num !== 0 ? num * -1 : num);
}

module.exports = invert; 