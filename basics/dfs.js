// DFS
// Notes: In leetcode 'neighbor' is normally refered to as 'children'

class Node {
    // More general node can be consisted of key, data, neighbors, visited

    // ----------------------
    //          Node
    // ----------------------
    //   * key (val): unique
    //   * data
    //   * visited
    //   * neighbors
    // ----------------------

    // Note there are different way to represent graphs such as 'ajacency matrix and ajacency list'
    // The graph representation here is using reference-based approach meaning the node is pointing/referncing other nodes

    constructor(val) {
        this.val = val
        this.neighbors = []
        this.visited = false
        // Note if we don't use the color flag here, we can simply use a set
        // to keep track of a list of visisted nodes
    }

    addNeighbor(node) {
        if (node) {
            this.neighbors.push(node)
        }
    }
}

// A graph with 9 nodes and 11 edges
//
//              (A) (root / entry point)
//            /     \
//           /       \
//         (B)-------(C)------(D)
//          |          \     /
//          |           \   /
//         (E)           (F)
//        /  \            |
//       /    \           |
//     (G)    (H)--------(I)
//
// Describe the graph its edges
// 2D array [ [A, B], [A, C], [B, C], [C, D], [B, E], [C, F], [D, F], [E, G], [E, H], [F, I], [H, I] ]

/**
 * Generate graph and return the entry point as 'root'
 *
 * @param {Object[String[]]} edgeList
 * @return {Node} root
 *
 */

const generateGraphByEdgeList = (edgeList) => {
    if (!edgeList) return null

    let root, dict = {}, runOnceFlag = true
    let set = new Set(edgeList.flat().sort())

    // It looks like the 'set' in es6 is ordered depending on the insertion order?
    // But my understanding is that 'set' should be similar to the unordered_set in c
    for (let item of set) {
        dict[item] = new Node(item)
        if (runOnceFlag) {
            root = dict[item]
            runOnceFlag = false // only set root once and it
        }
    }

    for (let edge of edgeList) {
        let key0 = edge[0]
        let key1 = edge[1]

        let startNode = dict[key0]
        let endNode = dict[key1]

        startNode.addNeighbor(endNode)
        endNode.addNeighbor(startNode)
    }

    return root
}

// 1) DFS iterative 
// the node has a flag to track visit status
const dfs1 = (node) => {
    if (!node) return

    let stack = [node]

    while (stack.length) {
        let node = stack.pop()

        if (!node.visited) {
            node.visited = true
            // visit current node
            console.log(node.val)
        }

        for (let n of node.neighbors) {
            if (!n.visited)
                stack.push(n)
        }
    }
}

// 2) DFS iterative
// maintain a set to keep track of visited nodes
const dfs2 = (node) => {
    if (!node) return

    let stack = [node]
    let visisted = new Set()

    while (stack.length) {
        let node = stack.pop()

        if (!visisted.has(node)) {
            visisted.add(node)
            // visit current node
            console.log(node.val)
        }

        for (let n of node.neighbors) {
            // Don't re-push nodes to stack if they have been visited before
            if (!visisted.has(n)) {
                stack.push(n)
            }
        }
    }
}

// 3) DFS Recursive method
// the node maintains a flag to keep track of visit status
const dfs3 = (node) => {
    if (!node) return

    // visit the current node
    console.log(node.val)
    // set visit status
    node.visited = true

    // recursively visit neighbors/children
    for (let n of node.neighbors) {
        // won't revisit nodes that have been visted
        if (!n.visited) dfs3(n)
    }
}

// test case

// Setup the graph
// 9 Nodes, 11 Edges
let A = 'A'
let B = 'B'
let C = 'C'
let D = 'D'
let E = 'E'
let F = 'F'
let G = 'G'
let H = 'H'
let I = 'I'

let root = generateGraphByEdgeList([[A, B], [A, C], [B, C], [C, D], [B, E], [C, F], [D, F], [E, G], [E, H], [F, I], [H, I]])

// graph traversal

// console.log('========== DFS iterative + Node flag ==========')
// dfs(root)
// console.log('===============================================')

console.log('========== DFS iterative + Set ================')
dfs2(root)
console.log('===============================================')

// console.log('========== DFS recursive ======================')
// dfsRec(root)
// console.log('===============================================')