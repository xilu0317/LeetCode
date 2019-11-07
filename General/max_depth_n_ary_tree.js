class Node {
    constructor(val, children) {
        this.val = val
        this.children = children
    }
}

// BFS
const maxDepth = (root) => {
    if (!root) return 0

    let res = 0, q = [root]

    while (q.length) {
        // lock current length
        let len = q.length
        for (let i = 0; i < len; i++) {
            let node = q.shift()

            for (let c of node.children) {
                q.push(c)
            }
        }

        res++
    }

    return res
}

// Recursive
const maxDepth = (node) => {
    if (!node) return 0

    let max = 0
    for (let c of node.children) {
        max = Math.max(max, maxDepth(c))
    }

    return max + 1
}
