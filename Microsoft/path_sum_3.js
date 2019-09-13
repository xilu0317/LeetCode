const pathSum = (root, sum) => {
    if (!root) return 0;

    return pathSumFrom(root, sum) +
           pathSum(root.left, sum) +
           pathSum(root.right, sum);
};

const pathSumFrom = (node, sum) => {
    if (!node) return 0;

    return (node.val === sum ? 1 : 0) +
           pathSumFrom(node.left, sum - node.val) +
           pathSumFrom(node.right, sum - node.val);
};