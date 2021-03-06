// https://leetcode.com/problems/valid-tic-tac-toe-state/

// When turns is 1, X moved.When turns is 0, O moved.rows stores the number of X or O in each row.
// cols stores the number of X or O in each column.
// diag stores the number of X or O in diagonal.
// antidiag stores the number of X or O in antidiagonal.
// When any of the value gets to 3, it means X wins.
// When any of the value gets to - 3, it means O wins.

// When X wins, O cannot move anymore, so turns must be 1.
// When O wins, X cannot move anymore, so turns must be 0.
// Finally, when we return, turns must be either 0 or 1, and X and O cannot win at same time.

/**
 * @param {string[]} board
 * @return {boolean}
 */
// TODO: revisit
const validTicTacToe = (board) => {
    // When turns is 1, X moved
    let turns = 0
    let diag = 0, antidiag = 0
    let rows = [0, 0, 0], cols = [0, 0, 0]
    let xWin = false, oWin = false

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'X') {
                turns++
                rows[i]++
                cols[j]++
                // diag
                if (i === j) diag++
                // anti-diag notice it is '2' not '3'
                if (i + j === 2) antidiag++
            } else if (board[i][j] === 'O') {
                turns--
                rows[i]--
                cols[j]--
                // diag
                if (i === j) diag--
                // anti-diag
                if (i + j === 2) antidiag--
            }
        }
    }

    // check 3 3 3 for 'x'
    xWin = rows[0] === 3 || rows[1]  === 3 || rows[2] === 3 ||
           cols[0] === 3 || cols[1]  === 3 || cols[2] === 3 ||
           diag    === 3 || antidiag === 3

    // check 3 3 3 for 'o'
    oWin = rows[0] === -3 || rows[1]  === -3 || rows[2] === -3 ||
           cols[0] === -3 || cols[1]  === -3 || cols[2] === -3 ||
           diag    === -3 || antidiag === -3

    // when 'x' has won, turn must be 1 per spec
    if (xWin && turns === 0 || oWin && turns === 1) return false

    // haven't finished the game configuration
    return (turns === 0 || turns === 1) && (!xWin || !oWin)
}
