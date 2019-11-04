const pivotIndex = (nums) => {
    if (!nums || !nums.length) return -1

    let left = 0, right = nums.reduce((acc, cur) => acc + cur)

    let index = 0
    for (let num of nums) {
        right -= num

        if (left === right) return index

        left += num

        index++
    }

    return -1
}
