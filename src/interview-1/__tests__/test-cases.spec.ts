import { earn as earn1 } from "../sol1";
import { earn as earn2 } from "../sol2";

describe("earn", () => {
  test.each([
    [[3, 3, 2, 4, 2, 2], 11],
    [[1, 2, 3, 4, 3, 2, 1], 10],
  ])("earn(%p) should be %p", (input, expected) => {
    expect(earn1(input)).toBe(expected);
    expect(earn2(input)).toBe(expected);
  });
});
