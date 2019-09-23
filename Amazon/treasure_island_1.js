// TODO: solution wrong
(() => {
    let grid = [['O', 'O', 'O', 'O'],
                ['D', 'O', 'D', 'O'],
                ['O', 'D', 'O', 'O'],
                ['X', 'O', 'O', 'O']];

    // unit vector
    let [dx, dy] = [[0, 1, 0, -1], [1, 0, -1, 0]];
    let x = 0, y = 0, lenX = grid[0].length, lenY = grid.length;

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

            // got the treasure, this is the 'do' part
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
                };

                // mark as visisted
                grid[nextX][nextY] = 'D';
                q.push(next);
            }
        }

        return -1;
    };

    // De Morgan
    const isSafe = (x, y, width, height) => {
        return x >= 0 && x < width && y >= 0 && y < height && grid[x][y] !== 'D';
    };

    // run test code
    if (treasureIsland() === 5)
        console.log('### PASS ###');
    else
        console.log('### FAIL ###');
    console.log('steps = ' + treasureIsland());
})();
