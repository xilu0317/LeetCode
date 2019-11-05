const threeSum = (nums) => {
    // Numeral sorting! *NOT* Lex sort
    nums.sort((a, b) => a - b)

    // Note the right end index is nums.length - 2
    let res = []

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let lo = i + 1
            let hi = nums.length - 1
            let sum = 0 - nums[i]

            while (lo < hi) {
                if (nums[lo] + nums[hi] === sum) {
                    res.push([nums[i], nums[lo], nums[hi]])
                    // handle equal keys
                    while (lo < hi && nums[lo] === nums[lo + 1]) lo++
                    while (lo < hi && nums[hi] === nums[hi - 1]) hi--
                    lo++
                    hi--
                }
                // two pointer problem - like two sum closest
                else if (nums[lo] + nums[hi] < sum)
                    lo++
                else
                    hi--
            }
        }
    }

    return res
}
