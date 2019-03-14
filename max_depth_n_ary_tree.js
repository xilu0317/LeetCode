function Node(val,children) {
  this.val = val;
  this.children = children;
};

// note queue is dynamic
// must record the size of the current queue
const  maxDepth = (root) => {
  if (!root) return 0;
  let res = 0;
  let q = [root]; // put root in the queue
  while (q.length > 0) {
      let curQueueLen = q.length; // 1) record current q length
      for (let i = 0; i < curQueueLen; ++i) {
          let node = q.shift(); // queue is shrinking
          for (let child of node.children) {
            if (child) q.push(child); // queue is expanding
          }
      }
      ++res;
  }
  return res;
}