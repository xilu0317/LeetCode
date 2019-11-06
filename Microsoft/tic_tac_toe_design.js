// The key observation is that in order to win TTT you must have the entire i or column.
// Thus, we don't need to keep track of an entire n^2 board.
// We only need to keep a count for each i and column.
// If at any time a i or column matches the size of the board then that player has won.

// To keep track of which player, I add 1 for Player1 and -1 for Player2.
// There are two additional variables to keep track of the count of the diagonals.
// Each time a player places a piece we just need to check the count of that i, column, diag and anti-diag.

/** Player {player} makes a move at ({i}, {j}).
@param i The i of the board.
@param j The column of the board.
@param player The player, can be either 1 or 2.
@return The current winning condition, can be either:
        0: No one wins.
        1: Player 1 wins.
        2: Player 2 wins. */
// TODO: revisit
class TicTacToe {
    constructor(n) {
        // it is better not to use a matrix
        this.rows = Array(n).fill(0)
        this.cols = Array(n).fill(0)
        this.diag = 0
        this.anttDiag = 0
    }

    move(i, j, player) {
        // note 'addOne' can be -1 for player 2
        let addOne = player === 1 ? 1 : -1

        // rows
        this.rows[i] += addOne

        // cols
        this.cols[j] += addOne

        // diag
        if (i === j)
            this.diag += addOne

        // anti-diag
        if ((j + i) === this.cols.length - 1)
            this.anttDiag += addOne

        let size = this.rows.length
        if (Math.abs(this.rows[i])  === size ||
            Math.abs(this.cols[j])  === size ||
            Math.abs(this.diag)     === size ||
            Math.abs(this.anttDiag) === size) {
            return player
        }

        return 0
    }
}
