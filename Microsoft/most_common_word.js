const mostCommonWord = (paragraph, banned) => {
    if (!paragraph) return null;

    let words = paragraph.split(/\W+/)
                         .filter(x => x !== '')
                         .map(x => x.toLowerCase());

    let dict = {};
    for (let word of words) {
        if (!dict[word])
            dict[word] = 1;
        else
            dict[word]++;
    }

    let set = new Set(banned);
    let max = -Infinity, maxKey = null;

    for (let key in dict) {
        if (!set.has(key)) {
            if (dict[key] > max) {
                max = dict[key];
                maxKey = key;
            }
        }
    }

    return maxKey;
};
