const twoSumClosest = (nums, target) => {
    nums.sort((a, b) => a > b);
    let min = Infinity;
    let left = 0, right = nums.length - 1;

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