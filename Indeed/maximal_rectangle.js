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
    let arr = Array(matrix[0].length).fill(0);
    for (let row of matrix) {

        // TODO: logic error here
        for (let i = 0; i < row.length; i++) {
            if (arr[i] === 0)
                arr[i] = 0;
            else
                arr[i] += row[i];
        }

        let min = Math.min.apply(null, arr);
        let minLen = findMaxContious(arr);
        max = Math.max(max, min * minLen);
    }

    return max;
};
