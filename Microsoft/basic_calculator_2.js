const isDigit = (c) => {
    return !isNaN(c)
}

const calculate = (s) => {
    if (!s || !s.length) return 0

    // re-assign back to s
    s = s.replace(/\s+/g, '')

    let stack = []
    let num = 0, sign = '+'

    for (let i = 0; i < s.length; i++) {
        // calculate the number from numeral strings
        if (isDigit(s[i]))
            num = num * 10 + parseInt(s[i])

        if (!isDigit(s[i]) || i === s.length - 1) {
            if (sign === '-')
                stack.push(-num)

            if (sign === '+')
                stack.push(num)

            // backtrack to the immeidate closest one for * or /
            if (sign === '*')
                stack.push(stack.pop() * num)

            if (sign === '/')
                stack.push(parseInt(stack.pop() / num))

            sign = s[i]
            num = 0
        }
    }

    // sum togeter all at the end
    return stack.reduce((acc, cur) => acc + cur)
}
