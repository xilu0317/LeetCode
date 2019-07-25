function getAllPermutations(word) {
    var results = [];

    if (word.length === 1) {
        results.push(word);
        return results;
    }

    for (var i = 0; i < word.length; i++) {
        var firstChar = word[i];
        var charsLeft = word.substring(0, i) + word.substring(i + 1);
        var innerPermutations = getAllPermutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }

    return results;
}


getAllPermutations('abc');