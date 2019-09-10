// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// [
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
// ]

const searchMatrix = (matrix, target) => {
    if (!matrix || !matrix.length || !matrix[0].length) {
        return false;
    }

    let rowLen = matrix.length;
    let colLen = matrix[0].length;

    // define starting point -> first row but last column which is '15'
    let row = 0; // row
    let col = colLen - 1; // col

    // apply constraints on the while loop
    while (row <= rowLen - 1 && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (target < matrix[row][col]) {
            col--;
        } else if (target > matrix[row][col]) {
            row++;
        }
    }

    return false;
};
