const missingNumber = (nums) => {
    if (!nums) return null;

    let res = 0;
    // The reason that the len here is nums.length + 1 is because the index + 1 can be a number
    for (let i = 0; i < nums.length + 1; i++) {
        res ^= (i ^ nums[i]);
    }

    return res;
};

// Option 2: use ES6 set
const missingNumber = (nums) => {
    let s = new Set();
    for (let num of nums) {
        s.add(num);
    }

    let i; // scope
    for (i = 0; i < nums.length; i++) {
        if (!s.has(i))
            return i;
    }

    return i;
};
