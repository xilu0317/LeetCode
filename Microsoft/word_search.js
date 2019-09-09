// 'visited' is used to distinguish visited and unvisited nodes
let visited;
let m;
let n;

const exist = (board, word) => {
    m = board.length;
    n = board[0].length;
    // Underlying visit map is to mark the visit status
    visited = Array(m)
                .fill()
                .map(x => Array(n).fill(false));

    // Try every starting point
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (search(board, word, i, j, 0)) return true;
        }
    }

    return false;
};

const search = (board, word, i, j, index) => {
    if (index === word.length) return true;

    // Check exit condition
    // 1) search is false if out of bound
    // 2) search is false if current letter is not the same as the word[index]
    // 3) search is false if we have already visited the spot
    if (i < 0 || i >= m || j < 0 || j >= n
        || visited[i][j]
        || board[i][j] !== word[index]) {
        return false;
    }

    // Mark as visited
    visited[i][j] = true;

    // Recursively visits all grids
    if (search(board, word, i - 1, j, index + 1) ||
        search(board, word, i + 1, j, index + 1) ||
        search(board, word, i, j - 1, index + 1) ||
        search(board, word, i, j + 1, index + 1)
    ) return true;

    // Erase marks so you can start a brand new search starting from a different node
    visited[i][j] = false;

    // If it gets this far and not found in using 'search' return false
    return false;
};
