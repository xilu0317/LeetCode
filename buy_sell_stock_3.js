/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
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