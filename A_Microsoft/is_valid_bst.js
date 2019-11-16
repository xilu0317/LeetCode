const isValidBST = (root, lessThan = Infinity, largerThan = -Infinity) => {
    if (!root) return true

    if (root.val <= largerThan || root.val >= lessThan) return false

    return isValidBST(root.left, Math.min(root.val, lessThan), largerThan) &&
           isValidBST(root.right, lessThan, Math.max(root.val, largerThan))
}
