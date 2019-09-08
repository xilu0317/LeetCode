const isValid = (string) => {
    const stack = [];
    const dict = {};

    dict['{'] = '}';
    dict['['] = ']';
    dict['('] = ')';

    for (const c of string) {
        if (c === '{' || c === '[' || c === '(') {
            stack.push(c);
        } else {
            if (c !== dict[stack[stack.length - 1]]) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
};
