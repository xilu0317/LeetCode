// CLEAN
const romanToInt = (s) => {
    let len = s.length;

    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = map[s[len - 1]];

    for (let i = len - 2; i >= 0; i--) {
        if (map[s[i]] < map[s[i + 1]])
            sum -= map[s[i]];
        else
            sum += map[s[i]];
    }

    return sum;
};

// EASY TO UNDERSTAND
const romanToInt = function (s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = 0;
    for (let i = 0; i < s.length; ++i)
        sum += map[s[i]];

    // rectify the values
    if (s.includes('IV')) sum -= 2;
    if (s.includes('IX')) sum -= 2;
    if (s.includes('XL')) sum -= 20;
    if (s.includes('XC')) sum -= 20;
    if (s.includes('CD')) sum -= 200;
    if (s.includes('CM')) sum -= 200;

    return sum;
};
