export function earn(nums: number[]): number {
  let points = 0;
  let occurrences: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]!;
    if (occurrences[current]) {
      occurrences[current]++;
    } else {
      occurrences[current] = 1;
    }

    if (occurrences[current]! % 2 !== 0) {
      console.log(`Adding ${current} to points`);
      points += current;
    }
  }

  return points;
}
