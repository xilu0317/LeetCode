// Share common variables
let n, m;

const dfsEraseLand = (grid, i, j) => {
    // If out of bound or in water, return immeidately
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === '0') return;

    // Turn current grid into water
    grid[i][j] = '0';

    // Recursive dfs
    dfsEraseLand(grid, i + 1, j);
    dfsEraseLand(grid, i - 1, j);
    dfsEraseLand(grid, i, j + 1);
    dfsEraseLand(grid, i, j - 1);
};

const numIslands = (grid) => {
    n = grid.length;
    if (n === 0) return 0;
    m = grid[0].length;

    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++)
            // If this grid is land, erase all _reachable_ land nearby
            if (grid[i][j] === '1') {
                dfsEraseLand(grid, i, j);
                // Don't forget count
                count++;
            }
    }

    return count;
};