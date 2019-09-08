/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    if (!nums.length) return 0;

    let mem = Array(nums.length + 1).fill(0);
    mem[1] = nums[0];

    for (let i = 1; i < nums.length; ++i) {
        mem[i + 1] = Math.max(mem[i], mem[i - 1] + nums[i]);
    }

    return mem[nums.length];
};
