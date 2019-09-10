// bfs
const isCompleteTree = (root) => {
    if (!root) return false;

    let q = [root];
    let flag = false;

    while (q.length) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let node = q.shift();

            if (node.left) {
                if (flag) return false;
                q.push(node.left);
            } else {
                flag = true;
            }

            if (node.right) {
                if (flag) return false;
                q.push(node.right);
            } else {
                flag = true;
            }
        }
    }

    return true;
};
