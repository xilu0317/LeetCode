// [bfs] [level-order]
const isCompleteTree = (root) => {
    if (!root) return false

    let q = [root], foundEmpty = false

    while (q.length) {
        let len = q.length
        // This for loop is the signature for level order traversal
        for (let i = 0; i < len; i++) {
            let node = q.shift()

            if (node.left) {
                if (foundEmpty) return false
                q.push(node.left)
            } else {
                foundEmpty = true
            }

            if (node.right) {
                if (foundEmpty) return false
                q.push(node.right)
            } else {
                foundEmpty = true
            }
        }
    }

    return true
}
