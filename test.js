/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

const missingNumber = (nums) => {
	let s = new Set();
	for (let num in nums) {
		s.add(num);
	}

	for (let i = 0; i < nums.length; i++) {
		if (!s.has(i)) {
			return i;
		}
	}

	return -1;
};

