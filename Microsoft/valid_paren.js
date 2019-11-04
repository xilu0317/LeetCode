const isValid = (string) => {
    let stack = []
    let dict = {
        '{': '}',
        '[': ']',
        '(': ')',
    }

    for (let c of string) {
        if (c === '{' || c === '[' || c === '(')
            stack.push(c)
        else
            if (c !== dict[stack[stack.length - 1]])
                return false
            else
                stack.pop()
    }

    return stack.length === 0
}
