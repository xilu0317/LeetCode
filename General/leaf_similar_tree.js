const inOrderTraversal = (root) => {
    if (!root) return []

    let res = [], stack = []
    let cur = root

    while (true) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            if (stack.length) {
                cur = stack.pop()
                // if it is a leaf add it to res
                if (!cur.left && !cur.right) {
                    res.push(cur.val)
                }
                cur = cur.right
            } else {
                break
            }
        }
    }

    return res
}

const leafSimilar = (root1, root2) => {
    let l1 = inOrderTraversal(root1)
    let l2 = inOrderTraversal(root2)

    if (l1.length !== l2.length) return false

    for (let i = 0; i < l1.length; i++) {
        if (l1[i] !== l2[i]) return false
    }

    return true
}
