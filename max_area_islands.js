let m, n;

const maxAreaOfIsland = (grid) => {
    m = grid.length;
    if (m === 0) return 0;
    n = grid[0].length;

    let maxArea = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Running max
            maxArea = Math.max(maxArea, dfs(grid, i, j));
        }
    }

    return maxArea;
};

const dfs = (grid, i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) {
        return 0;
    }

    grid[i][j] = 0;
    let area = 1;

    area += dfs(grid, i - 1, j);
    area += dfs(grid, i + 1, j);
    area += dfs(grid, i, j - 1);
    area += dfs(grid, i, j + 1);

    return area;
};