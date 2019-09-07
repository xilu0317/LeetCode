// intentionally shareable
let max;

const maxPathSum = (root) => {
	// Initialize max
	max = -Infinity;

	maxPathDown(root);

	return max;
};

const maxPathDown = (node) => {
	if (!node) return 0;

	const left = Math.max(0, maxPathDown(node.left));
	const right = Math.max(0, maxPathDown(node.right));

	// update absolute max
	max = Math.max(max, left + right + node.val);

	return Math.max(left, right) + node.val;
};