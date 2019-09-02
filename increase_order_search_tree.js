const increasingBST = (root) => {
    return increasingBSTRec(root, null);
};

const increasingBSTRec = (root, next) => {
    if (!root) return next;

    const res = increasingBSTRec(root.left, root);
    root.left = null;
    root.right = increasingBSTRec(root.right, next);

    return res;
};