/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
    if (!height) return 0;

    const LEN = height.length;
    const maxLeftArr = Array(LEN).fill(0);
    const maxRightArr = Array(LEN).fill(0);

    let maxLeft = maxRight = -Infinity;

    // find max left
    for (let i = 0; i < LEN; i++) {
        if (height[i] > maxLeft) {
            maxLeft = height[i];
        }
        maxLeftArr[i] = maxLeft;
    }

    // find max right
    for (let i = LEN - 1; i >= 0; i--) {
        if (height[i] > maxRight) {
            maxRight = height[i];
        }
        maxRightArr[i] = maxRight;
    }

    let sum = 0;
    for (let i = 0; i < LEN; i++) {

        let water = Math.min(maxRightArr[i], maxLeftArr[i]) - height[i];
        if (water > 0) {
            sum += water;
        }
    }

    return sum;
};
