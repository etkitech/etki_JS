const get_score = require("./emin.index.js").get_score

test("get_score function exists", () => {
	expect(get_score).toBeDefined()
})

test("return type is number", () => {
	expect(typeof get_score([])).toEqual("number")
})

describe("scores", function () {
	test("should get correct answer", function () {
		expect(get_score([4, 2, 2, 3, 3, 4, 2])).toEqual(4900)
	})
})
