let output;

const getHeight = (root) => {
    if (!root) return 0;

    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
};

const updateOutput = (root, row, left, right) => {
    if (!root) return;

    // missing 'let' would crash your program
    let mid = parseInt((left + right) / 2);
    output[row][mid] = root.val.toString();
    updateOutput(root.left, row + 1, left, mid - 1);
    updateOutput(root.right, row + 1, mid + 1, right);
};

const printTree = (root) => {
    let h = getHeight(root);
    let w = 2 ** h - 1;
    output = Array(h).fill().map(() => Array(w).fill(''));
    updateOutput(root, 0, 0, w - 1);
    return output;
};
