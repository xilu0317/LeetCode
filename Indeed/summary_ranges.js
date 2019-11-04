const summaryRanges = (nums) => {
    let res = []

    for (let i = 0; i < nums.length; i++) {
        let prev = nums[i]
        // keep increasing the index as long as the difference between cur and next is 1
        while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1)
            i++

        if (prev !== nums[i])
            res.push(prev + '->' + nums[i])
        else
            res.push(prev + '')
    }

    return res
}
