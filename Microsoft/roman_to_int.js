// Need to explain the observation to the interviewers
const romanToInt = (s) => {
    let dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = dict[s[s.length - 1]];

    for (let i = s.length - 2; i >= 0; i--) {
        if (dict[s[i]] < dict[s[i + 1]])
            sum -= dict[s[i]];
        else
            sum += dict[s[i]];
    }

    return sum;
};
