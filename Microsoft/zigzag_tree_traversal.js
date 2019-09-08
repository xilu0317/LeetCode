const zigzagLevelOrder = (root) => {
	if (!root) return [];

	const q = [root];
	const res = [];
	let flag = true;

	while (q.length) {
		const len = q.length;
		const level = [];
		// level order traversal
		for (let i = 0; i < len; i++) {
			let node = q.shift();
			if (node) {
				level.push(node.val)
			}
			if (node.left) {
				q.push(node.left);
			}
			if (node.right) {
				q.push(node.right);
			}
		}
		
		if (flag) {
			res.push(level);
		} else {
			res.push(level.reverse())
		}
		flag = !flag;
	}

	return res;
};