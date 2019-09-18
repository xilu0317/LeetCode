const countNodes = (root) => {
    if (!root) return 0;

    let q = [root], count = 0;

    while (q.length) {
        let node = q.shift();

        if (!node) break;
        count++;

        q.push(node.left);
        q.push(node.right);
    }

    return count;
};