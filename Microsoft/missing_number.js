/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    if (!nums) return null;

    let res = 0;
    // The reason that the len here is nums.length + 1 is because the index + 1 can be a number
    for (let i = 0; i < nums.length + 1; i++) {
        res ^= (i ^ nums[i]);
    }

    return res;
};

// TODO: add different methods
