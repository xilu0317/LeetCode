const maxArea = (height) => {
    let i = 0, j = height.length - 1, water = 0;

    while (i < j) {
        let h = Math.min(height[i], height[j])

        water = Math.max(water, (j - i) * h)

        while (height[i] <= h && i < j) i++
        while (height[j] <= h && i < j) --j
    }

    return water
}
