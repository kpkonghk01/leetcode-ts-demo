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
