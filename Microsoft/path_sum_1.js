const hasPathSum = (root, sum) => {
    if (!root) return [];

    let stack = [[root, 0]];

    while (stack.length) {
        // dfs always backtracks to the last tracked node
        let [node, total] = stack.pop();

        // if the cur node is a leaf
        if (!node.left && !node.right) {
            if (total + node.val === sum) return true;
        }

        // the usual adding children bit
        if (node.right) {
            stack.push([node.right, total + node.val]);
        }

        if (node.left) {
            stack.push([node.left, total + node.val]);
        }
    }

    return false;
};
