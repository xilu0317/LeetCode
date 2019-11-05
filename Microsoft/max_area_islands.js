let m, n

const maxAreaOfIsland = (grid) => {
    if (!grid || !grid.length) return 0

    m = grid.length // number of rows
    n = grid[0].length // number of cols

    let maxArea = -Infinity
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxArea = Math.max(maxArea, dfs(grid, i, j))
        }
    }

    return maxArea
}

const dfs = (grid, i, j) => {
    // Indices out of bound or on water
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) {
        return 0
    }

    // Flip current land off to water avoid double counting
    grid[i][j] = 0
    // Count current land/grid
    let area = 1

    // Recursive dfs visits
    area += dfs(grid, i - 1, j)
    area += dfs(grid, i + 1, j)
    area += dfs(grid, i, j - 1)
    area += dfs(grid, i, j + 1)

    return area
}
