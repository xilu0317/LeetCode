const summaryRanges = (nums) => {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let prev = nums[i];
        while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1)
            i++;

        if (prev !== nums[i])
            res.push(prev + '->' + nums[i]);
        else
            res.push(prev + '');
    }

    return res;
};
