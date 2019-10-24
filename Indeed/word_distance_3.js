// NOTE: don't forget absolute value
const shotestwordDist = (words, w1, w2) => {
    let dict = {};
    let min = Infinity;

    for (let i = 0; i < words.length; i++) {
        if (!dict[words[i]])
            dict[words[i]] = [];

        dict[words[i]].push(i);
    }

    // when words equal, compare with its own arr
    if (w1 === w2) {
        let arr = dict[w1];
        for (let i = 0; i < arr.length - 1; i++) {
            min = Math.abs(Math.min(min, arr[i + 1] - arr[i]));
        }

        return min;
    }

    // when words are not equal, compare with arr associated with words
    let arr1 = dict[w1], arr2 = dict[w2];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            min = Math.abs(Math.min(min, arr1[i] - arr2[j]));
        }
    }

    return min;
};
