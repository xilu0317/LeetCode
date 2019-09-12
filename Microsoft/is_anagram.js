const isAnagram = (s, t) => {
    if (s === null || t === null) return false;
    if (s.length !== t.length) return false;
    if (s === '' && t === '') return true;

    let sDict = {}, tDict = {};

    for (let c of s) {
        if (!sDict[c]) {
            sDict[c] = 1;
        } else {
            sDict[c]++;
        }
    }

    for (let c of t) {
        if (!tDict[c]) {
            tDict[c] = 1;
        } else {
            tDict[c]++;
        }
    }

    for (let key in sDict) {
        if (sDict[key] !== tDict[key]) return false;
    }

    return true;
};
