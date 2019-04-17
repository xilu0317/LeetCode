/**
 * @param {string} digits
 * @return {string[]}
 */



const letterCombinations = (digits) => {
  if (!digits) return [];
  // to share the data across all recursed methods, I am passing them in
  let res = [];
  const dict = {};
  dict['2'] = 'abc';
  dict['3'] = 'def';
  dict['4'] = 'ghi';
  dict['5'] = 'jkl';
  dict['6'] = 'mno';
  dict['7'] = 'pqrs';
  dict['8'] = 'tuv';
  dict['9'] = 'wxyz';

  backTrack('', digits, res, dict);
  return res;
};

// effective this is some form of DFS
// thus, this can be done by stack too
const backTrack = (combinations, digits, res, dict) => {
  if (!digits.length) {
    res.push(combinations);
    return;
  }

  let digit = digits[0];
  let letters = dict[digit];

  for (let char of letters) {
    backTrack(combinations + char, digits.substring(1), res, dict);
  }
}


