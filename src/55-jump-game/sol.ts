// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150
// https://leetcode.com/submissions/detail/1402524895/

function canJump(nums: number[]): boolean {
  if (nums.length < 2) return true;

  let maxReachable = nums[0]!;

  for (let i = 1; i < nums.length; i++) {
    if (maxReachable >= nums.length - 1) {
      return true;
    }

    if (i > maxReachable) {
      return false;
    }

    const candidate = i + nums[i]!;
    if (candidate > maxReachable) {
      maxReachable = candidate;
    }
  }

  return false;
}
