// 1, 2, ... , 10
let arr = Array(10).fill().map((x, y) => y + 1)

// summation
arr.reduce((acc, cur) => acc + cur, 0)

// product
arr.reduce((acc, cur) => acc * cur, 1)

