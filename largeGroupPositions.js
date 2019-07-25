/**
 * @param {string} S
 * @return {number[][]}
 */

// Maintain two pointers `start` and `finish`
// Speical processing of the boundary condition where you have 'abbccbbbb'
// Note there is no way to use the `change of character` to detect the last group

var largeGroupPositions = (S) => {
    if (!S) return null;

    let start = 0;
    let finish = 0;
    let res = [];
    let len = S.length;

    while (finish < len) {
        if (S[start] === S[finish]) {
            finish++;
            // This is for checking the edge condition
            if (finish === len && finish - 1 - start >= 2) {
                res.push([start, finish - 1]);
            }
        } else {
            res.push([start, finish - 1]);
            start = finish;
        }
    }

    return res.filter(x => x[1] - x[0] >= 2);
};