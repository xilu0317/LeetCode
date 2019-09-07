const maxArea = (height) => {
    let water = 0;
    let i = 0, j = height.length - 1;

    while (i < j) {
        let h = min(height[i], height[j]);
        water = max(water, (j - i) * h);
        while (height[i] <= h && i < j)++i;
        while (height[j] <= h && i < j)--j;
    }

    return water;
};