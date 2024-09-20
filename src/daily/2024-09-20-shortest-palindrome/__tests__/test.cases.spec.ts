import { shortestPalindrome } from "../sol2";

describe("shortestPalindrome", () => {
  test.each<[string, string]>([
    [
      "brrwjzhmymxnzjkoidscuqkofkfzmeewstgcgocjkujxdv",
      "vdxjukjcogcgtsweemzfkfokqucsdiokjznxmymhzjwrrbrrwjzhmymxnzjkoidscuqkofkfzmeewstgcgocjkujxdv",
    ],
    ["abb", "bbabb"],
    ["aaaaab", "baaaaab"],
    ["bbbb", "bbbb"],
    ["bbb", "bbb"],
    ["abab", "babab"],
    ["abba", "abba"],
    ["aacecaaa", "aaacecaaa"],
  ])("input(%s) should be %p", (input, expected) => {
    expect(shortestPalindrome(input)).toBe(expected);
  });
});
