const pivotIndex = (nums) => {
    if (!nums || !nums.length) return -1

    let right = nums.reduce((acc, cur) => acc + cur)
    let left = 0, index = 0
    for (let num of nums) {
        right -= num

        if (left === right)
            return index

        left += num

        index++
    }

    return -1
}
