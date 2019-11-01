// BFS
const cloneGraph = (root) => {
    if (!root) return null;

    let q = [root];
    // KEY: For 'object -> object' mapping, use ES6 Map() instead.
    let map = new Map();

    // First traversal is aimed to created a collection of disconnected nodes
    while (q.length) {
        let node = q.shift();

        if (!map.get(node)) {
            // clone happens here
            let newNode = new Node(node.val, []);
            // associate the old node to the cloned node
            map.set(node, newNode);

            for (let nb of node.neighbors) {
                q.push(nb);
            }
        }
    }

    // Second traveral is intended to associate neighbors of each new nodes in the new graph
    let set = new Set();
    q = [root];
    while (q.length) {
        let node = q.shift();

        if (!set.has(node)) {
            let newNode = map.get(node);
            // mark as visisted by adding the node into the set
            set.add(node);

            for (let nb of node.neighbors) {
                q.push(nb);
                let newNb = map.get(nb);
                // add new neighbor to new node
                newNode.neighbors.push(newNb);
            }
        }
    }

    return map.get(root);
};