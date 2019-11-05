const lowestCommonAncestor = (root, p, q) => {
    if (root.val > p.val && root.val > q.val)
        return lowestCommonAncestor(root.left, p, q)

    if (root.val < p.val && root.val < q.val)
        return lowestCommonAncestor(root.right, p, q)

    // note this does take care !root edge case and more elegant
    return root
}

// TODO: ADD interative solution as well
