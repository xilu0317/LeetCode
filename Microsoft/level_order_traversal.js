const levelOrder = (root) => {
    if (!root) return [];

    let q = [root];
    let res = [];

    while (q.length) {
        let len = q.length;
        let levelStore = [];

        for (let i = 0; i < len; i++) {
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
