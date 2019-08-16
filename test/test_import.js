const stuff = require('../basics/bst.js');

let root = stuff([1, 2, 3, 4, 5, 6, 7, 8, 9]);

zigzagWalk = (root) => {
    if (!root) return;

    let flag = true;
    let levelList = [];
    let q = [root];

    while (q.length) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let node = q.shift();
            if (node) {
                levelList.push(node.val);
                q.push(node.left);
                q.push(node.right);
            }
        }

        if (flag) {
            levelList.forEach(x => console.log(x));
        } else {
            levelList.slice().reverse().forEach(x => console.log(x))
        }
        flag = !flag;
        levelList = [];
    }

}

zigzagWalk(root)