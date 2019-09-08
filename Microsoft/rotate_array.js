// Need to explain the observation to the interviewers
const rotate = (nums, k) => {
    if (k <= 0 || !nums) return;

    // must do mod thing here to acount for over rotation
    const len = nums.length
    k = k % len;
    if (k === 0) return nums;

    reverse(nums, 0, len - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, len - 1);
};

const reverse = (nums, start, end) => {
    while (start < end) {
        // remember to use the latest syntax when swapping
        [nums[start], nums[end]] = [nums[end], nums[start]];
        ++start;
        --end;
    }
};
