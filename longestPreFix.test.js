const sum = require("./sum")
test("properly adds two numbers", () => {
    expect(sum(2, 1)).toBe(3);
    expect(sum(2, 2)).toBe(3);
});
test("properly adds two numbers", () => {
    expect(sum(2, 2)).toBe(4);
});