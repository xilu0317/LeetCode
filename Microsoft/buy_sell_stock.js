/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    if (!prices || prices.length === 0) return 0;

    let maxProfit = -Infinity;
    let minPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};