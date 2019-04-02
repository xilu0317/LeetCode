const subsets = (nums) => {
  return _subsets(nums, 0, [], []);
}

const _subsets = (nums, start, set, res) => {

  res.push(set);

  for(let i = start; i < nums.length; i++) {
    set.push(nums[i]);
    // [...subset] is the key part here
    // the above will give a new array with different address
    _subsets(nums, i+1, Array.from(set), res);
    
    set.pop();
  }
  
  return res;
}

