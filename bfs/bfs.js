class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children;
    }
}

// bfs node-based underlying map
const bfs = (root) => {
    if (!root) return;

    // put the root into the queue
    let q = [root];
    // keep the loop going when the queue is not empty
    while (q.length) {
        // this is only needed for level by level exploration
        let len = q.length;
        for (let i = 0; i < len; ++i) {
            let node = q.shift(); // dequeue
            for (let child of node.children) {
                q.push(child);
            }
        }
    }
};

// TODO:
// bfs - adjancecy list

// TODO:
// bfs - adjancecy matrix

// TODO:
// add a more universal bfs version down below (no level by level exploration scheme)

