let n, m;

const dfsEraseLand = (grid, i, j) => {
    // If current grid is out of bound or on water
    // then exit the funciton immeidately
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === '0') return;

    // Turn current land/grid into water
    grid[i][j] = '0';

    // Recursive dfs
    dfsEraseLand(grid, i + 1, j);
    dfsEraseLand(grid, i - 1, j);
    dfsEraseLand(grid, i, j + 1);
    dfsEraseLand(grid, i, j - 1);
};

const numIslands = (grid) => {
    // Spec requires to return 0 for invalide inputs
    if (!grid || !grid.length) return 0;

    n = grid.length;
    m = grid[0].length;

    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // If the current grid is a land, erase ALL neighboring landds
            if (grid[i][j] === '1') {
                dfsEraseLand(grid, i, j);
                // Don't forget to count after removing the lands
                ++count;
            }
        }
    }

    return count;
};