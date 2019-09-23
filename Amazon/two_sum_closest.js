const twoSumClosest = (nums, target) => {
    // KEY: numeral sorting
    nums.sort((a, b) => a > b);

    let min = Infinity;
    let left = 0, right = nums.length - 1;

    // KEY: Try an example 0 3 5 7 8 8 9 12 15 with target 11
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            min = Math.min(min, target - nums[left] - nums[right]);
            left++;
        } else {
            min = Math.min(min, nums[left] + nums[right] - target);
            right--;
        }
    }

    return min;
};
