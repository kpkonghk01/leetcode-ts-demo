import { missingNumber } from "../sol1";

describe("missingNumber", () => {
  test.each([
    [[3, 0, 1], 2],
    [[0, 1], 2],
    [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8],
  ])("missingNumber(%p) should be %p", (input, expected) => {
    expect(missingNumber(input)).toBe(expected);
  });
});
