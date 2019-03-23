class Node {
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }
}

const bfs = (root) => {
  if (!root) return;

  let q = [root];
  while (q.length) {
      let len = q.length;
      for (let i = 0; i < len; ++i) {
          let node = q.shift(); // dequeue
          for (let child of node.children) {
            q.push(child);
          }
      }
  }
}

