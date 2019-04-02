const subsets = (nums) => {
  return backtrack(nums, 0, [], []);
}

const backtrack = (nums, startIndex, stack, res) => {

  res.push(stack);

  for(let i = startIndex; i < nums.length; i++) {
    stack.push(nums[i]);

    backtrack(nums, i + 1, Array.from(stack), res);

    stack.pop();
  }

  return res;
}

// [IMPORTANT]
// `[...stack]` or `Array.from(stack)`
// The above will create a new array with different memeory address/reference
// If we don't use the deep copied array, stack will be the same everywhere.
// In such case, res = [ [1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3] ] since stack is a shallow copy being shared