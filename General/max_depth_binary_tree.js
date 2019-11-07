const maxDepth = (root) => {
    if (!root) return 0

    let rootLeft = maxDepth(root.left)
    let rootRight = maxDepth(root.right)

    return Math.max(rootLeft, rootRight) + 1
}