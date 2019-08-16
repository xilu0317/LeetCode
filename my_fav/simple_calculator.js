const isDigit = (c) => {
    if (!c) return false;

    // apparently empty space is not a digit
    if (c === ' ') return false;

    return !isNaN(c);
};

const calculate = (s) => {
    if (!s || !s.length) return 0;

    // don't forget to re-assign the processed string back to s
    s = s.replace(/\s+/g,'');

    let len = s.length;
    let stack = [];
    let num = 0;
    let sign = '+';

    for (let i = 0; i < len; i++) {
        // calculate the number
        if (isDigit(s[i])) {
            num = num * 10 + parseInt(s[i]);
        }

        if (!isDigit(s[i]) || i === len - 1) {
            if (sign === '-') {
                stack.push(-num);
            }
            if (sign === '+') {
                stack.push(num);
            }
            if (sign === '*') {
                stack.push(stack.pop() * num);
            }
            if (sign === '/') {
                stack.push(parseInt(stack.pop() / num));
            }
            sign = s[i];
            num = 0;
        }
    }

    // sum of all elements in the stack
    return stack.reduce((acc, cur) => acc + cur);
};