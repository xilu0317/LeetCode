let visited;
let rowLen;
let colLen;

const exist = (board, word) => {
    rowLen = board.length;
    colLen = board[0].length;
    // Underlying visit map is to mark the visit status
    visited = Array(rowLen).fill().map(x => Array(colLen).fill(false));

    // Use every point as a starting point
    for (let i = 0; i < rowLen; ++i) {
        for (let j = 0; j < colLen; ++j) {
            if (search(board, word, i, j, 0)) return true;
        }
    }

    return false;
};

// why a grid needs to be marked as visisted?
// This is because that it is like the visit flag which will allow the algorithm to avoid redundent visits

const search = (board, word, i, j, index) => {
    if (index === word.length) return true;

    // Validating boundary edge cases
    if (i < 0 || i >= rowLen ||
        j < 0 || j >= colLen ||
        board[i][j] !== word[index] ||
        visited[i][j]) return false;

    // Mark as visited
    visited[i][j] = true;

    // Recursively visits all grids
    if (search(board, word, i - 1, j, index + 1) ||
        search(board, word, i + 1, j, index + 1) ||
        search(board, word, i, j - 1, index + 1) ||
        search(board, word, i, j + 1, index + 1)
    ) return true;


    // Mark as unvisited
    visited[i][j] = false;

    // If it gets this far and not found in using `search` return false
    return false;
};