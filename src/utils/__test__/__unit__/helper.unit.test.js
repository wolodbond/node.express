const adds = require("../../helper");

test("unit:: adds 1 + 2 to equal 3", () => {
	expect(adds(1, 2)).toBe(3);
});
