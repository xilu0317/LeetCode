const letterCombinations = (digits) => {
  // exit condition
  if (!digits) return [];

  // data setup
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

// Effectively this is some form of recurisve DFS. Thus, this can be done by stack too.
// Please review DFS files for details.
// To share the data across all recursed methods, I am passing them in.
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
