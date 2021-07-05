const arr = (count = 0) => {
	return new Array(count).fill(0).map((_, index) => index)
}

module.exports = { arr }
