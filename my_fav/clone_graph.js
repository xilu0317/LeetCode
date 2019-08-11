// BFS
const cloneGraph = (root) => {
    if (!root) return null;

    let q = [root];
    // For the love of god, don't do map = {} because the simple dict only do string -> object
    // For object -> object mapping, use ES6 Map() instead!
    let map = new Map();

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

    let set = new Set();
    q = [root];
    while (q.length) {
        let node = q.shift();
        if (!set.has(node)) {
            let newNode = map.get(node);
            set.add(node);

            for (let nb of node.neighbors) {
                q.push(nb);
                let nb2 = map.get(nb);
                newNode.neighbors.push(nb2);
            }
        }
    }

    return map.get(root);
};