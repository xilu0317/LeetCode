// TODO: need to rework

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    let sum = 0, res = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            res += map.get(sum - k);
        }

        map.set(sum, map.get(sum) + 1 || + 1);
    }

    return res;
};
