/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = (candidates, target) => {
    let res = [];

    // Important! Make sure the numbers are sorted
    candidates.sort((a, b) => a - b);

    dfs(candidates, target, 0, [], res);

    return res;
};

const dfs = (nums, target, index, path, res) => {
    // 'nums' = to be shared across all rec calls
    // 'res' = the result container that needs to be shared accross all rec calls
    // 'target' = new target after using nums[i]

    // Exit condition 1:
    // overshot => not found
    if (target < 0) return;

    // Exit condition 2:
    if (target === 0) {
        // have found the result, add it to the result set
        res.push(path);

        return;
    }

    for (let i = index; i < nums.length; i++) {
        // path.push will result in LTE
        dfs(nums, target - nums[i], i, path.concat(nums[i]), res);
    }
};
