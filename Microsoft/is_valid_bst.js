// TODO: revisit
const getMax = (root) => {
    if (!root) throw 'The root node cannot be null!';

    while (root.right) {
        root = root.right
    }

    return root.val;
};

const getMin = (root) => {
    if (!root) throw 'The root node cannot be null!';

    while (root.left) {
        root = root.left;
    }

    return root.val;
};

const isValidBST = (root) => {
    if (!root) return true;

    if (!root.left && !root.right) return true;

    if (!root.left) return isValidBST(root.right) && root.val < getMin(root.right);

    if (!root.right) return isValidBST(root.left) && root.val > getMax(root.left);

    return isValidBST(root.left) && isValidBST(root.right) && getMax(root.left) < root.val && root.val < getMin(root.right);
};
