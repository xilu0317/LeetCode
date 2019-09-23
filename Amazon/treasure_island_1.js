// BFS
(() => {
    const grid = [['O', 'O', 'O', 'O'],
                  ['D', 'O', 'D', 'O'],
                  ['O', 'O', 'O', 'O'],
                  ['X', 'D', 'D', 'O']];

    const isSafe = (x, y, width, height) => {
        return x >= 0 && x <= width && y >= 0 && y <= height && grid[x][y] !== 'D';
    };
    // unit vector, destructuring
    const [dx, dy] = [[0, 1, 0, -1], [1, 0, -1, 0]];

    const startX = 0, startY = 0, endX = grid[0].length - 1, endY = grid.length - 1;

    const minStep = () => {
        let node = {
            x: startX,
            y: startY,
            val: 'O',
            step: 0,
        };

        let q = [node];
        while (q.length) {
            let cur = q.shift();

            // got the treasure
            if (cur.val === 'X') {
                return cur.step;
            }

            // use unit vector to reduce code reps
            for (let i = 0; i < dx.length; i++) {
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
                let [nextX, nextY] = [cur.x + dx[i], cur.y + dy[i]];

                // give up current exploration once hit 'D'
                if (!isSafe(nextX, nextY, endX, endY))
                    continue;

                let next = {
                    x: nextX,
                    y: nextY,
                    val: grid[nextX][nextY],
                    step: cur.step + 1,
                }

                // mark as visisted
                grid[nextX][nextY] = 'D';
                q.push(next);
            }
        }

        return -1;
    };

    // test the code
    console.log('min step => ' + minStep());
})();
