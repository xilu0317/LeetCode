const buildDict = (nums) => {
    let dict = {};

    // Note the usage of 'of' instead of 'in' here
    // The value of 'of' is the content of the current element of the list
    // The value of 'in' indicates the current index of the list
    for (let value of nums) {
        if (!dict[value]) {
            dict[value] = 1;
        } else {
            dict[value]++;
        }
    }

    return dict;
};

const topKFrequent = (nums, k) => {
    if (nums === null || k <= 0) throw 'Illegal argument exception!';

    let dict = buildDict(nums);
    let res = Object.entries(dict)
                    .sort((a, b) => b[1] > a[1])
                    .map(x => x[0]);

    res.length = k;

    return res;
};

// test case
console.log(topKFrequent([6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0], 6));
