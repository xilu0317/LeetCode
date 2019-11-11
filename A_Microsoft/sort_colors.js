const sortColors = (nums) => {
    let dict = {}
    dict[0] = dict[1] = dict[2] = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) dict[0]++
        if (nums[i] === 1) dict[1]++
        if (nums[i] === 2) dict[2]++
    }

    let len0 = dict[0], len1 = dict[1], len2 = dict[2]

    let i = 0
    while (i < len0) nums[i++] = 0
    while (i < len0 + len1) nums[i++] = 1
    while (i < len0 + len1 + len2) nums[i++] = 2
}
