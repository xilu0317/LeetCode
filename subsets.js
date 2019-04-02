const subsets = (nums) => {
  return backtrack(nums, 0, [], []);
}

const backtrack = (nums, start, set, res) => {

  res.push(set);

  for(let i = start; i < nums.length; i++) {
    set.push(nums[i]);

    backtrack(nums, i + 1, Array.from(set), res);

    set.pop();
  }

  return res;
}

// [IMPORTANT]
// `[...stack]` or `Array.from(stack)`
// The above will create a new array with different memeory address/reference
// If we don't use the deep copied array, stack will be the same everywhere.
// In such case, res = [ [1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3] ] since stack is a shallow copy being shared

// Also note that I intentionally name the current set to stack to remind myself this is a DFS backtrack style problem
// Please study this with Binary Tree pre-order traversal's iterative approach -- the `notebook + forest exploration story`