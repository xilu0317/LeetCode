/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

// Node
class Node {
    constructor(val, neighbors) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

// DFS - recursive
const cloneGraph_DFS = function (graph) {
    let visited = {};

    if (graph === null) {
        return graph;
    } else {
        return dfs(graph);
    }

    function dfs(node) {
        let newNode = visited[node.label] ? visited[node.label] : new UndirectedGraphNode(node.label);
        visited[node.label] = newNode;

        for (let i = 0; i < node.neighbors.length; i++) {
            let newNeighbor = visited[node.neighbors[i].label] ? visited[node.neighbors[i].label] : dfs(node.neighbors[i]);
            newNode.neighbors.push(newNeighbor);
        }

        return newNode;
    }
};

// BFS
const cloneGraph = (root) => {
    if (!root) return null;

    let q = [root];
    // '{}' string -> object mapping
    // 'Map' object -> object mapping
    let map = new Map();

    while (q.length) {
        let node = q.shift();
        if (!map.get(node)) {
            // clone happens here
            let newNode = new Node(node.val, []);
            // associate the old node to the cloned node
            map.set(node, newNode);

            for (const n of node.neighbors) {
                q.push(n);
            }
        }
    }

    // set is probably not even necessary
    // The second traversal is also on the old graph and will link up the children
    let set = new Set();
    q = [root];
    while (q.length) {
        let node = q.shift();
        if (!set.has(node)) {
            let newNode = map.get(node);
            set.add(node);

            for (const n of node.neighbors) {
                q.push(n);
                let nNew = map.get(n);
                newNode.neighbors.push(nNew);
            }
        }
    }

    return map.get(root);
};

// test case
let node1 = new Node(1, []);
let node2 = new Node(2, []);
let node3 = new Node(3, []);
let node4 = new Node(4, []);

node1.neighbors.push(node2);
node1.neighbors.push(node4);
node2.neighbors.push(node1);
node2.neighbors.push(node3);
node3.neighbors.push(node2);
node3.neighbors.push(node4);
node4.neighbors.push(node1);
node4.neighbors.push(node3);

let root2 = cloneGraph(node1);
console.log(root2);
console.log('Finished');