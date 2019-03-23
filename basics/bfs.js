class Node {
  constructor(val, children) {
    this.val = val;
    this.children = children; // A list
  }
}

// BFS = layer-by-layer exploration

// BFS iterative
const bfs = (root) => {
  if (!root) return;

  let q = [root];
  while (q.length) {
    let len = q.length; // Record current length at the level
    for (let i = 0; i < len; ++i) {
      let node = q.shift(); // Dequeue nodes that were loaded from the last round
      // Node visit
      console.log(node.val); // Is it possible for node to be `null` here?
      for (let child of node.children) { // Use `of` not `in`
        if (child) { // If the current is null or undefined, don't push to queue
          q.push(child);
        }
      }
    } // end of level for-loop
  }
}

// BFS recursive
// Not really necessary unless there is a specific interview question asking for it
// https://stackoverflow.com/questions/2549541/performing-breadth-first-search-recursively