// TODO: revisit
const spiralOrder = (matrix) => {
    if (matrix.length === 0) return []

    let res = []
    let rowBegin = 0, rowEnd = matrix.length - 1
    let colBegin = 0, colEnd = matrix[0].length - 1

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Traverse Right
        for (let j = colBegin; j <= colEnd; j++) {
            res.push(matrix[rowBegin][j])
        }
        rowBegin++

        // Traverse Down
        for (let j = rowBegin; j <= rowEnd; j++) {
            res.push(matrix[j][colEnd])
        }
        colEnd--

        if (rowBegin <= rowEnd) {
            // Traverse Left
            for (let j = colEnd; j >= colBegin; j--) {
                res.push(matrix[rowEnd][j])
            }
        }
        rowEnd--

        if (colBegin <= colEnd) {
            // Traver Up
            for (let j = rowEnd; j >= rowBegin; j--) {
                res.push(matrix[j][colBegin])
            }
        }
        colBegin++
    }

    return res
}
