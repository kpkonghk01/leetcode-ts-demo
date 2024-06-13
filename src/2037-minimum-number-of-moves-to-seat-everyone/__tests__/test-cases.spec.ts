import { minMovesToSeat } from "../sol1";

describe("minMovesToSeat", () => {
  test.each<[[number[], number[]], number]>([
    [
      [
        [3, 1, 5],
        [2, 7, 4],
      ],
      4,
    ],
    [
      [
        [4, 1, 5, 9],
        [1, 3, 2, 6],
      ],
      7,
    ],
    [
      [
        [2, 2, 6, 6],
        [1, 3, 2, 6],
      ],
      4,
    ],
  ])("inputs(%j) should be %p", (input, expected) => {
    expect(minMovesToSeat(...input)).toBe(expected);
  });
});
