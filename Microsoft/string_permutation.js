const getAllPermutations = (word) => {
    let res = []

    if (word.length === 1) {
        res.push(word)

        return res
    }

    for (let i = 0; i < word.length; i++) {
        let first = word[i]
        let rest = word.substring(0, i) + word.substring(i + 1)

        let perms = getAllPermutations(rest)
        for (let j = 0; j < perms.length; j++) {
            res.push(first + perms[j])
        }
    }

    return res
}
