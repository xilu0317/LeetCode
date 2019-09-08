const removeDuplicates = (nums) => {
    if (!nums) return -1;

    let slow = 0;
    let fast = 1;

    while (fast < nums.length) {
        if (nums[fast] === nums[fast - 1]) {
            ++fast;
        } else {
            nums[slow + 1] = nums[fast];
            ++slow;
            ++fast;
        }
    }

    return slow + 1;
};