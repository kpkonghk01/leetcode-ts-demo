import { maxProfit } from "../sol1";

describe("maxProfit", () => {
  test.each([
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
  ])("maxProfit(%p) should be %p", (input, expected) => {
    expect(maxProfit(input)).toBe(expected);
  });
});
