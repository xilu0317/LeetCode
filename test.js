const subsets = (nums) => {
  return backtrack(nums, 0, [], []);
}

const backtrack = (nums, start, stack, res) => {

  res.push(stack);

  for(let i = start; i < nums.length; i++) {
    stack.push(nums[i]);
    // [...subset] is the key part here
    // the above will give a new array with different address
    backtrack(nums, i+1, Array.from(stack), res);
    
    stack.pop();
  }
  
  return res;
}

subsets([1,2,3]);