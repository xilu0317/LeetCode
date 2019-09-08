// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit.You may complete at most two transactions.

// Note: You may not engage in multiple transactions at the same time(i.e., you must sell the stock before you buy again).

// Input: [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
//              Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.


// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// 			Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
// 			engaging multiple transactions at the same time. You must sell before buying again.

const maxProfit = (prices) => {
    let hold1 = -Infinity, hold2 = -Infinity;
    let release1 = 0, release2 = 0;

    for (const price of prices) {
        release2 = Math.max(release2, hold2 + price);
        hold2 = Math.max(hold2, release1 - price);
        release1 = Math.max(release1, hold1 + price);
        hold1 = Math.max(hold1, - price);
    }

    return release2;
};