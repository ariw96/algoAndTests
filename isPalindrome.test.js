const isPalindrome = require("./isPalindrome");

test("Example 1", () => {
    expect(isPalindrome(121)).toBe(true);
});

test("Example 2", () => {
    expect(isPalindrome(-121)).toBe(false);
})