/**
 * @param {number[]} nums
 * @return {number}
 */
const searchMin = (nums, lo, hi) => {
  // Please use Math.floor for javascripot
  // Avoid (lo+hi)/2 to avoid integer overflow
  let mid = lo + Math.floor((hi-lo)/2);

  // covers the normal case of `cliff drop`
  if (nums[mid] > nums[mid+1]) return nums[mid+1];
  
  // covers the special case of `normal` ascending AFTER handling the `cliff drop`
  if (mid === 0) return nums[0];

  // note `mid+1 and mid-1` won't work
  if (nums[mid] > nums[hi]) {
    return searchMin(nums, mid, hi);
  } else {
    return searchMin(nums,lo, mid);
  }
}

const findMin = (nums) => {
  return searchMin(nums,0, nums.length-1);
};

console.log(findMin([2,1]));//1
console.log(findMin([1,2,3,4]));//1
console.log(findMin([2,3,4,5,6,1]));//1
console.log(findMin([1]));//1
