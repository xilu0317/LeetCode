const treeSum = (root) => {
    if (!root) return 0;

    let res = 0;
    if (root.left) res += treeSum(root.left);
    if (root.right) res += treeSum(root.right);
    res += root.val;

    return res;
};

const findTiltRec = (root, res) => {
    if (!root) return 0;

    let resleft = findTiltRec(root.left, res);
    let resright = findTiltRec(root.right, res);

    let leftVal = root.left ? treeSum(root.left) : 0;
    let rightVal = root.right ? treeSum(root.right) : 0;

    return resleft + resright + Math.abs(leftVal - rightVal);
};

const findTilt = (root) => {
    return findTiltRec(root, 0);
};
