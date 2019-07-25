let visited;

const exist = (board, word) => {
    let rowLen = board.length;
    let colLen = board[0].length;
    visited = Array(rowLen).fill().map(x => Array(colLen).fill(false));

    for (let i = 0; i < rowLen; ++i) {
        for (let j = 0; j < colLen; ++j) {
            if (search(board, word, i, j, 0)) return true;
        }
    }

    return false;
};

const search = (board, word, i, j, index) => {
    if (index === word.length) return true;

    // validating boundary edge cases
    if (i < 0 || i >= board.length ||
        j < 0 || j >= board[i].length ||
        board[i][j] !== word[index] ||
        visited[i][j]) return false;

    // mark as visited
    visited[i][j] = true;

    if (search(board, word, i - 1, j, index + 1) ||
        search(board, word, i + 1, j, index + 1) ||
        search(board, word, i, j - 1, index + 1) ||
        search(board, word, i, j + 1, index + 1)
    ) return true;

    // unmark as unvisited 
    visited[i][j] = false;

    // if it gets this far and not found in using `search` return false
    return false;
};