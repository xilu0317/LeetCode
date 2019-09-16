const comp = (a, b) => {
    let str1 = a.toString() + b.toString();
    let str2 = b.toString() + a.toString();

    if (str1 > str2) return -1;

    return 1;
};

const largestNumber = (nums) => {
    let res = nums.sort(comp).join('');

    if ([...res].every(x => x === '0')) return '0';

    return res;
};
