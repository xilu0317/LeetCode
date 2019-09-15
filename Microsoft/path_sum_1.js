const hasPathSum = (root, sum) => {
    if (!root) return [];

    // KEY maintain a dynamic total
    let stack = [[root, 0]];

    // iterative dfs
    while (stack.length) {
        // backtract to the previous step
        let [node, total] = stack.pop();

        // if a leaf
        if (!node.left && !node.right)
            if (total + node.val === sum) return true;

        // the usual adding children bit, the current nodal value has been added into the total
        if (node.right)
            stack.push([node.right, total + node.val]);

        if (node.left)
            stack.push([node.left, total + node.val]);
    }

    return false;
};

// TODO: recursion
bool hasPathSum(TreeNode * root, int sum) {
    if (root == NULL) return false;
    if (root -> val == sum && root -> left == NULL && root -> right == NULL) return true;
    return hasPathSum(root -> left, sum - root -> val) || hasPathSum(root -> right, sum - root -> val);
}
