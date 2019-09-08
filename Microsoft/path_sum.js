const hasPathSum = (root, sum) => {
    if (!root) return [];

    const stack = [[root, 0]];

    while (stack.length) {
        let [node, total] = stack.pop();

        if (!node.left && !node.right) {
            if (total + node.val === sum) return true;
        }

        if (node.right) {
            stack.push([node.right, total + node.val]);
        }

        if (node.left) {
            stack.push([node.left, total + node.val]);
        }
    }

    return false;
};