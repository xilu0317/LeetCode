// TODO: revisit
// use 'cur' to reflect dynamic root in nature
const lowestCommonAncestor = (cur, p, q) => {
    if (!cur) return null

    // If the cur node is p or q then the current node is the LCA
    if (cur === p || cur === q) return cur

    // recursively check the left and right sub tree
    let left = lowestCommonAncestor(cur.left, p, q)
    let right = lowestCommonAncestor(cur.right, p, q)

    // if both are non-null then apparently this cur is the LCA
    if (left && right) return cur

    // if left is non-null and right null then LCA is left. Vice versa.
    return left ? left : right
}
