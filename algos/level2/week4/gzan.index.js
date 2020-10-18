function findHack(records) {
  const points = { "A": 30, "B": 20, "C": 10, "D": 5 }
  const highGrades = ["A", "B"]
  let names = [];

  for (let record of records) {
    let name = record[0]
    let total = record[1]
    let scores = record[2]
    if (total >= 200) {
      names.push(name);
      continue;
    }
    let realPoint = 0;
    let award = true;

    for (let score of scores) {
      if (points[score]) realPoint += points[score];
      if (!highGrades.includes(score)) award = false;
    }

    if (award && scores.length >= 5) realPoint += 20;
    if (realPoint !== total) names.push(name);

  }
  return names;
}

module.exports = findHack;