const summaryRanges = (nums) => {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        while (i + 1 < nums.length && (nums[i + 1] - nums[i]) === 1) {
            i++;
        }
        if (a !== nums[i]) {
            res.push(a + '->' + nums[i]);
        } else {
            res.push(a + '');
        }
    }

    return res;
};
