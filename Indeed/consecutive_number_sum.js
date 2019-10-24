// algebraic sequence
// the key to solving this problem is equation derivation
const consecutiveNumbersSum = (N) => {
    let res = 0;
    for (let m = 1; ; m++) {
        let xm = N - m * (m - 1) / 2; // need to derive this
        if (xm <= 0)
            break;
        // check if xm divided by m is still an integer
        if (xm % m === 0)
            res++;
    }

    return res;
};
