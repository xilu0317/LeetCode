/**
 * @param {character[][]} grid
 * @return {number}
 */

// Share m, n
let m, n;

// helper
const dfsMarking = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === '0') {
        return;
    }

    // Flag '1' => '0'
    grid[i][j] = '0';

    // Recursive dfs
    dfsMarking(grid, i + 1, j);
    dfsMarking(grid, i - 1, j);
    dfsMarking(grid, i, j + 1);
    dfsMarking(grid, i, j - 1);
};

// main method
const numIslands = (grid) => {
    let count = 0;
    n = grid.length;
    m = grid[0].length;

    if (n === 0) return 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++)
            // if node is '1' mark reachable neighbors '0' and increment the count
            if (grid[i][j] === '1') {
                dfsMarking(grid, i, j);
                count++;
            }
    }

    return count;
};
