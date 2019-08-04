const mostCommonWord = (paragraph, banned) => {
    let words = [];
    for (let word of paragraph.split(/\W+/)) {
        words.push(word.toLowerCase());
    }

    let dict = {};
    for (let word of words) {
        if (!dict[word]) {
            dict[word] = 1;
        } else {
            dict[word]++;
        }
    }

    let set = new Set(banned);
    let max = -1;
    let myKey = null;
    for (let key in dict) {
        if (!set.has(key)) {
            if (dict[key] > max) {
                max = dict[key];
                myKey = key;
            }
        }
    }

    return myKey;
};