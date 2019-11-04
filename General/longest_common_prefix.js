const longestCommonPrefix = (strs) => {
    if (!strs || !strs.length) return ''

    // NOTE: spread operator used with Math.min
    // Another way to do it Math.min.apply(null, [1, 2, 3])
    let minLen = Math.min(...strs.map(x => x.length))

    let res = ''
    for (let i = 0; i < minLen; i++) {
        let common = strs[0][i]

        if (strs.map(x => x[i]).every(x => x === common))
            res += common
        else
            break
    }

    return res
}
