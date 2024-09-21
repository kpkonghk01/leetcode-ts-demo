// https://leetcode.com/problems/lexicographical-numbers
// https://leetcode.com/submissions/detail/1397262044/

function lexicalOrder(n: number): number[] {
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

  let result = [1];
  for (let i = 1; i < n; i++) {
    const last = result[result.length - 1]!;
    result.push(next(last));
  }

  return result;
}
