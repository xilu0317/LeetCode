// Initially, I had not read the Hint in the question and came up with an O(n) solution.
// After reading the extremely helpful hint; a much easier approach became apparent.
// The key observation is that in order to win Tic - Tac - Toe you must have the entire row or column.
// Thus, we don't need to keep track of an entire n^2 board.
// We only need to keep a count for each row and column.
// If at any time a row or column matches the size of the board then that player has won.

// To keep track of which player, I add one for Player1 and - 1 for Player2.
// There are two additional variables to keep track of the count of the diagonals.
// Each time a player places a piece we just need to check the count of that row, column, diagonal and anti - diagonal.

// Also see a very similar answer that I believe had beaten me to the punch.We came up with our solutions independently but they are very similar in principle.

/** Player {player} makes a move at ({row}, {col}).
@param row The row of the board.
@param col The column of the board.
@param player The player, can be either 1 or 2.
@return The current winning condition, can be either:
        0: No one wins.
        1: Player 1 wins.
        2: Player 2 wins. */

class TicTacToe {

    constructor(n) {
        this.rows = Array(n).fill(0);
        this.cols = Array(n).fill(0);
        // Please remember to initialize the numbers here
        this.diagonal = 0;
        this.antiDiagonal = 0;
    }

    move(row, col, player) {
        let toAdd = player === 1 ? 1 : -1;

        this.rows[row] += toAdd;
        this.cols[col] += toAdd;

        if (row === col) {
            this.diagonal += toAdd;
        }

        if (col === (this.cols.length - row - 1)) {
            this.antiDiagonal += toAdd;
        }

        let size = this.rows.length;
        if (Math.abs(this.rows[row]) === size ||
            Math.abs(this.cols[col]) === size ||
            Math.abs(this.diagonal) === size ||
            Math.abs(this.antiDiagonal) === size) {
            return player;
        }

        return 0;
    }
}
