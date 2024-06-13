export function earn(nums: number[]): number {
  nums = nums.slice();
  let points = 0;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    points += current!;

    let nextIdx = nums.slice(i + 1).findIndex((n) => {
      if (n === current) {
        return true;
      }
    });

    if (nextIdx === -1) {
      continue;
    }

    nextIdx += i + 1;

    nums.splice(nextIdx, 1);
  }

  return points;
}
