function potatoes(waterP0, totalWeight0, waterP1) {
    // P0 for initial percentage, P1 for final percentage
    const dryMatterP0 = 100 - waterP0;
    const dryMatterP1 = 100 - waterP1;
    const totalWeight1 = totalWeight0 * dryMatterP0 / dryMatterP1;
    return Math.trunc(totalWeight1);
}

module.exports = potatoes;
