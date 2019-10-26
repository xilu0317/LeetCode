const serialize = (root) => {
    if (!root) return '';

    let q = [root];
    let res = [];

    while (q.length) {
        let node = q.shift();
        if (!node) {
            res.push('n');
            continue
        }

        res.push(node.val);

        q.push(node.left);
        q.push(node.right);
    }

    return res.join(' ');
};

const deserialize = (data) => {
    if (data === '') return null;

    let values = data.split(' ');
    let root = new TreeNode(parseInt(values[0]));
    let q = [root];

    for (let i = 0; i < values.length; i++) {
        let parent = q.shift();

        if (values[i] !== 'n') {
            let left = new TreeNode(parseInt(values[i]));
            parent.left = left;
            q.push(left);
        }

        i++;

        if (values[i] !== 'n') {
            let right = new TreeNode(parseInt(values[i]));
            parent.right = right;
            q.push(right);
        }
    }

    return root;
};