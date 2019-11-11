
const findMin = (nums) => {
    return searchMin(nums, 0, nums.length - 1)
}

const searchMin = (nums, lo, hi) => {
    // Avoid (lo + hi) / 2 to avoid integer overflow
    let mid = lo + parseInt((hi - lo) / 2)

    // Covers the normal case of 'cliff drop'
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1]

    // Covers the special case of 'normal' ascending AFTER handling the 'cliff drop'
    if (mid === 0) return nums[0]

    // Note 'mid + 1 and mid - 1' won't work
    if (nums[mid] > nums[hi])
        return searchMin(nums, mid, hi)
    else
        return searchMin(nums, lo, mid)
}
