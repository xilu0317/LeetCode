/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let q = [];
    let fresh = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            } else if (grid[i][j] === 2) {
                q.push([i, j]);
            }
        }
    }

    if (fresh === 0) return 0;

    let dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    let step = 0;

    while (q.length) {
        let qlen = q.length;
        for (let i = 0; i < qlen; i++) {
            let [x, y] = q.shift();
            for (let dir of dirs) {
                let [nx, ny] = [x + dir[0], y + dir[1]];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] !== 1) {
                    continue;
                }
                grid[nx][ny] = 2;
                q.push([nx, ny]);
                fresh--;
            }
        }
        step++;
    }

    if (fresh != 0) {
        return -1;
    }

    return step - 1;
};