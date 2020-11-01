function generateRange(min, max, step) {
  const arr = []
  let i = min;
  while (i <= max) {
    arr.push(i);
    i = i + step;
  }
  return arr;
}

module.exports = generateRange