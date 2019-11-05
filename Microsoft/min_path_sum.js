// Maintain an underlying matrix that records the data
// Find out the optimal substructure: Math.min(mat[i][j - 1], mat[i - 1][j]) + grid[i][j]

const minPathSum = (grid) => {
    if (!grid) return 0

    let m = grid.length, n = grid[0].length
    let mat = Array(m).fill()
                      .map(() => Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0)
                mat[i][j] = grid[i][j]
            else if (i === 0)
                mat[i][j] = mat[i][j - 1] + grid[i][j]
            else if (j === 0)
                mat[i][j] = mat[i - 1][j] + grid[i][j]
            else
                mat[i][j] = Math.min(mat[i][j - 1], mat[i - 1][j]) + grid[i][j]
        }
    }

    return mat[m - 1][n - 1]
}
