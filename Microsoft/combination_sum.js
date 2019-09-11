/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
    let res = [];
    candidates.sort((a, b) => a - b);

    dfs(candidates, target, 0, [], res);

    return res;
};

const dfs = (nums, target, index, path, res) => {
    if (target < 0) {
        return;
    }

    if (target === 0) {
        res.push(path);
        return;
    }

    for (let i = index; i < nums.length; i++) {
        dfs(nums, target - nums[i], i, path.concat(nums[i]), res);
    }
};
