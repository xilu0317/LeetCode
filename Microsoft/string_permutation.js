const getAllPermutations = (word) => {
    const res = [];

    if (word.length === 1) {
        res.push(word);

        return res;
    }

    for (let i = 0; i < word.length; i++) {
        let firstChar = word[i];
        let restChars = word.substring(0, i) + word.substring(i + 1);

        let innerPerms = getAllPermutations(restChars);
        for (let j = 0; j < innerPerms.length; j++) {
            res.push(firstChar + innerPerms[j]);
        }
    }

    return res;
};

// test case
getAllPermutations('abc');
