// https://leetcode.com/problems/k-th-smallest-in-lexicographical-order

// timeout

function findKthNumber(n: number, k: number): number {
  function next(prev: number) {
    let temp = prev * 10;
    if (temp <= n) return temp;

    temp = prev + 1;
    if (temp <= n && temp % 10 !== 0) return temp;

    temp = Math.floor(prev / 10) + 1;

    while (temp % 10 === 0) {
      temp /= 10;
    }

    return temp;
  }

  let result = 1;
  for (let i = 1; i < k; i++) {
    result = next(result);
  }

  return result;
}

export { findKthNumber };
