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

class Node {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

const cloneGraph = (root) => {
  if (!root) return null;

  let q = [root];
  let hm = new Map();

  while(q.length) {
    let node = q.shift();
    if (!hm.get(node))  {
      let node2 = new Node(node.val,[]);
      hm.set(node, node2);

      for (let nb of node.neighbors) {
      q.push(nb);
      }
    }
  }

  let s = new Set();
  q = [root];
  while (q.length) {
    let node = q.shift();
    if (!s.has(node)) {
      let node2 = hm.get(node);
      s.add(node);
      for (let nb of node.neighbors) {
        q.push(nb);
        let nb2 = hm.get(nb);
        node2.neighbors.push(nb2);
      }
    }
  }

  return hm.get(root);
};

// main
let node1 = new Node(1,[]);
let node2 = new Node(2,[]);
let node3 = new Node(3,[]);
let node4 = new Node(4,[]);

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

console.log('done done done');


