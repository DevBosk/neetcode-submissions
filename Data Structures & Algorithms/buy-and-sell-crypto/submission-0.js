class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = prices[0];
        let sellPriceIndex = 1;
        let profit = 0;
        while(sellPriceIndex < prices.length) {
            profit = Math.max(profit, prices[sellPriceIndex] - buyPrice);
            buyPrice = Math.min(buyPrice, prices[sellPriceIndex]);
            sellPriceIndex++;
        }

        return profit;
    }
}
