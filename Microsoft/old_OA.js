
const isInOrder = (list) => {
    if (!list) return false;

    for (let i = 0; i < list.length; i++) {
        if (list[i] < list[i + 1]) return false;
    }

    return true;
};

const removeLetters = (s) => {
    if (!s) return -1;

    const dict = {};
    for (const c of s) {
        if (!dict[c]) {
            dict[c] = 1;
        } else {
            dict[c]++;
        }
    }

    let list = [];
    for (let key in dict) {
        list.push(dict[key]);
    }
    list.sort((a, b) => b - a);

    let count = 0;
    let i = 1;
    while (i < list.length) {
        if (list[i] === list[i - 1]) {
            if (list[i]) {
                list[i]--;
                count++;
            }
        }
        i++;

        if (!isInOrder(list)) {
            list.sort((a, b) => b - a);
            i = 1;
        }
    }

    return count;
};

// =====
console.log(removeLetters('example'));
// =====

// problem 2

const num2Arr = (num) => {
    if (!num) return null;

    let list = [];

    while (num > 0) {
        list.push(num % 10);
        num = Math.floor(num / 10);
    }

    return list;
};

const intSum = (list) => {
    if (!list || !list.length) return -1;

    const dict = {};
    for (let item of list) {
        let itemArr = num2Arr(item);
        let sum = itemArr.reduce((acc, cur) => acc + cur);
        if (!dict[sum]) {
            dict[sum] = [];
            dict[sum].push(item);
        } else {
            dict[sum].push(item);
        }
    }

    const res = [];
    for (let key in dict) {
        dict[key].sort((a, b) => b - a);
        if (dict[key].length > 1) {
            sum = dict[key][0] + dict[key][1];
            res.push(sum);
        }
    }

    res.sort((a, b) => b - a);

    return res[0];
};

console.log(intSum([51, 71, 17, 42]));
console.log(intSum([42, 33, 60]));
