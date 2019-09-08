const levelOrder = (root) => {
    if (!root) return [];

    const q = [root];
    const res = [];

    while (q.length) {
        const len = q.length;
        const levelStore = [];

        for (let i = 0; i < len; ++i) {
            let node = q.shift();
            levelStore.push(node.val);
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        res.push(levelStore);
    }

    return res;
};
