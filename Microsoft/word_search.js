// 'visited' is used to distinguish visited and unvisited nodes
let visited, m, n

const exist = (board, word) => {
    m = board.length
    n = board[0].length
    // Underlying visit map is to mark the visit status
    visited = Array(m).fill()
                      .map(() => Array(n).fill(false))

    // Try every starting point
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfsSearch(board, word, i, j, 0)) return true
        }
    }

    return false
}

const dfsSearch = (board, word, i, j, index) => {
    if (index === word.length) return true

    // Check exit condition
    // 1) dfsSearch is negative, if out of bound
    // 2) dfsSearch is negative, if we have already visited the grid
    // 3) dfsSearch is negative, if current letter is NOT the same as the word[index]
    if (i < 0 || i >= m || j < 0 || j >= n ||
        visited[i][j] ||
        board[i][j] !== word[index]
    ) return false

    // Mark as visited
    visited[i][j] = true

    // Recursively visits all grids
    if (dfsSearch(board, word, i - 1, j, index + 1) ||
        dfsSearch(board, word, i + 1, j, index + 1) ||
        dfsSearch(board, word, i, j - 1, index + 1) ||
        dfsSearch(board, word, i, j + 1, index + 1)
    ) return true

    // Erase marks so you can start a brand new 'dfsSearch' starting from a different node
    visited[i][j] = false

    // If it gets this far and haven't found the word then the current search is negative
    return false
}
