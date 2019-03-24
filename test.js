// In leetcode `neighbor` is normally refered to as `children`
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
  constructor(val) {
    this.val = val;
    this.neighbors = [];
    this.visited = false;
  }

  addNeighbor(node) {
    if (node) {
      this.neighbors.push(node);
    }
  }
}

// Difference between graph and tree: A graph can have a cycle

// A graph with 6 nodes and 6 edges
//
//         (1) (root)
//       /     \
//      /       \
//    (2)-------(3)------(4)
//     |          \
//     |           \
//    (5)          (6)
//
// Describe the graph its edges
// 2D array [[1,2],[1,3],[2,3],[2,5],[3,4],[3,6]]

// Generate graph
/**
 * @param {number[number[]]} edgeList
 * @return {Node} root
 */
const generateGraphByEdgeList = (edgeList) => {
  if (!edgeList) return null;

  let root;
  let dict = {};
  let set = new Set(edgeList.flat().sort());
  let flag = true;

  for (let item of set) {
    dict[item] = new Node(item);
    if (flag) {
      root = dict[item];
      flag = false; // only set root once and it
    }
  }

  for (let edge of edgeList) {
    let key0 = edge[0];
    let key1 = edge[1];

    let startNode = dict[key0];
    let endNode = dict[key1];

    startNode.addNeighbor(endNode);
    endNode.addNeighbor(startNode);
  }

  return root;
}

// BFS Iterative
// it seems node 3 and node 6 have been visited twice
const bfs = (root) => {
  if (!root) return;

  let q = [root];
  while (q.length) {
    let len = q.length; // Record current length at the level
    for (let i = 0; i < len; ++i) {
      let node = q.shift(); // Dequeue nodes that were loaded from the last round
      // Node visit
      console.log('visit -> ' + node.val); // Is it possible for node to be `null` here?
      node.visited = true;
      for (let neighbor of node.neighbors) { // Use `of` not `in`
        if (neighbor && !neighbor.visited) { // If the current is null or undefined, don't push to queue
          q.push(neighbor);
        }
      }
    } // end of level for-loop
  }
}

// BFS Recursive = [Not necessary]
// https://stackoverflow.com/questions/2549541/performing-breadth-first-search-recursively

// Main
let root = generateGraphByEdgeList([[1,2],[1,3],[2,3],[2,5],[3,4],[3,6]]);
bfs(root);


