// TODO:  REWORK
// HELPER FUNCTION GOOD
const findMaxContious = (arr) => {
    if (!arr || !arr.length) return 0;

    arr.push(0);
    let max = 0, temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            max = Math.max(max, temp);
            temp = 0;
        } else {
            temp++;
        }
    }

    return max;
};

const maximalRectangle = (matrix) => {
    if (!matrix || !matrix.length) return 0;

    let max = -Infinity;
    let arr = matrix[0];
    for (let row of matrix) {
        for (let i = 1; i < row.length; i++) {
            if (row[i] === '0')
                arr[i] = 0;
            else
                arr[i]++;
        }

        let myMax = Math.max.apply(null, arr);
        let minLen = findMaxContious(arr);
        console.log(myMax)
        console.log(minLen)

        max = Math.max(max, myMax * minLen);
    }

    return max;
};
