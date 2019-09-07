const twoSum = (nums, target) => {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        let goal = target - nums[i];
        if (dict[goal] && i !== dict[goal]) {
            return [i, dict[goal]];
        }
    }

    return -1;
};