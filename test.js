let boolMatrix;
let good = 0;

const updateNeighbor = (grid, i, j) => {
  let count = 0;
  
  // top
  if (i-1 >= 0 && grid[i-1][j] === 1) {
    boolMatrix[i-1][j] = true;
  }

  // bot
  if (i+1 < grid.length && grid[i+1][j] === 1) {
    boolMatrix[i+1][j] = true;
  }
  
  // left
  if (j-1 >= 0 && grid[i][j-1] === 1) {
    boolMatrix[i][j-1] = true;
  }
  
  // right
  if (j+1 < grid[i].length && grid[i][j+1] === 1) {
    boolMatrix[i][j+1] = true;
  }
}

const resetBoolMatrix = (lenRow, lenCol) => {
  boolMatrix = Array(lenRow).fill().map(()=>Array(lenCol).fill(false))
}

const isNbAll0 = (grid,i,j) => {
  let bool1 = true;
  let bool2 = true;
  let bool3 = true;
  let bool4 = true;

  // top
  if (i-1 >= 0 && grid[i-1][j] !== 0) bool1 = false;

  // bottom
  if (i+1 < grid.length && grid[i+1][j] !== 0) bool2 = false;
  
  // left
  if (j-1 >= 0 && grid[i][j-1] !== 0) bool3 = false;
  
  // right
  if (j+1 < grid[i].length && grid[i][j+1] !== 0) bool4 = false;

  return bool1 && bool2 && bool3 && bool4;
}

const existUnreachableNode = (grid) => {
  let lenRow = grid.length;
  let lenCol = grid[0].length;
  for (let i = 0; i < lenRow; i++) {
    for (let j = 0; j < lenCol; j++) {
      if (isNbAll0(grid,i,j) && grid[i][j] === 1) {
        return true;
      }
    }
  }
}

var orangesRotting = (grid) => {
  let lenRow = grid.length;
  let lenCol = grid[0].length;
  if (existUnreachableNode(grid)) {
    return -1;
  }

  resetBoolMatrix(lenRow, lenCol);

  for (var i = 0; i < lenRow; i++) {
    for (var j = 0; j < lenCol; j++) {
      if (grid[i][j] === 1) {
        good++;
      }
    }
  }

  let count = 0;
  while (good > 0) {
    for (var i = 0; i < lenRow; i++) {
      for (var j = 0; j < lenCol; j++) {
        if (grid[i][j] === 2){
          updateNeighbor(grid,i,j);
        }
      }
    }
    
    good = 0;
    for (let i = 0; i < lenRow; i++) {
      for (let j = 0; j < lenCol; j++) {
        if (boolMatrix[i][j]) {
          grid[i][j]=2;
        }

        if(grid[i][j]===1){
          good++;
        }
      }
    }
    count++;
    resetBoolMatrix(lenRow, lenCol);
  }

  return count;
}

console.log(orangesRotting([[2,1,0,2]]));