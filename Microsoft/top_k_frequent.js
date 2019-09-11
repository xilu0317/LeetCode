const buildDict = (words) => {
    const dict = {};

    for (let word of words) {
        if (!dict[word]) {
            dict[word] = 1;
        } else {
            dict[word]++;
        }
    }

    return dict;
};

// This is the most important part!
const comp = (a, b) => {
    // descending count order. ie entry with max count will appear first
    if (b[1] > a[1]) return 1;
    if (a[1] > b[1]) return -1;

    // If equal then order alphabetically

    // ascending lexicographical order
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    if (a[0] === b[0]) return 0;
};

const topKFrequent = (words, k) => {
    if (!words || k <= 0) throw 'Illegal argument exception!';

    const dict = buildDict(words);

    let res = Object.entries(dict)
        .sort(comp)
        .map(x => x[0]);

    res.length = k;

    return res;
};

// test case
const res = topKFrequent(['a', 'z', 'd', 'b', 'b', 'b', 'd', 'z', 'z'], 4);
console.log(res);
