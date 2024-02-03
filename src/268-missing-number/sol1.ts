export function missingNumber(nums: number[]): number {
  let xor = 0;

  for (let i = 0; i <= nums.length; i++) {
    xor ^= i ^ (nums[i] || 0);
  }

  return xor;
}
