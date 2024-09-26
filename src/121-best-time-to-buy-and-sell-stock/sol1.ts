// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150
// https://leetcode.com/submissions/detail/1159222970/

export function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let max = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      max = Math.max(max, price - minPrice);
    }
  }

  return max;
}
