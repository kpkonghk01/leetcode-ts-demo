export function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let j = 0;
  let max = 0;

  while (j < prices.length) {
    if (prices[j]! < minPrice) {
      minPrice = prices[j]!;
    } else {
      max = Math.max(max, prices[j]! - minPrice);
    }

    j++;
  }

  return max;
}
