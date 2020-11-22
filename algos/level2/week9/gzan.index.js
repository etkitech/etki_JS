function loneliest(str) {
  let length = str.length
  let count = 0
  let dict = {}
  let newLetter = ''
  for (let i = 0; i < length; i++) {
    if (str[i] !== ' ') {
      //check if the spaces so far are not leading space, otherwise ignore
      if (newLetter !== '') {
        //count is the right count of the previous char
        //add the count to the value of the char 
        //if it is the first char, it wouldn' have already been added
        //in this case assign the key directly to the count
        dict[newLetter] = dict[newLetter] + count || count
      }
      newLetter = str[i]
      //the count is the left count of the next letter
      //assign it as its current value  
      dict[newLetter] = count
      count = 0
    } else if (newLetter !== '') {
      //if next char is a space but not a leading one, increase the count by one
      count++
    }
  }
  const maxSpace = Math.max(...Object.values(dict))
  return Object.keys(dict).filter(key => dict[key] === maxSpace);
}

module.exports = loneliest