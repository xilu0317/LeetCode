const gameOfLife = (board) => {
  if (!board) return null;

  let rowLen = board.length;
  let colLen = board[0].length;

  let updateMatrix = Array(rowLen).fill().map(() => Array(colLen).fill(0));

  for (let i = 0; i < rowLen; ++i) {
    for (let j = 0; j < colLen; ++j) {
      updateCell(board, updateMatrix, i, j);
    }
  }

  for (let i = 0; i < rowLen; ++i) {
    for (let j = 0; j < colLen; ++j) {
      board[i][j] += updateMatrix[i][j];
      if (board[i][j] < 0) board[i][j] = 0;
    }
  }
};

const updateCell = (board, updateMatrix, i, j) => {
  // Any live cell with fewer than two live neighbors dies, as if caused by under-population.
  if (board[i][j] === 1 && getLiveNbs(board, i, j) < 2) updateMatrix[i][j] = -1;
  
  // Any live cell with two or three live neighbors lives on to the next generation.
  if (board[i][j] === 1 && (getLiveNbs(board, i, j) === 2 || getLiveNbs(board, i, j) === 3)) updateMatrix[i][j] = 0;
  
  // Any live cell with more than three live neighbors dies, as if by over-population..
  if (board[i][j] === 1 && getLiveNbs(board, i, j) > 3) updateMatrix[i][j] = -1;
  
  // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
  if (board[i][j] === 0 && getLiveNbs(board, i, j) === 3) updateMatrix[i][j] = 1;
};

const getLiveNbs = (board, i, j) => {
  let liveCellCount = 0;

  if (i - 1 >= 0 && j - 1 >= 0 && board[i - 1][j - 1] > 0) liveCellCount++;
  if (i - 1 >= 0 && board[i - 1][j] > 0) liveCellCount++;
  if (i - 1 >= 0 && j + 1 < board[0].length && board[i - 1][ j + 1] > 0) liveCellCount++;

  if (j - 1 >= 0 && board[i][j - 1] > 0) liveCellCount++;
  if (j + 1 < board[0].length && board[i][j + 1] > 0) liveCellCount++;

  if (i + 1 < board.length && j - 1 >= 0 && board[i + 1][j - 1] > 0) liveCellCount++;
  if (i + 1 < board.length && board[i + 1][j] > 0) liveCellCount++;
  if (i + 1 < board.length && j + 1 < board[0].length && board[i + 1][j + 1] > 0) liveCellCount++;

  return liveCellCount;
};