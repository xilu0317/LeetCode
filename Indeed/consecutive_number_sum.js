/**
* @param {number} N
* @return {number}
*/
const consecutiveNumbersSum = (N) => {
    let res = 0;
    for (let m = 1; ; m++) {
        let diff = N - m * (m - 1) / 2;
        if (diff <= 0)
            break;
        if (diff % m === 0)
            res++;
    }

    return res;
};
