// TODO: bug here
const serialize = (root) => {
    if (!root) return '';

    let q = [root];
    let res = [];

    while (q.length) {
        let node = q.shift();

        if (node === null) {
            res.push('n');
            continue;
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
            let node = new TreeNode(parseInt(values[i]));
            parent.left = node;
            q.push(node);
        }

        i++;

        if (values[i] !== 'n') {
            let node = new TreeNode(parseInt(values[i]));
            parent.right = node;
            q.push(node);
        }
    }

    return root;
};