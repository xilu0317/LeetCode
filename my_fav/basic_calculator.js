const isDigit = (c) => {
    if (!c) return false;

    // apparently empty space is not a digit
    if (c === ' ') return false;

    return !isNaN(c);
};

const calculate = (s) => {
    let stack = [];
    let res = 0;
    let num = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (isDigit(c)) {
            num = 10 * num + parseInt(c);
        } else if (c === '+') {
            res += sign * num;
            num = 0;
            sign = 1;
        } else if (c === '-') {
            res += sign * num;
            num = 0;
            sign = -1;
        } else if (c === '(') {
            // notice the order is reversed so when poping
            stack.push(res);
            stack.push(sign);
            sign = 1;
            res = 0;
        } else if (c === ')') {
            res += sign * num;
            num = 0;
            // first the sign is popped
            res *= stack.pop();
            // then the number is popped
            res += stack.pop();
        }
    }

    if (num !== 0) res += sign * num;
    return res;
};