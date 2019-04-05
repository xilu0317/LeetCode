// DFS
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
    // Note if we don't use the color flag here, we can simply use a set
    // to keep track of a list of visisted nodes
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

// Iterative
const dfs = (root) => {
  if (!root) return [];

  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    if (!node.visited) {
      node.visited = true;
      console.log(node.val);
      //console.log(stack.map(x=>x.val));
    }

    for (let nb of node.neighbors) {
      if (!nb.visited) {
        stack.push(nb);
      }
    }

  }

}

// Recursive

// Main
let root = generateGraphByEdgeList([[1,2],[1,3],[2,3],[2,5],[3,4],[3,6]]);
dfs(root);


