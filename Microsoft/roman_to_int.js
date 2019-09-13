// Need to explain the observation to the interviewers
const romanToInt = (s) => {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = map[s[s.length - 1]];

    for (let i = s.length - 2; i >= 0; i--) {
        if (map[s[i]] < map[s[i + 1]])
            sum -= map[s[i]];
        else
            sum += map[s[i]];
    }

    return sum;
};
