/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  let list = [];
  backtrack(list, '', 0, 0, n);
  return list;
};

// This is backtrack but however it is less akin to the dfs.
// It doesn't seem to have the notion of children.
const backtrack = (list, str, open, close, max) => {
  // exit condition
  if (str.length === max * 2) {
    list.push(str);
    return;
  }

  // number of open bracket less than the max number of brackets allowed
  if (open < max) backtrack(list, str + '(', open + 1, close, max);
  // if the number of close bracket is lower than the open bracket recurse
  if (close < open) backtrack(list, str + ')', open, close + 1, max);
}