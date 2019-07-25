/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    if (!S) return S;

    let letterRegex = /\b[a-z]\b/i;
    let stack = [];

    for (let i = 0; i < S.length; i++) {
        if (letterRegex.test(S[i])) {
            stack.push(S[i]);
        }
    }

    let stringArr = [];
    for (let i = 0; i < S.length; i++) {
        if (letterRegex.test(S[i])) {
            stringArr.push(stack.pop());
        } else {
            stringArr.push(S[i]);
        }
    }

    return stringArr.join('');
};