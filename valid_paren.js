const isValid = (s) => {
    let stack = [];
    let dict = {};

    dict['{'] = '}';
    dict['['] = ']';
    dict['('] = ')';

    let charArr = Array.from(s);
    for (let c of charArr) {
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