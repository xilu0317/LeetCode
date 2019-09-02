let m, n;

const dfsEraseLand = (grid, i, j) => {
    // If current grid is out of bound or on water
    // then exit the funciton immeidately
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') return;

    // Erase the current land grid by marking it as water
    grid[i][j] = '0';

    // Recursive dfs
    dfsEraseLand(grid, i + 1, j);
    dfsEraseLand(grid, i - 1, j);
    dfsEraseLand(grid, i, j + 1);
    dfsEraseLand(grid, i, j - 1);
};

/*
    The gist is that go visit each grid in the matrix.
    If the grid is a land grid then erase all neighoring girds and
    then increment the counter by just 1 for the entire 'landmass'
*/
const numIslands = (grid) => {
    // The spec requires to return 0 for invalid inputs
    if (!grid || !grid.length) return 0;

    m = grid.length;
    n = grid[0].length;

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // If the current grid is a land, erase ALL neighboring landds
            if (grid[i][j] === '1') {
                dfsEraseLand(grid, i, j);
                // Do *NOT* forget to increment the counter after removing the nearby lands
                ++count;
            }
        }
    }

    return count;
};
