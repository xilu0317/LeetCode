const twoSum = (nums, target) => {
    if (!nums || !nums.length) return -1;

    let dict = {};

    for (let i = 0; i < nums.length; i++) {
        let goal = target - nums[i];

        // cannot use falsy check because '0' could be an index
        if (dict[goal] !== i && dict[goal] !== undefined) {
            return [i, dict[goal]];
        }

        // build dictionary as you go
        dict[nums[i]] = i;
    }

    return -1;
};
