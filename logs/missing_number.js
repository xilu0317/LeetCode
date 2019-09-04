/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    if (!nums) return null;

    let res = 0;
    for (let i = 0; i < nums.length + 1; ++i) {
        res ^= (i ^ nums[i]);
    }

    return res;
};
