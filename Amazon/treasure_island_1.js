// TODO: solution wrong
(() => {
    let grid = [['O', 'O', 'O', 'O'],
                ['D', 'O', 'D', 'O'],
                ['O', 'O', 'O', 'O'],
                ['X', 'O', 'O', 'O']];

    let m, n, min;

    const treasureIsland = (grid) => {
        if (!grid || !grid.length) return -1;

        m = grid.length;
        n = grid[0].length;
        min = Infinity;

        dfs(grid, 0, 0, 0);

        return min;
    };

    const dfs = (grid, i, j, step) => {
        if (i < 0 || j < 0 || i === m || j === n || grid[i][j] === 'D')
            return;

        if (grid[i][j] === 'X') {
            min = Math.min(min, step);
            return;
        }

        step++;

        // mark as visited
        grid[i][j] = 'D';

        dfs(grid, i + 1, j, step);
        dfs(grid, i - 1, j, step);
        dfs(grid, i, j + 1, step);
        dfs(grid, i, j - 1, step);

        // unmark as unvisited
        grid[i][j] = 'O';
    };

    // test stuff
    console.log();
    console.log('Min steps taken to get treasure ==> ' + treasureIsland(grid));
})();
