(function main() {
    const grid = [['O', 'O', 'O', 'O'],
                  ['D', 'O', 'D', 'O'],
                  ['O', 'O', 'O', 'O'],
                  ['X', 'D', 'D', 'O']];

    const isSafe = (x, y, width, height) => {
        return x >= 0 && x <= width && y >= 0 && y <= height && grid[x][y] !== 'D';
    };
    // unit vector, destructuring
    const [dx, dy] = [[0, 1, 0, -1], [1, 0, -1, 0]];

    // destructring
    const [startX, startY, endX, endY] = [0, 0, grid[0].length - 1, grid.length - 1];

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

            // got treasure
            if (cur.val === 'X') {
                return cur.step;
            }

            for (let i = 0; i < dx.length; i++) {
                let [nextX, nextY] = [cur.x + dx[i], cur.y + dy[i]];

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
}());
