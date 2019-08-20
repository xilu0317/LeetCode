const twoSum = function (nums, target) {
    let dict = {};

    let i = 0;
    for (let num of nums) {
        dict[num] = i++;
    }

    i = 0;
    for (let num of nums) {
        let goal = target - num;
        if (dict[goal] && dict[goal] !== i) {
            return [i, dict[goal]];
        }
    }

    return -1;
};


twoSum([3, 2, 4], 6)