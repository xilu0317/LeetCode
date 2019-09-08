// Need to explain the observation to the interviewers
const romanToInt = (s) => {
    if (!s) return null;

    const dict = {};
    dict['I'] = 1;
    dict['V'] = 5;
    dict['X'] = 10;
    dict['L'] = 50;
    dict['C'] = 100;
    dict['D'] = 500;
    dict['M'] = 1000;

    let sum = 0;

    if (s.includes('IV')) sum -= 2;
    if (s.includes('IX')) sum -= 2;
    if (s.includes('XL')) sum -= 20;
    if (s.includes('XC')) sum -= 20;
    if (s.includes('CD')) sum -= 200;
    if (s.includes('CM')) sum -= 200;

    for (let i = 0; i < s.length; ++i) {
        sum += dict[s[i]];
    }

    return sum;
};
