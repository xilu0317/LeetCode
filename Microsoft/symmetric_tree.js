// [Requirement] if the root doesn't exist, it is considered as symmetric
const isSymmetric = (root) => {
    return !root || _isSymmetric(root.left, root.right)
}

const _isSymmetric = (left, right) => {
    if (!left || !right) return left === right

    if (left.val !== right.val) return false

    return _isSymmetric(left.left, right.right) &&
           _isSymmetric(left.right, right.left)
}
