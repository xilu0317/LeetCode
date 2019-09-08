// Note that you cannot first sell and then buy the stock
// Thus shouldn't just directly use the max number to be subtracted by the min number

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
