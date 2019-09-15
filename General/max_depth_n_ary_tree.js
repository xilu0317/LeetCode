class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children;
    }
}

// note queue is dynamic
// must record the size of the current queue
const maxDepth = (root) => {
    if (!root) return 0;
    let res = 0;
    let q = [root]; // put root in the queue
    while (q.length > 0) {
        let curQueueLen = q.length; // 1) record current q length
        for (let i = 0; i < curQueueLen; i++) {
            let node = q.shift(); // queue is shrinking
            for (let child of node.children) {
                q.push(child); // queue is expanding
            }
        }
        ++res;
    }
    return res;
};
// r
// 1        2     3     4
// 5 6 7 8              9 10
//                      11

// BFS is essentially layer by layer exploration
// Queue evolving like following
// | 1 2 3 4 | 5 6 7 8 9 10 | 11 
// Whenever you finish the first for loop you finish a layer