/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums, k) => {
    var dict = {};

    for (let num of nums) {
        if (!dict[num]) {
            dict[num] = 1;
        } else {
            dict[num]++;
        }
    }

    var arr = [];
    for (let key in dict) {
        arr.push([key, dict[key]]);
    }

    // sort based on the value
    arr.sort((a, b) => b[1] - a[1]);
    // retain only the first k elements
    arr.length = k;

    return arr.map(x => x[0]);
};

// test case
let nums = [4, 1, -1, 2, -1, 2, 3];
let k = 2;

console.log(topKFrequent(nums, k));