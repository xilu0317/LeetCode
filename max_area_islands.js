let m, n;

const maxAreaOfIsland = (grid) => {
    if (!grid || !grid.length) return 0;

    m = grid.length;
    n = grid[0].length;

    let maxArea = -Infinity;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxArea = Math.max(maxArea, dfs(grid, i, j));
        }
    }

    return maxArea;
};

const dfs = (grid, i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) {
        return 0;
    }

    // Flip it off to avoid double counting
    grid[i][j] = 0;
    // Add current land area
    let area = 1;

    // Recursive dfs visits
    area += dfs(grid, i - 1, j);
    area += dfs(grid, i + 1, j);
    area += dfs(grid, i, j - 1);
    area += dfs(grid, i, j + 1);

    return area;
};