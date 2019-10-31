const isDigit = (c) => {
    return !isNaN(c);
};


// KEY: only use stack when we encounter parentheses
const calculate = (s) => {
    if (!s || !s.length) return 0;

    let stack = [];
    let res = 0, num = 0, sign = 1;

    for (let i = 0; i < s.length; i++) {

        let c = s[i];
        if (c === ' ') continue;

        if (isDigit(c)) {
            num = 10 * num + parseInt(c);
        } else if (c === '+') {
            // note this is calculation for things before this '+' sign
            res += sign * num;
            // reset the number
            num = 0;
            sign = 1;
        } else if (c === '-') {
            // note this is calculation for things before this '-' sign
            res += sign * num;
            num = 0;
            sign = -1;
        } else if (c === '(') {
            // notice the order is reversed so when popping
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

    // Add the last number
    if (num !== 0) res += sign * num;

    return res;
};
