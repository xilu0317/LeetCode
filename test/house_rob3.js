const dfs = (x) => {
    if (!x) return [null, null];

    let left = dfs(x.left);
    let right = dfs(x.right);

    return [left[1] + right[1] + x.val, Math.max(left[0], left[1]) + Math.max(right[0], right[1])];
};

const rob = (root) => {
    if (!root) return 0;

    let nums = dfs(root);

    return Math.max(nums[0], nums[1]);
};
