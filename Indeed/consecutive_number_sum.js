// KEY: derive the general term formula for the algebric sequence

const consecutiveNumbersSum = (N) => {
    let res = 0;
    // didn't specify the running condition because of the 'break'
    for (let m = 1; ; m++) {
        let xm = N - m * (m - 1) / 2; // need to derive this
        // consecutive positive integers 
        // m (numbers of terms) can never be zero
        if (xm <= 0)
            break;

        // check if x (the initial term of the sequence is an integer)
        if (xm % m === 0)
            res++;
    }

    return res;
};
