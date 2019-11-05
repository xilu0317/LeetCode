const trap = (height) => {
    if (!height) return 0

    let len = height.length
    let maxLeftArr = Array(len).fill(0)
    let maxRightArr = Array(len).fill(0)
    let maxLeft = maxRight = -Infinity

    // find max left
    for (let i = 0; i < len; i++) {
        if (height[i] > maxLeft)
            maxLeft = height[i]

        maxLeftArr[i] = maxLeft
    }

    // find max right
    for (let i = len - 1; i >= 0; i--) {
        if (height[i] > maxRight)
            maxRight = height[i]

        maxRightArr[i] = maxRight
    }

    let sum = 0
    for (let i = 0; i < len; i++) {
        let water = Math.min(maxRightArr[i], maxLeftArr[i]) - height[i]

        if (water > 0) sum += water
    }

    return sum
}
