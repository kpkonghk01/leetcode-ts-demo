// timeout

function shortestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let lastOddIdx = 0;
  let lastEvenIdx = -1;
  let t = s;
  let mid = s.length / 2;

  for (let i = 0; i < mid; i++) {
    let oddP = true;
    let evenP = true;

    for (let j = 0; j <= i; j++) {
      // odd
      if (j > 0 && s[i + j] !== s[i - j]) {
        oddP = false;
      }

      // even
      if (s[i - j] !== s[i + j + 1]) {
        evenP = false;
      }

      if (!(oddP || evenP)) {
        break;
      }
    }

    if (oddP) {
      lastOddIdx = i;
    }

    if (evenP) {
      lastEvenIdx = i;
    }
  }

  for (
    let i =
      lastEvenIdx >= lastOddIdx ? (lastEvenIdx + 1) * 2 : lastOddIdx * 2 + 1;
    i < s.length;
    i++
  ) {
    t = s[i] + t;
  }

  return t;
}

export { shortestPalindrome };
