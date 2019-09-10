// https://leetcode.com/problems/valid-tic-tac-toe-state/

/**
 * @param {string[]} board
 * @return {boolean}
 */

// When turns is 1, X moved.When turns is 0, O moved.rows stores the number of X or O in each row.
// cols stores the number of X or O in each column.
// diag stores the number of X or O in diagonal.
// antidiag stores the number of X or O in antidiagonal.
// When any of the value gets to 3, it means X wins.
// When any of the value gets to - 3, it means O wins.

// When X wins, O cannot move anymore, so turns must be 1.
// When O wins, X cannot move anymore, so turns must be 0.
// Finally, when we return, turns must be either 0 or 1, and X and O cannot win at same time.

const validTicTacToe = (board) => {
    let turns = 0;
    let xwin = false;
    let owin = false;
    let rows = Array(3).fill(0);
    let cols = Array(3).fill(0);
    let diag = 0;
    let antidiag = 0;


    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'X') {
                turns++; rows[i]++; cols[j]++;
                if (i === j) diag++;
                if (i + j === 2) antidiag++;
            } else if (board[i][j] === 'O') {
                turns--; rows[i]--; cols[j]--;
                if (i === j) diag--;
                if (i + j === 2) antidiag--;
            }
        }
    }

    xwin = rows[0] === 3 || rows[1] === 3 || rows[2] === 3 ||
        cols[0] === 3 || cols[1] === 3 || cols[2] === 3 ||
        diag === 3 || antidiag === 3;
    owin = rows[0] === -3 || rows[1] === -3 || rows[2] === -3 ||
        cols[0] === -3 || cols[1] === -3 || cols[2] === -3 ||
        diag === -3 || antidiag === -3;

    if (xwin && turns === 0 || owin && turns === 1) {
        return false;
    }
    return (turns === 0 || turns === 1) && (!xwin || !owin);
};
