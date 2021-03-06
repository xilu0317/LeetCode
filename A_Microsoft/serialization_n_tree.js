// ES6
class Node {
    constructor() {
        this.val
        this.children
    }
}

class Codec {
    // object -> string
    serialize(root) {
        let list = []

        this.serializeHelper(root, list)

        // join method is important
        return list.join(',')
    }

    // DFS
    serializeHelper(node, list) {
        if (!node) return

        list.push(node.val)
        list.push(node.children.length)

        for (let child of node.children) {
            this.serializeHelper(child, list)
        }
    }

    // str -> object
    deserialize(str) {
        if (!str) return null

        let q = str.split(',')

        return this.deserializeHelper(q)
    }

    // DFS
    deserializeHelper(q) {
        let node = new Node()

        // dequeue a node here
        node.val = q.shift()

        // number of nodes
        let n = q.shift()

        node.children = []
        for (let i = 0; i < n; i++) {
            node.children.push(this.deserializeHelper(q))
        }

        return node
    }
}
