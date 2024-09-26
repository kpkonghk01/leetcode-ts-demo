// https://leetcode.com/problems/roman-to-integer/?envType=study-plan-v2&envId=top-interview-150
// https://leetcode.com/submissions/detail/1402496590/

const table: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const pattern: Record<string, Record<string, number>> = {
  I: {
    V: 4,
    X: 9,
  },
  X: {
    L: 40,
    C: 90,
  },
  C: {
    D: 500,
    M: 1000,
  },
};

function romanToInt(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let specialCase = pattern[s[i]!]?.[s[i + 1]!];
    if (specialCase) {
      result += specialCase;
      i++;
      continue;
    }

    result += table[s[i]!]!;
  }

  return result;
}
