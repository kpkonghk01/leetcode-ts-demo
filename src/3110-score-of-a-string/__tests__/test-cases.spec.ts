import { scoreOfString } from "../sol1";

describe("scoreOfString", () => {
  test.each<[string, number]>([
    ["hello", 13],
    ["zaz", 50],
  ])("input(%s) should be %p", (input, expected) => {
    expect(scoreOfString(input)).toBe(expected);
  });
});
