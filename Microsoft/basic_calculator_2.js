const isDigit = (c) => {
    return !isNaN(c);
};

const calculate = (s) => {
    if (!s || !s.length) return 0;

    // don't forget to re-assign the processed string back to s
    s = s.replace(/\s+/g, '');

    let stack = [];
    let num = 0, sign = '+';

    for (let i = 0; i < s.length; i++) {
        // calculate the number
        if (isDigit(s[i]))
            num = num * 10 + parseInt(s[i]);

        if (!isDigit(s[i]) || i === s.length - 1) {
            if (sign === '-')
                stack.push(-num);

            if (sign === '+')
                stack.push(num);

            if (sign === '*')
                stack.push(stack.pop() * num);

            if (sign === '/')
                stack.push(parseInt(stack.pop() / num));

            sign = s[i];
            num = 0;
        }
    }

    // sum of all elements in the stack
    return stack.reduce((acc, cur) => acc + cur);
};
