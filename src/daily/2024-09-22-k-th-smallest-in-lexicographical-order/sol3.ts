// https://leetcode.com/submissions/detail/1398977937/

function findKthNumber(n: number, k: number): number {
  let cur = 1;

  while (k > 1) {
    const skip = countPrefix(cur, n);

    if (skip < k) {
      cur++;
      k -= skip;
    } else {
      cur *= 10;
      k--;
    }
  }

  return cur;
}

function countPrefix(cur: number, n: number): number {
  let count = 0;
  let next = cur + 1;

  while (cur <= n) {
    count += Math.min(n + 1, next) - cur;
    cur *= 10;
    next *= 10;
  }

  return count;
}

export { findKthNumber, countPrefix };
