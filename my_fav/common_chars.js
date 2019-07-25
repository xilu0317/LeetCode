/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    // 1) please use map, otherwise the copied object will copy by reference
    // 2) you cannot return {} while using the arrow function, use `new Ojbect()` instead
    let arrOfDict = Array(A.length).fill().map(() => new Object());

    for (let i = 0; i < A.length; i++) {
        let curDict = arrOfDict[i];
        let word = A[i];
        for (let j = 0; j < word.length; j++) {
            if (!curDict[word[j]]) {
                curDict[word[j]] = 1;
            } else {
                curDict[word[j]]++;
            }
        }
    }

    let res = arrOfDict.reduce((acc, cur) => dictSubtraction(acc, cur), arrOfDict[0]);

    // The object flattening is not really necessary here, note the reduce method cannot be used on objects
    return Object.entries(res).reduce((acc, cur) => acc.concat(Array(cur[1]).fill(cur[0])), []);
};

var dictSubtraction = (dict1, dict2) => {
    if (dict1 === null || Object.keys(dict1).length === 0) {
        return {};
    }

    if (dict2 === null || Object.keys(dict2).length === 0) {
        return {};
    }

    for (let key in dict1) {
        if (dict2[key]) {
            dict1[key] = Math.min(dict1[key], dict2[key]);
            if (dict1[key] === 0) {
                delete dict1[key];
            }
        } else {
            delete dict1[key];
        }
    }

    return dict1;
}
