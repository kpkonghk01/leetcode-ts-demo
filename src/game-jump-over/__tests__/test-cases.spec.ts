import { isEnd, printSol } from "../sol";

describe("missingNumber", () => {
  test.each([["111101111111111", 0]])(
    "missingNumber(%p) should be %p",
    (state, expected) => {
      const lastState = printSol(state);

      expect(isEnd(lastState)).toBe(true);
    }
  );
});
