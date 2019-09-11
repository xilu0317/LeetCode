// TODO: wrong solution
const getAllPermutations = (word) => {
    let res = [];

    if (word.length === 1) {
        res.push(word);

        return res;
    }

    for (let i = 0; i < word.length; i++) {
        let first = word[i];
        let rest = word.substring(0, i) + word.substring(i + 1);

        let perms = getAllPermutations(rest);
        for (let j = 0; j < perms.length; j++) {
            res.push(first + perms[j]);
        }
    }

    return res;
};

const checkInclusion = (s1, s2) => {
    let permList = getAllPermutations(s1);

    for (let word of permList) {
        if (s2.includes(word)) return true;
    }

    return false;
};
