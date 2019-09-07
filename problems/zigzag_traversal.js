const buildTreeFromArr = require('../basics/bst.js');
let root = buildTreeFromArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);

zigzagWalk = (root) => {
    if (!root) return;

    let flag = true;
    let levelList = [];
    let q = [root];

    while (q.length) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let node = q.shift();
            // Do NOT requeue the null nodes
            if (node) {
                levelList.push(node.val);
                // Each child will be added
                q.push(node.left);
                q.push(node.right);
            }
        }

        if (flag) {
            levelList.forEach(x => console.log(x));
        } else {
            levelList.reverse().forEach(x => console.log(x))
        }

        // Flip the flag
        flag = !flag;
        // Reset the level list for next use
        levelList = [];
    }

};

// Main
zigzagWalk(root);