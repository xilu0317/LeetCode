const intersection = (nums1, nums2) => {
    if (!nums1 || !nums2) return []

    let s = new Set(nums1)
    let res = []
    for (let item of nums2) {
        if (s.has(item))
            res.push(item)
    }

    return [...new Set(res)]
}
