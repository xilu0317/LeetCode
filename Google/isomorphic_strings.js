const isIsomorphic = (s, t) => {
    if (s === null || t === null) return false;
    if (s.length !== t.length) return false;

    let dict1 = {}, dict2 = {};

    for (let i = 0; i < s.length; i++) {
        if (!dict1[s[i]]) {
            dict1[s[i]] = t[i];
        } else {
            if (dict1[s[i]] !== t[i]) return false;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!dict2[t[i]]) {
            dict2[t[i]] = s[i];
        } else {
            if (dict2[t[i]] !== s[i]) return false;
        }
    }

    return true;
};
