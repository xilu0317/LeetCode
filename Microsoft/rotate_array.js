// Explain the observation to the interviewer
const rotate = (nums, k) => {
    if (k <= 0 || !nums) return;

    // must do mod thing here to acount for over rotation
    let len = nums.length;
    k %= len;
    if (k === 0) return nums;

    // full reverse
    reverse(nums, 0, len - 1);
    // reverse the first part
    reverse(nums, 0, k - 1);
    // reverse the rest part
    reverse(nums, k, len - 1);
};

// two-pointer paradigm
const reverse = (nums, start, end) => {
    while (start < end) {
        // ES6
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};

// TODO: add the basic approach
