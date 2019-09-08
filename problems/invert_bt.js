const invertTree = (root) => {
    if (!root) return null;

    if (root.left === null && root.right === null) {
        return root;
    }

    let temp = root.left;

    root.left = invertTree(root.right);

    root.right = invertTree(temp);

    return root;
};
