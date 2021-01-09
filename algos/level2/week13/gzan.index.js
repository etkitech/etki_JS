function customChristmasTree(chars, n) {
  let tree = ''
  let row = 0;
  let leave = 1;
  let char = 0;
  const length = chars.length
  //the crown
  while (row < n) {
    for (let i = 0; i < (n - leave); i++) {
      tree += ' '
    }
    for (let j = 0; j < leave; j++) {
      tree += chars[char]
      char++
      if (char === length) char = 0
      if (j !== leave - 1) tree += ' '
    }
    tree += '\n'
    leave++
    row++
    if (leave === n + 1) break;
  }
  //the trunk
  const nOfTrunks = Math.floor(n / 3)
  let rowTrunk = 0;
  while (rowTrunk < nOfTrunks) {
    for (let k = 0; k < n - 1; k++) {
      tree += ' '

    }
    tree += rowTrunk < nOfTrunks - 1 ? '|\n' : '|'
    rowTrunk++
  }
  return tree
}

module.exports = customChristmasTree;