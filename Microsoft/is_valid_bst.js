const getMax = (root) => {
    if (!root) return null;

    // keep going right as long as right exists
    while (root.right)
        root = root.right

    return root.val;
};

const getMin = (root) => {
    if (!root) return null;

    while (root.left)
        root = root.left;

    return root.val;
};

const isValidBST = (root) => {
    // per spec
    if (!root) return true;

    // neither exists
    if (!root.left && !root.right) return true;

    // left doesn't exist, cur val must be smaller than the smallest value of right subtree
    if (!root.left)
        return isValidBST(root.right) && root.val < getMin(root.right);

    // right doesn't exist, cur val must be larger than the largest value of left subtree
    if (!root.right)
        return isValidBST(root.left) && root.val > getMax(root.left);

    // both exists
    return isValidBST(root.left) &&
           isValidBST(root.right) &&
           root.val > getMax(root.left) &&
           root.val < getMin(root.right);
};
