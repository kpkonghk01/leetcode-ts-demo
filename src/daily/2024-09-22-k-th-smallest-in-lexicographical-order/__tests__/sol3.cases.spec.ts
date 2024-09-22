import { findKthNumber, countPrefix } from "../sol3";

describe("findKthNumber", () => {
  test.each<[[number, number], number]>([
    [[13, 2], 10],
    [[10, 3], 2],
    [[2, 2], 2],
    [[100, 10], 17],
    [[100, 90], 9],
    [[304089173, 87099045], 178389137],
  ])("input(%s) should be %p", (input, expected) => {
    expect(findKthNumber(...input)).toBe(expected);
  });

  test.each<[[number, number], number]>([
    [[1, 137], 49],
    [[13, 137], 9],
    [[17, 137], 1],
    [[130, 137], 1],
    [[2, 137], 11],
    [[1, 100], 12],
  ])(`countPrefix`, (input, expected) => {
    expect(countPrefix(...input)).toBe(expected);
  });
});
