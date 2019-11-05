const stuff = require('../basics/bst.js')

let root = stuff([1, 2, 3, 4, 5, 6, 7, 8, 9])

const zigzagWalk = (root) => {
    if (!root) return

    let flag = true, levelList = [], q = [root]

    while (q.length) {
        let len = q.length

        for (let i = 0; i < len; i++) {
            let node = q.shift()
            // don't requeue the null nodes
            if (node) {
                levelList.push(node.val)
                q.push(node.left)
                q.push(node.right)
            }
        }

        if (flag)
            levelList.forEach(x => console.log(x))
        else
            levelList.reverse().forEach(x => console.log(x))

        // change flag
        flag = !flag
        // clear out the level list
        levelList = []
    }
}

zigzagWalk(root)