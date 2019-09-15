const minDepth = (root) => {
    if (!root) return 0;

    let leftMinDepth = minDepth(root.left);
    let rightMinDepth = minDepth(root.right);

    if (leftMinDepth === 0 && rightMinDepth === 0) return 1;

    if (leftMinDepth === 0) return rightMinDepth + 1;

    if (rightMinDepth === 0) return leftMinDepth + 1;

    return Math.min(leftMinDepth, rightMinDepth) + 1;
};
