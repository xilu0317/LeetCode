// 1 2 x xx 2 x

// x x x x x

// x x x 2 2 x x

test = [null, null, null, 2, 2, 2, null]



const countNodes = (list) => {
	if (!list || !list.length) return 0;

	let left = 0;
	let right = list.length - 1;

	while (left < right) {
		if (list[left] === null) {
			left++;
		}
		if (list[right] === null) {
			right--;
		}
		if (list[left] !== null && list[right] !== null) {
			break;
		}
	}

	return right - left + 1;
};

countNodes(test);