const isValidSudoku = (board) => {
    for (let i = 0; i < 9; i++) {
        let rows = new Set()
        let cols = new Set()
        let cube = new Set()

        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (rows.has(board[i][j])) return false

                rows.add(board[i][j])
            }

            if (board[j][i] !== '.') {
                if (cols.has(board[j][i])) return false

                cols.add(board[j][i])
            }

            // KEY = index conversion to the small box
            let boxRow = 3 * parseInt(i / 3) + parseInt(j / 3)
            let boxCol = 3 * (i % 3) + j % 3
            // small box
            if (board[boxRow][boxCol] !== '.') {
                if (cube.has(board[boxRow][boxCol])) return false

                cube.add(board[boxRow][boxCol])
            }
        }
    }

    return true
}
