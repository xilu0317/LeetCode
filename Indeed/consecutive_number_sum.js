/**
* @param {number} N
* @return {number}
*/
const consecutiveNumbersSum = (N) => {
    let res = 0;
    for (let m = 1; ; m++) {
        let mx = N - m * (m - 1) / 2;
        if (mx <= 0)
            break;
        if (mx % m === 0)
            res++;
    }

    return res;
};
