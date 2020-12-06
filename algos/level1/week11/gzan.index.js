function unluckyDays(year) {
  let count = 0;
  for (let i = 0; i < 12; i++) {
    let date = new Date(year, i, 12);
    if (date.getDay() === 4) count++;
  }
  return count;
}

module.exports = unluckyDays

