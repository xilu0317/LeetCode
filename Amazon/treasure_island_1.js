(() => {
    const grid = [['O', 'O', 'O', 'O'],
                  ['D', 'O', 'D', 'O'],
                  ['O', 'O', 'O', 'O'],
                  ['X', 'D', 'D', 'O']];

    // unit vector
    const [dx, dy] = [[0, 1, 0, -1], [1, 0, -1, 0]];
    const x = 0, y = 0, lenX = grid[0].length - 1, lenY = grid.length - 1;

    // BFS apporach
    const treasureIsland = () => {
        let root = {
            x: x,
            y: y,
            val: 'O',
            step: 0
        };

        let q = [root];
        while (q.length) {
            let cur = q.shift();

            // got the treasure
            if (cur.val === 'X')
                return cur.step;

            // use unit vector to reduce code reps
            for (let i = 0; i < dx.length; i++) {
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
                let [nextX, nextY] = [cur.x + dx[i], cur.y + dy[i]];

                // give up the current exploration once hit 'D'
                if (!isSafe(nextX, nextY, lenX, lenY))
                    continue;

                let next = {
                    x: nextX,
                    y: nextY,
                    val: grid[nextX][nextY],
                    step: cur.step + 1
                }

                // mark as visisted
                grid[nextX][nextY] = 'D';
                q.push(next);
            }
        }

        return -1;
    };

    // De Morgan
    const isSafe = (x, y, width, height) => {
        return x >= 0 && x <= width && y >= 0 && y <= height && grid[x][y] !== 'D';
    };

    // run test code
    console.log('min step => ' + treasureIsland());
})();
