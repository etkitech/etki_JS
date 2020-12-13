function duplicateSandwich(a) {
  const length = a.length
  //save every item's index in itemMap
  let itemMap = {}
  for (let i = 0; i < length; i++) {
    //if this item already exists
    //the value of it will be the first index of the duplciate item
    // and i will be the last index
    //else save index of the item as its value
    if (a[i] in itemMap) {
      return a.slice(itemMap[a[i]] + 1, i, a)
    } else {
      itemMap[a[i]] = i
    }
  }
}


module.exports = duplicateSandwich

