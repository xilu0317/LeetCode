function subsets(nums) {
  return backtrack(nums, 0, [], []);
}

function backtrack(nums, startIndex, subset, powerset) {
  nums.sort()
  powerset.push(subset);

  for(let i = startIndex; i < nums.length; i++) {
    subset.push(nums[i]);
    backtrack(nums, i+1, subset, powerset);
    
    subset.pop();
    //console.log(subset)
  }
  
  return powerset;
}

subsets([1,2,3]);