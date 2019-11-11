// Iterative
const hasPathSum = (root, sum) => {
    if (!root) return []

    // KEY push both root and total into the stack
    let stack = [[root, 0]]

    // iterative dfs
    while (stack.length) {
        // backtract to the previous step
        let [node, total] = stack.pop()

        // if a leaf
        if (!node.left && !node.right && total + node.val === sum)
            return true

        // the usual adding children bit, the current nodal value has been added into the total
        if (node.right)
            stack.push([node.right, total + node.val])

        if (node.left)
            stack.push([node.left, total + node.val])
    }

    return false
}

// Recursive approach
const hasPathSum = (root, sum) => {
    if (!root) return false

    if (!root.left && !root.right && root.val === sum) return true

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}
