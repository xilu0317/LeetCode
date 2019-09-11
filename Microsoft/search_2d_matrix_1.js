// TODO: revisit
// https://leetcode.com/problems/search-a-2d-matrix/

// Use parseInt
const searchMatrix = (matrix, target) => {
    if (!matrix || !matrix.length) return false;

    let start = 0; rows = matrix.length, cols = matrix[0].length;
    let end = rows * cols - 1;

    // the key is to find out how 'mid' is translated to the row-col representation

    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (matrix[parseInt(mid / cols)][mid % cols] === target) {
            return true;
        }
        if (matrix[parseInt(mid / cols)][mid % cols] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
};
