const calculateNumberOfLiters = (time = 0) => {
  const totalLiters = time * 0.5;
  const roundedLiters = Math.floor(totalLiters);

  return roundedLiters;
}

module.exports = calculateNumberOfLiters;