const isDigit = (c) => {
    return !isNaN(c)
}

const calculate = (s) => {
    if (!s || !s.length) return 0

    let stack = []
    let res = 0, num = 0, sign = 1

    for (let i = 0; i < s.length; i++) {

        let c = s[i]
        if (c === ' ') continue

        if (isDigit(c)) {
            num = 10 * num + parseInt(c)
        } else if (c === '+') {
            // calculate things before this '+' sign
            res += sign * num
            // reset the number
            num = 0
            // setup sign for the next operation
            sign = 1
        } else if (c === '-') {
            res += sign * num
            num = 0
            sign = -1
        } else if (c === '(') {
            stack.push(res)
            stack.push(sign)
            sign = 1
            res = 0
        } else if (c === ')') {
            res += sign * num
            num = 0
            res *= stack.pop()
            res += stack.pop()
        }
    }

    res += sign * num

    return res
}
