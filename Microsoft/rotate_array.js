// Need to explain the observation to the interviewers
const rotate = (nums, k) => {
	if (k <= 0 || !nums) return;

	// must do mod thing here
	k = k % nums.length;
	if (k === 0) return nums;

	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, nums.length - 1);
};

const reverse = (nums, start, end) => {
	while (start < end) {
		// remember to use the latest syntax when swapping
		[nums[start], nums[end]] = [nums[end], nums[start]];
		++start;
		--end;
	}
};