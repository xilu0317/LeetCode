let n, m;

const dfsMarking = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === '0') return;

    grid[i][j] = '0';

    dfsMarking(grid, i + 1, j);
    dfsMarking(grid, i - 1, j);
    dfsMarking(grid, i, j + 1);
    dfsMarking(grid, i, j - 1);
};

const numIslands = (grid) => {
    n = grid.length;
    if (n === 0) return 0;
    m = grid[0].length;

    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++)
            if (grid[i][j] === '1') {
                dfsMarking(grid, i, j);
                count++;
            }
    }

    return count;
};