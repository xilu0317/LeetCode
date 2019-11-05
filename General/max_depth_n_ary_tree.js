class Node {
    constructor(val, children) {
        this.val = val
        this.children = children
    }
}

const maxDepth = (root) => {
    if (!root) return 0

    let res = 0, q = [root]

    while (q.length > 0) {
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
// r
// 1        2     3     4
// 5 6 7 8              9 10
//                      11

// BFS is essentially layer by layer exploration
// Queue evolving like following
// | 1 2 3 4 | 5 6 7 8 9 10 | 11 
// Whenever you finish the first for loop you finish a layer