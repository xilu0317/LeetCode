// The key to solving this problem is observe the undlying mathmatical property
// sum = sum of the current array
// m = number of steps to make the array all equal
// n = length of the list
// x = the unkown equal target number

// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

// equation 1: this is basically the statement of our problem
// m evolutions to (n - 1) elements, each evolution increments n - 1 elements by 1
// sum + m * 1 * (n - 1) = x * n

// equation 2: the min after m evolutions will become x
// min + m = x

// unite eq 1 and eq 2 and solve for m
// sum - min * n = m

const minMoves = (nums) => {
    if (!nums) return -1

    let sum = nums.reduce((acc, cur) => acc + cur)
    let min = Math.min.apply(null, nums)
    let len = nums.length

    return sum - len * min
}
