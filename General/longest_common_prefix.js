const longestCommonPrefix = (strs) => {
    if (!strs || !strs.length) return ''

    // NOTE: spread operator used with Math.min
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
