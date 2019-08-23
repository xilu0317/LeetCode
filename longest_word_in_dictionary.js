const comp = (a, b) => {
    if (a.length > b.length) {
        return -1;
    }
    if (a.length < b.length) {
        return 1;
    }

    return a.localeCompare(b);
};

/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = (words) => {
    let s = new Set();

    // add to set
    for (let word of words) {
        s.add(word);
    }

    // build tire
    const root = {};
    for (const word of words) {
        let cur = root;
        for (const c of word) {
            cur[c] = cur[c] || {};
        }
    }

    // traverse trie
    let strArr = [];
    for (const word of words) {
        let cur = root;
        let str = '';
        for (const c of word) {
            if (cur[c]) {
                str += c;
                if (!s.has(str)) {
                    str = '';
                    break;
                }
            }
        }
        if (str.length) {
            strArr.push(str);
        }
    }

    return strArr.sort(comp)[0];
};