// scan the string from back to front
// maintain a counter whenever we encounter '#'
// if the counter exists we will just skip the current char

const getString = (s) => {
    let count = 0, res = ''

    for (let i = s.length - 1; i >= 0; i--) {
        let c = s[i]
        if (c === '#')
            count++
        else
            if (count > 0)
                count--
            else
                res += c
    }

    return res
}

const backspaceCompare = (S, T) => {
    return getString(S) === getString(T)
}
