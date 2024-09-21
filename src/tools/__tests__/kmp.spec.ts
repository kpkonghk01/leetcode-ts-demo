import { buildKMPTable } from "../kmp";

describe("buildKMPTable", () => {
  test.each([
    ["a", [0]],
    ["ab", [0, 0]],
    ["abc", [0, 0, 0]],
    ["aa", [0, 1]],
    ["aaa", [0, 1, 2]],
    ["abab", [0, 0, 1, 2]],
    ["ababc", [0, 0, 1, 2, 0]],
    ["ababa", [0, 0, 1, 2, 3]],
    ["abcdabca", [0, 0, 0, 0, 1, 2, 3, 1]],
    ["aabaabaaa", [0, 1, 0, 1, 2, 3, 4, 5, 2]],
  ])('buildKMPTable("%s") should return %j', (input, expected) => {
    expect(buildKMPTable(input)).toEqual(expected);
  });
});
