/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = (dungeon) => {
    if (!dungeon) return -1;

    let m = dungeon.length;
    let n = dungeon[0].length;

    // build an underlying matrix for DP
    let mat = Array(m + 1).fill(Infinity)
              .map(() => Array(n + 1).fill(Infinity));

    mat[m][n - 1] = 1;
    mat[m - 1][n] = 1;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let need = Math.min(mat[i + 1][j], mat[i][j + 1]) - dungeon[i][j];
            mat[i][j] = need <= 0 ? 1 : need;
        }
    }

    return mat[0][0];
};