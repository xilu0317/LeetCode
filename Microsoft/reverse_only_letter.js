const reverseOnlyLetters = (S) => {
    if (!S) return S

    let letterRegex = /\b[a-z]\b/i
    let stack = []

    for (let i = 0; i < S.length; i++) {
        if (letterRegex.test(S[i]))
            stack.push(S[i])
    }

    let res = []
    for (let i = 0; i < S.length; i++) {
        if (letterRegex.test(S[i]))
            res.push(stack.pop())
        else
            res.push(S[i])
    }

    return res.join('')
}
