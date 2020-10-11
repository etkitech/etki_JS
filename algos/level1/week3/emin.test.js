const arr = require("./emin.index.js").arr

test("arr function exists", () => {
	expect(arr).toBeDefined()
})

test("return type is array", () => {
	expect(Array.isArray(arr())).toEqual(true)
})

describe("array elements", function () {
	test("should get correct answer", function () {
		expect(arr(6)).toEqual([0, 1, 2, 3, 4, 5])
		expect(arr(1)).toEqual([0])
		expect(arr(0)).toEqual([])
	})
})

describe("array length", function () {
	test("should get correct answer", function () {
		expect(arr(6).length).toEqual(6)
		expect(arr(1).length).toEqual(1)
		expect(arr(0).length).toEqual(0)
	})
})
