const zigzagLevelOrder = (root) => {
    if (!root) return []

    let q = [root], res = [], flag = true

    while (q.length) {
        // the length needs to be 'locked' for level order traversal
        let len = q.length
        let level = []

        // for each level
        for (let i = 0; i < len; i++) {
            let node = q.shift()
            if (node) {
                level.push(node.val)
            }
            // push child nodes
            if (node.left) {
                q.push(node.left)
            }
            if (node.right) {
                q.push(node.right)
            }
        }

        res.push(flag ? level : level.reverse())

        flag = !flag
    }

    return res
}
