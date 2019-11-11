// https://leetcode.com/problems/search-a-2d-matrix-ii/
// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// [
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
// ]

// Search from top right
const searchMatrix = (matrix, target) => {
    if (!matrix || !matrix.length || !matrix[0].length)
        return false

    let rows = matrix.length, cols = matrix[0].length

    // define starting point -> first row but last column which is '15'
    let i = 0, j = cols - 1

    // apply constraints on the while loop
    while (i <= rows - 1 && j >= 0) {
        if (matrix[i][j] === target)
            return true
        else if (target < matrix[i][j])
            j--
        else if (target > matrix[i][j])
            i++
    }

    return false
}
