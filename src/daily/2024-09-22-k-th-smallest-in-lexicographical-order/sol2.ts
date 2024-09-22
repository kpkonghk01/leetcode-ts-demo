// still TLE

function findKthNumber(n: number, k: number): number {
  let skipped = 0;
  let cur = 1;

  while (skipped < k) {
    if (cur > 9) break;

    try {
      const count = countPrefix(cur, n, k, skipped);

      skipped += count;
      cur++;
    } catch (num: any) {
      return num;
    }
  }

  return cur;
}

function countPrefix(
  prefix: number,
  n: number,
  k: number,
  skipped: number
): number {
  let cur = prefix * 10;
  let count = 1;
  skipped++;

  if (skipped >= k) {
    throw prefix;
  }

  if (cur > n) {
    return 1;
  }

  if (cur * 10 > n) {
    count += Math.min(n + 1 - cur, 10);
    if (skipped + count > k) {
      throw cur + k - skipped - 1;
    }

    return count;
  }

  for (let i = 0; i < 10; i++) {
    if (cur + i > n) break;

    let temp = countPrefix(cur + i, n, k, skipped);
    count += temp;
    skipped += temp;
  }

  return count;
}

export { findKthNumber, countPrefix };
